"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  ChevronDown,
  Filter,
  RotateCcw,
  Search,
  Shield,
  TableProperties,
  Truck,
} from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { Footer } from "@/components/landing/footer"
import { Header } from "@/components/landing/header"
import { QuoteLink } from "@/components/quote-link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { getBrandMark, productBrands } from "@/lib/brand-data"
import { productCategories, type CatalogProduct } from "@/lib/product-data"
import heroImage from "@/assets/homedesign/strongbuilt-industry-hero-bg.png"
import cargoTruckImage from "@/assets/forland/Cargo Truck Double Cabin .png"
import dumpTruckImage from "@/assets/forland/Dump Truck 3CBM.png"
import reeferTruckImage from "@/assets/forland/14FOOTER COMMINS & 17FOOTER COMMINS Specification.png"
import tractorTruckImage from "@/assets/sinotruck/1.png"
import heavyTruckImage from "@/assets/shacman/SX3255MT384.png"

const ALL_BRANDS = "All Brands"
const ALL_CATEGORIES = "All Body Types"
const ALL_FILTERS = "All"

const moreFilterConfig = [
  { id: "drive", label: "Drive Type", specLabels: ["Drive", "Drive form", "Driving type"] },
  { id: "engine", label: "Engine Type", specLabels: ["Engine"] },
  { id: "transmission", label: "Transmission", specLabels: ["Transmission", "Gearbox"] },
  { id: "payload", label: "GVW / Payload", specLabels: ["Payload", "GVW"] },
  { id: "cab", label: "Cab Type", specLabels: ["Cab"] },
  { id: "fuel", label: "Fuel Type", specLabels: ["Fuel tank", "Fuel", "Oil tank"] },
] as const

type MoreFilterId = (typeof moreFilterConfig)[number]["id"]
type MoreFilters = Record<MoreFilterId, string>

function getSpecItems(spec: string) {
  return spec
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean)
}

function getSpecPairs(spec: string) {
  return getSpecItems(spec).map((item) => {
    const [label, ...valueParts] = item.split(":")
    const value = valueParts.join(":").trim()

    return value ? { label: label.trim(), value } : { label: "Detail", value: item }
  })
}

function getSpecValue(product: CatalogProduct, labels: readonly string[]) {
  const pairs = getSpecPairs(product.spec)
  const normalizedLabels = labels.map((label) => label.toLowerCase())
  const match = pairs.find((pair) =>
    normalizedLabels.some((label) => pair.label.toLowerCase() === label || pair.label.toLowerCase().includes(label)),
  )

  return match?.value ?? ""
}

function getCardSpecs(product: CatalogProduct) {
  const pairs = getSpecPairs(product.spec)
  const preferredLabels = ["Series", "Model", "Drive", "Engine", "Payload", "Body Type"]
  const preferred = preferredLabels
    .map((label) => pairs.find((pair) => pair.label.toLowerCase().includes(label.toLowerCase())))
    .filter((item): item is { label: string; value: string } => Boolean(item))

  return (preferred.length ? preferred : pairs).slice(0, 3)
}

function getTruckImage(product: CatalogProduct) {
  const looseProduct = product as CatalogProduct & {
    image?: string
    productImage?: string
    truckImage?: string
    images?: string[]
    photo?: string
    thumbnail?: string
  }
  const directImage =
    looseProduct.imageUrl ||
    looseProduct.image ||
    looseProduct.productImage ||
    looseProduct.truckImage ||
    looseProduct.images?.[0] ||
    looseProduct.photo ||
    looseProduct.thumbnail

  if (directImage) {
    return directImage
  }

  if (product.category === "Dump Truck") return dumpTruckImage.src
  if (product.category === "Aluminum Van" || product.category === "Cargo Truck" || product.category === "Dropside") {
    return cargoTruckImage.src
  }
  if (product.category === "Refrigerated Van") return reeferTruckImage.src
  if (product.category === "Tractor Head") return tractorTruckImage.src
  if (product.category === "Heavy-Duty Trucks") return heavyTruckImage.src

  return ""
}

const emptyMoreFilters: MoreFilters = {
  drive: ALL_FILTERS,
  engine: ALL_FILTERS,
  transmission: ALL_FILTERS,
  payload: ALL_FILTERS,
  cab: ALL_FILTERS,
  fuel: ALL_FILTERS,
}

export default function ProductsPage() {
  const [selectedBrand, setSelectedBrand] = useState(ALL_BRANDS)
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortMode, setSortMode] = useState("featured")
  const [moreFilters, setMoreFilters] = useState<MoreFilters>(emptyMoreFilters)
  const [products, setProducts] = useState<CatalogProduct[]>([])
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const brand = params.get("brand")

    if (brand) {
      setSelectedBrand(brand)
    }

    fetch("/api/products?site=strongbuilt", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error("Unable to load products."))))
      .then((data: { products?: CatalogProduct[] }) => setProducts(data.products ?? []))
      .catch(() => setProducts([]))
      .finally(() => setIsLoading(false))
  }, [])

  const brands = useMemo(() => {
    const productBrandNames = new Set(products.map((product) => product.brand).filter(Boolean))

    return productBrands
      .map((brand) => brand.name)
      .filter((brand) => productBrandNames.has(brand))
      .concat(Array.from(productBrandNames).filter((brand) => !productBrands.some((item) => item.name === brand)))
  }, [products])

  const moreFilterOptions = useMemo(() => {
    return moreFilterConfig.reduce<Record<MoreFilterId, string[]>>(
      (options, filter) => {
        const values = products
          .map((product) => getSpecValue(product, filter.specLabels))
          .filter(Boolean)
          .filter((value, index, list) => list.indexOf(value) === index)
          .sort((a, b) => a.localeCompare(b))

        options[filter.id] = values
        return options
      },
      { drive: [], engine: [], transmission: [], payload: [], cab: [], fuel: [] },
    )
  }, [products])

  const visibleProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return products
      .filter((product) => {
        const matchesBrand = selectedBrand === ALL_BRANDS || product.brand === selectedBrand
        const matchesCategory = selectedCategory === ALL_CATEGORIES || product.category === selectedCategory
        const matchesSearch =
          !query ||
          [product.name, product.brand, product.category, product.description, product.spec, product.badge]
            .filter(Boolean)
            .some((value) => value?.toLowerCase().includes(query))
        const matchesMoreFilters = moreFilterConfig.every((filter) => {
          const selectedValue = moreFilters[filter.id]

          return selectedValue === ALL_FILTERS || getSpecValue(product, filter.specLabels) === selectedValue
        })

        return matchesBrand && matchesCategory && matchesSearch && matchesMoreFilters
      })
      .sort((firstProduct, secondProduct) => {
        if (sortMode === "name") return firstProduct.name.localeCompare(secondProduct.name)
        if (sortMode === "brand") {
          return firstProduct.brand.localeCompare(secondProduct.brand) || firstProduct.name.localeCompare(secondProduct.name)
        }
        if (sortMode === "body") {
          return firstProduct.category.localeCompare(secondProduct.category) || firstProduct.name.localeCompare(secondProduct.name)
        }

        return 0
      })
  }, [moreFilters, products, searchQuery, selectedBrand, selectedCategory, sortMode])

  const selectedSpecItems = useMemo(
    () => (selectedProduct ? getSpecItems(selectedProduct.spec) : []),
    [selectedProduct],
  )
  const selectedSpecPairs = useMemo(
    () => (selectedProduct ? getSpecPairs(selectedProduct.spec) : []),
    [selectedProduct],
  )
  const selectedBrandMark = useMemo(
    () => (selectedBrand === ALL_BRANDS ? null : getBrandMark(selectedBrand)),
    [selectedBrand],
  )

  function clearFilters() {
    setSearchQuery("")
    setSelectedBrand(ALL_BRANDS)
    setSelectedCategory(ALL_CATEGORIES)
    setSortMode("featured")
    setMoreFilters(emptyMoreFilters)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#101010] py-14 text-background lg:py-16">
          <Image src={heroImage} alt="" fill priority className="object-cover opacity-45" sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,16,0.95)_0%,rgba(16,16,16,0.82)_36%,rgba(16,16,16,0.42)_100%)]" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(135deg, transparent 0 46%, white 46% 49%, transparent 49% 100%)",
              backgroundSize: "42px 42px",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Badge className="border border-background/15 bg-primary text-primary-foreground shadow-sm shadow-black/10">
              Truck Inventory
            </Badge>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-balance sm:text-5xl">
              Commercial trucks, filtered <span className="text-primary">by brand</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-background/75 text-pretty">
              Browse Strongbuilt truck units by trusted commercial brands, then send a quote inquiry for the model or
              body configuration your fleet needs.
            </p>
          </div>
        </section>

        <section className="inventory-surface relative overflow-hidden py-10 lg:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0))]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-full w-[clamp(180px,18vw,360px)] bg-[linear-gradient(90deg,rgba(128,137,143,0.2)_0%,rgba(204,211,215,0.13)_42%,rgba(255,255,255,0)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-[clamp(180px,18vw,360px)] bg-[linear-gradient(270deg,rgba(128,137,143,0.2)_0%,rgba(204,211,215,0.13)_42%,rgba(255,255,255,0)_100%)]"
          />

          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-8">
            <aside className="h-fit rounded-lg border border-[#d8d8d8] bg-white p-4 shadow-lg shadow-black/8 lg:sticky lg:top-28">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Filter className="h-5 w-5" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-foreground">Filter Inventory</p>
              </div>

              <div className="grid gap-4">
                <label className="relative block">
                  <span className="sr-only">Search trucks</span>
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search trucks, bodies, specs..."
                    className="h-10 bg-white pl-10 focus-visible:ring-primary/35"
                  />
                </label>

                <label htmlFor="product-brand" className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Truck Brand</span>
                  <select
                    id="product-brand"
                    value={selectedBrand}
                    onChange={(event) => setSelectedBrand(event.target.value)}
                    className="mt-2 h-10 w-full rounded-md border border-input bg-white px-3 text-sm text-foreground shadow-xs outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/35"
                  >
                    <option value={ALL_BRANDS}>{ALL_BRANDS}</option>
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor="product-category" className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Body Type</span>
                  <select
                    id="product-category"
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                    className="mt-2 h-10 w-full rounded-md border border-input bg-white px-3 text-sm text-foreground shadow-xs outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/35"
                  >
                    <option value={ALL_CATEGORIES}>{ALL_CATEGORIES}</option>
                    {productCategories.map((category) => (
                      <option key={category.name} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor="product-sort" className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sort</span>
                  <select
                    id="product-sort"
                    value={sortMode}
                    onChange={(event) => setSortMode(event.target.value)}
                    className="mt-2 h-10 w-full rounded-md border border-input bg-white px-3 text-sm text-foreground shadow-xs outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/35"
                  >
                    <option value="featured">Featured order</option>
                    <option value="name">Name A-Z</option>
                    <option value="brand">Brand A-Z</option>
                    <option value="body">Body type A-Z</option>
                  </select>
                </label>

                <details className="group rounded-md border-t border-border pt-3" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold uppercase tracking-wider text-foreground">
                    More Filters
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 grid gap-3">
                    {moreFilterConfig.map((filter) => (
                      <label key={filter.id} htmlFor={`filter-${filter.id}`} className="block">
                        <span className="text-xs font-medium text-muted-foreground">{filter.label}</span>
                        <select
                          id={`filter-${filter.id}`}
                          value={moreFilters[filter.id]}
                          onChange={(event) =>
                            setMoreFilters((current) => ({ ...current, [filter.id]: event.target.value }))
                          }
                          className="mt-1 h-9 w-full rounded-md border border-input bg-white px-3 text-sm text-foreground shadow-xs outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/35"
                        >
                          <option value={ALL_FILTERS}>All</option>
                          {moreFilterOptions[filter.id].map((value) => (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </label>
                    ))}
                  </div>
                </details>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-primary/45 text-primary hover:bg-primary/10 hover:text-primary"
                  onClick={clearFilters}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Clear all filters
                </Button>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-3xl">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/15">
                      {selectedBrand === ALL_BRANDS ? (
                        <Truck className="h-7 w-7 text-primary" />
                      ) : selectedBrandMark?.logoSrc ? (
                        <img
                          src={selectedBrandMark.logoSrc}
                          alt={`${selectedBrandMark.name} logo`}
                          className="h-9 w-11 object-contain"
                        />
                      ) : (
                        <Truck className="h-7 w-7 text-primary" />
                      )}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {selectedBrand === ALL_BRANDS ? "Available Truck Units" : selectedBrand}
                    </h2>
                  </div>
                  <p className="mt-3 text-muted-foreground">
                    Use the filters to narrow the inventory by maker, body type, and key specs.
                  </p>
                  <p className="mt-3 text-sm font-medium text-muted-foreground">
                    Showing {visibleProducts.length} of {products.length} truck units
                    {selectedBrand !== ALL_BRANDS ? ` from ${selectedBrand}` : ""}
                  </p>
                </div>
                <Button className="w-full sm:w-auto" asChild>
                  <QuoteLink
                    context={{
                      type: selectedBrand === ALL_BRANDS ? "general" : "brand",
                      value: selectedBrand === ALL_BRANDS ? "All Brands" : selectedBrand,
                    }}
                  >
                    Request Truck Quote
                  </QuoteLink>
                </Button>
              </div>

              {isLoading ? (
                <Card className="border-dashed">
                  <CardContent className="flex min-h-52 items-center justify-center p-8 text-center text-sm text-muted-foreground">
                    Loading truck inventory...
                  </CardContent>
                </Card>
              ) : visibleProducts.length ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {visibleProducts.map((product) => {
                    const previewSpecs = getCardSpecs(product)
                    const truckImage = getTruckImage(product)

                    return (
                      <Card
                        key={product.id}
                        className="group flex h-full flex-col overflow-hidden border-[#d8d8d8] bg-white shadow-md shadow-black/8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/15"
                      >
                        <div className="h-1 bg-primary transition-all group-hover:h-1.5" />
                        <CardContent className="flex flex-1 flex-col p-4">
                          <div className="relative mb-5 flex h-52 items-center justify-center overflow-hidden rounded-md bg-[linear-gradient(135deg,#e4e2de_0%,#ffffff_48%,#faf0e8_100%)]">
                            <BrandMark
                              brand={product.brand}
                              compact
                              className="absolute right-3 top-3 z-10 h-10 min-w-[92px] border-border bg-white shadow-sm"
                            />
                            {truckImage ? (
                              <img
                                src={truckImage}
                                alt={product.name}
                                className="h-full w-full object-contain object-center p-1 transition-transform duration-300 group-hover:scale-[1.03]"
                              />
                            ) : (
                              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-muted to-primary/10">
                                <BrandMark brand={product.brand} className="border-0 bg-transparent shadow-none" />
                                <p className="px-6 text-center text-sm font-medium text-muted-foreground">
                                  Truck image coming soon
                                </p>
                              </div>
                            )}
                          </div>
                          <div className="flex flex-1 flex-col">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-primary">{product.brand}</p>
                                <h3 className="mt-2 text-lg font-bold leading-snug text-foreground group-hover:text-primary">
                                  {product.name}
                                </h3>
                              </div>
                              <Badge variant="outline" className="shrink-0 bg-white text-xs">
                                {product.category}
                              </Badge>
                            </div>
                            <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                              {product.description}
                            </p>
                            <div className="mt-4 grid grid-cols-3 gap-2 rounded-md border border-border bg-white p-2">
                              {previewSpecs.map((spec) => (
                                <div key={`${product.id}-${spec.label}-${spec.value}`} className="min-w-0">
                                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                    {spec.label}
                                  </p>
                                  <p className="mt-1 line-clamp-1 text-xs font-semibold text-foreground">{spec.value}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="mt-5 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                            <button
                              type="button"
                              onClick={() => setSelectedProduct(product)}
                              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            >
                              View details
                              <ArrowRight className="h-4 w-4" />
                            </button>
                            <Button size="sm" asChild>
                              <QuoteLink context={{ type: "truck", value: product.name }}>Request Truck Quote</QuoteLink>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              ) : (
                <Card className="border-dashed bg-white">
                  <CardContent className="flex min-h-52 flex-col items-center justify-center p-8 text-center">
                    <Shield className="h-12 w-12 text-muted-foreground/60" />
                    <h3 className="mt-4 text-lg font-semibold text-foreground">No truck units match those filters</h3>
                    <p className="mt-2 max-w-md text-sm text-muted-foreground">
                      Try clearing your filters, or add new truck units from the admin catalog.
                    </p>
                    <Button className="mt-4" variant="outline" onClick={clearFilters}>
                      Clear all filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>

      <Dialog open={Boolean(selectedProduct)} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-[linear-gradient(135deg,#d0cdc8_0%,#ffffff_22%,#fff8f2_54%,#c3c7ca_100%)] shadow-2xl shadow-black/35 sm:max-w-5xl">
          {selectedProduct && (
            <>
              <DialogHeader className="pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <BrandMark brand={selectedProduct.brand} compact className="border-border bg-white" />
                  <Badge variant="outline">{selectedProduct.brand}</Badge>
                  <Badge variant="secondary">{selectedProduct.category}</Badge>
                </div>
                <DialogTitle className="text-2xl leading-tight">{selectedProduct.name}</DialogTitle>
                <DialogDescription className="text-base leading-7">{selectedProduct.description}</DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="relative flex max-h-[520px] min-h-64 items-center justify-center overflow-hidden rounded-lg border border-border bg-[linear-gradient(135deg,#d7d5d1_0%,#ffffff_42%,#f8efe8_68%,#bfc4c7_100%)]">
                    <BrandMark
                      brand={selectedProduct.brand}
                      compact
                      className="absolute right-3 top-3 z-10 border-0 bg-background/85 shadow-sm backdrop-blur-sm"
                    />
                    {getTruckImage(selectedProduct) ? (
                      <img
                        src={getTruckImage(selectedProduct)}
                        alt={selectedProduct.name}
                        className="max-h-[500px] w-full object-contain p-3"
                      />
                    ) : (
                      <div className="flex min-h-72 w-full flex-col items-center justify-center gap-4 bg-muted">
                        <Truck className="h-16 w-16 text-primary/70" />
                        <p className="text-sm font-medium text-muted-foreground">Truck image coming soon</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid content-start gap-4">
                  <div className="rounded-lg border border-border bg-background/80 p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Features</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[selectedProduct.brand, selectedProduct.category, selectedProduct.badge, ...selectedSpecItems.slice(0, 5)]
                        .filter(Boolean)
                        .map((spec) => (
                          <Badge key={spec} variant="secondary" className="bg-primary/10 text-foreground">
                            {spec}
                          </Badge>
                        ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-background/80 p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <TableProperties className="h-4 w-4 text-primary" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Specifications
                      </p>
                    </div>
                    <div className="mt-4 divide-y divide-border overflow-hidden rounded-md border border-border">
                      {selectedSpecPairs.map((spec) => (
                        <div
                          key={`${spec.label}-${spec.value}`}
                          className="grid gap-1 bg-background px-3 py-3 sm:grid-cols-[130px_1fr]"
                        >
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary">{spec.label}</p>
                          <p className="text-sm leading-6 text-foreground">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter className="sm:justify-between">
                <Button variant="outline" onClick={() => setSelectedProduct(null)}>
                  Close
                </Button>
                <Button asChild>
                  <QuoteLink context={{ type: "truck", value: selectedProduct.name }}>Request Truck Quote</QuoteLink>
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  )
}
