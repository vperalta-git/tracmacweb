"use client"

import { useEffect, useMemo, useState } from "react"
import {
  Anchor,
  BadgeCheck,
  BriefcaseBusiness,
  Ear,
  Eye,
  Footprints,
  Hand,
  HardHat,
  Mountain,
  Search,
  Shield,
  Shirt,
  SlidersHorizontal,
  Trash2,
  Wind,
  type LucideIcon,
} from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { QuoteLink } from "@/components/quote-link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { productBrands } from "@/lib/brand-data"
import { productCategories, type CatalogProduct, type ProductCategoryName } from "@/lib/product-data"

const ALL_PRODUCTS = "All Products"
const ALL_BRANDS = "All Brands"

const categoryIcons: Record<ProductCategoryName, LucideIcon> = {
  "Foot Protection": Footprints,
  "Head Protection": HardHat,
  "Fall Protection": Anchor,
  "Eye and Face Protection": Eye,
  "Hearing Protection": Ear,
  "Respiratory Protection": Wind,
  "Hand Protection": Hand,
  Workwear: Shirt,
  "Outdoor Wear": Mountain,
  "Technical Wear": BriefcaseBusiness,
  "Disposable Wear": Trash2,
  ESD: Shield,
  "W/ DOLE Certificate": BadgeCheck,
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(ALL_PRODUCTS)
  const [selectedBrand, setSelectedBrand] = useState(ALL_BRANDS)
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState<CatalogProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const category = params.get("category")
    const brand = params.get("brand")

    if (category && productCategories.some((item) => item.name === category)) {
      setSelectedCategory(category)
    }

    if (brand) {
      setSelectedBrand(brand)
    }

    fetch("/api/products", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error("Unable to load products."))))
      .then((data: { products?: CatalogProduct[] }) => setProducts(data.products ?? []))
      .catch(() => setProducts([]))
      .finally(() => setIsLoading(false))
  }, [])

  const activeCategory = useMemo(
    () => productCategories.find((category) => category.name === selectedCategory),
    [selectedCategory],
  )

  const brands = useMemo(() => {
    const productBrandNames = new Set(products.map((product) => product.brand).filter(Boolean))

    return productBrands
      .map((brand) => brand.name)
      .filter((brand) => productBrandNames.has(brand))
      .concat(Array.from(productBrandNames).filter((brand) => !productBrands.some((item) => item.name === brand)))
  }, [products])

  const visibleProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory = !activeCategory || product.category === activeCategory.name
      const matchesBrand = selectedBrand === ALL_BRANDS || product.brand === selectedBrand
      const matchesSearch =
        !query ||
        [product.name, product.brand, product.category, product.description, product.spec, product.badge]
          .filter(Boolean)
          .some((value) => value?.toLowerCase().includes(query))

      return matchesCategory && matchesBrand && matchesSearch
    })
  }, [activeCategory, products, searchQuery, selectedBrand])

  const SectionIcon = activeCategory ? categoryIcons[activeCategory.name] : Shield

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-foreground py-16 text-background lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_460px] lg:px-8">
            <div>
              <Badge className="bg-primary text-primary-foreground">Product Catalog</Badge>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-balance sm:text-5xl">
                Industrial safety products, filtered for faster buying
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-background/75 text-pretty">
                Browse TRACMAC's PPE selection by category, brand, or keyword so procurement teams can find
                the right gear without digging through the whole catalog.
              </p>
            </div>

            <div className="self-end rounded-lg border border-background/10 bg-background/5 p-4 shadow-2xl shadow-black/10">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-background/70">
                <SlidersHorizontal className="h-4 w-4 text-primary" />
                Filter Catalog
              </div>
              <div className="grid gap-3">
                <label className="relative block">
                  <span className="sr-only">Search products</span>
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search products, specs, brands..."
                    className="h-12 border-background/20 bg-background pl-10 text-foreground"
                  />
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label htmlFor="product-brand" className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-background/60">Brand</span>
                    <select
                      id="product-brand"
                      value={selectedBrand}
                      onChange={(event) => setSelectedBrand(event.target.value)}
                      className="mt-2 h-12 w-full rounded-md border border-background/20 bg-background px-4 text-sm font-medium text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
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
                    <span className="text-xs font-semibold uppercase tracking-wider text-background/60">Category</span>
                    <select
                      id="product-category"
                      value={selectedCategory}
                      onChange={(event) => setSelectedCategory(event.target.value)}
                      className="mt-2 h-12 w-full rounded-md border border-background/20 bg-background px-4 text-sm font-medium text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
                    >
                      <option value={ALL_PRODUCTS}>{ALL_PRODUCTS}</option>
                      {productCategories.map((category) => (
                        <option key={category.name} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/15">
                  <SectionIcon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{activeCategory?.name ?? ALL_PRODUCTS}</h2>
                <p className="mt-3 text-muted-foreground">
                  {activeCategory?.description ?? "Use brand, category, and search filters to narrow the catalog."}
                </p>
                <p className="mt-3 text-sm font-medium text-muted-foreground">
                  Showing {visibleProducts.length} of {products.length} products
                  {selectedBrand !== ALL_BRANDS ? ` from ${selectedBrand}` : ""}
                </p>
              </div>
              <Button className="w-full sm:w-auto" asChild>
                <QuoteLink
                  context={
                    activeCategory
                      ? { type: "category", value: activeCategory.name }
                      : { type: "general", value: "PPE quote" }
                  }
                >
                  {activeCategory ? "Request Category Quote" : "Request Product Quote"}
                </QuoteLink>
              </Button>
            </div>

            {isLoading ? (
              <Card className="border-dashed">
                <CardContent className="flex min-h-52 items-center justify-center p-8 text-center text-sm text-muted-foreground">
                  Loading catalog products...
                </CardContent>
              </Card>
            ) : visibleProducts.length ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visibleProducts.map((product) => {
                  const ProductIcon = categoryIcons[product.category]

                  return (
                    <Card key={product.id} className="group overflow-hidden border-border transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="relative mb-5 flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-muted">
                          <BrandMark brand={product.brand} compact className="absolute right-3 top-3 z-10" />
                          {product.imageUrl ? (
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-muted to-primary/10">
                              <ProductIcon className="h-16 w-16 text-primary/70" />
                              <p className="px-6 text-center text-sm font-medium text-muted-foreground">
                                Product image coming soon
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                              {product.brand}
                            </p>
                            <p className="mt-1 text-xs font-medium text-muted-foreground">{product.category}</p>
                          </div>
                          {product.badge && (
                            <Badge variant={product.isDemo ? "outline" : "secondary"}>{product.badge}</Badge>
                          )}
                        </div>
                        <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground">{product.name}</h3>
                        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{product.description}</p>
                        <div className="mt-4 rounded-md border border-border bg-muted/40 px-3 py-2">
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Specs</p>
                          <p className="mt-1 text-sm font-medium text-foreground">{product.spec}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button variant="outline" className="w-full" asChild>
                          <QuoteLink context={{ type: "product", value: product.name }}>Request Quote</QuoteLink>
                        </Button>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            ) : (
              <Card className="border-dashed">
                <CardContent className="flex min-h-52 flex-col items-center justify-center p-8 text-center">
                  <Shield className="h-12 w-12 text-muted-foreground/60" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">No products available yet</h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    Products added by the admin will appear here automatically.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
