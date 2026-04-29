"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
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
  Shield,
  Shirt,
  Trash2,
  Wind,
  type LucideIcon,
} from "lucide-react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

type Product = {
  name: string
  spec: string
  badge?: string
}

type ProductCategory = {
  name: string
  description: string
  icon: LucideIcon
  products: Product[]
}

const categories: ProductCategory[] = [
  {
    name: "Foot Protection",
    description: "Safety footwear for daily site work, wet floors, and heavy-duty industrial environments.",
    icon: Footprints,
    products: [
      { name: "SteelGuard Lace-Up Safety Boots", spec: "Steel toe, oil-resistant outsole", badge: "Mock" },
      { name: "CompositeStep Lightweight Shoes", spec: "Composite toe, anti-slip sole" },
      { name: "RainShield PVC Safety Boots", spec: "Waterproof, chemical-resistant finish" },
    ],
  },
  {
    name: "Head Protection",
    description: "Hard hats, bump caps, and helmet accessories for construction and industrial sites.",
    icon: HardHat,
    products: [
      { name: "ProShell Vented Hard Hat", spec: "Ratchet suspension, Type I shell", badge: "Mock" },
      { name: "ImpactLite Bump Cap", spec: "Low-profile insert, breathable cap" },
      { name: "FullBrim Safety Helmet", spec: "Wide brim, electrical insulation" },
    ],
  },
  {
    name: "Fall Protection",
    description: "Harnesses, lanyards, and anchors for elevated work and controlled access zones.",
    icon: Anchor,
    products: [
      { name: "FallSafe Full Body Harness", spec: "D-ring back support, adjustable straps", badge: "Mock" },
      { name: "TwinFlex Shock Lanyard", spec: "Double-leg, energy absorbing" },
      { name: "AnchorPoint Temporary Lifeline", spec: "Portable system for site setup" },
    ],
  },
  {
    name: "Eye and Face Protection",
    description: "Safety glasses, goggles, and shields for impact, splash, and dust protection.",
    icon: Eye,
    products: [
      { name: "ClearView Anti-Fog Goggles", spec: "Indirect vent, splash guard", badge: "Mock" },
      { name: "ImpactPro Safety Glasses", spec: "Scratch-resistant clear lens" },
      { name: "FaceGuard Flip-Up Shield", spec: "Full-face visor, brow guard" },
    ],
  },
  {
    name: "Hearing Protection",
    description: "Earplugs and earmuffs for high-noise production lines and machinery areas.",
    icon: Ear,
    products: [
      { name: "NoiseGuard Pro Earmuffs", spec: "Adjustable headband, NRR 31dB", badge: "Mock" },
      { name: "SoftSeal Corded Earplugs", spec: "Reusable silicone, carry case" },
      { name: "Helmet-Mount Ear Defenders", spec: "Hard-hat compatible cups" },
    ],
  },
  {
    name: "Respiratory Protection",
    description: "Masks and respirators for dust, fumes, and airborne particulate control.",
    icon: Wind,
    products: [
      { name: "AirPure N95 Disposable Mask", spec: "Cup style, nose clip seal", badge: "Mock" },
      { name: "DualFilter Half-Face Respirator", spec: "Replaceable cartridge design" },
      { name: "DustBlock Foldable Mask", spec: "Flat-fold, exhalation valve" },
    ],
  },
  {
    name: "Hand Protection",
    description: "Work gloves for cut resistance, grip, chemical handling, and general protection.",
    icon: Hand,
    products: [
      { name: "CutShield Level 5 Gloves", spec: "Cut-resistant liner, coated palm", badge: "Mock" },
      { name: "GripMax Nitrile Work Gloves", spec: "Textured palm, breathable back" },
      { name: "ChemBlock PVC Gloves", spec: "Extended cuff, liquid protection" },
    ],
  },
  {
    name: "Workwear",
    description: "Durable uniforms, coveralls, and high-visibility garments for daily operations.",
    icon: Shirt,
    products: [
      { name: "HiVis Reflective Safety Vest", spec: "Class 2 reflective tape", badge: "Mock" },
      { name: "Utility Cotton Coverall", spec: "Multi-pocket, reinforced seams" },
      { name: "WorkPro Cargo Pants", spec: "Heavy-duty fabric, knee pockets" },
    ],
  },
  {
    name: "Outdoor Wear",
    description: "Weather-ready gear for field crews, logistics teams, and exposed work areas.",
    icon: Mountain,
    products: [
      { name: "StormLine Waterproof Jacket", spec: "Sealed seams, reflective trim", badge: "Mock" },
      { name: "SunGuard Cooling Arm Sleeves", spec: "UV protection, quick-dry fabric" },
      { name: "FieldReady Rain Pants", spec: "Waterproof shell, elastic waist" },
    ],
  },
  {
    name: "Technical Wear",
    description: "Specialized protective apparel for welding, electrical, and heat-risk work.",
    icon: BriefcaseBusiness,
    products: [
      { name: "ArcSafe FR Coverall", spec: "Flame-resistant, arc-rated fabric", badge: "Mock" },
      { name: "WeldGuard Leather Apron", spec: "Heat-resistant split leather" },
      { name: "ThermoShield Sleeve Pair", spec: "Heat barrier for forearm protection" },
    ],
  },
  {
    name: "Disposable Wear",
    description: "Single-use coveralls, masks, caps, and shoe covers for clean or controlled zones.",
    icon: Trash2,
    products: [
      { name: "CleanZone Disposable Coverall", spec: "Elastic hood, cuffs, and ankles", badge: "Mock" },
      { name: "PolyShield Shoe Covers", spec: "Non-skid sole, elastic opening" },
      { name: "VisitorGuard Bouffant Cap", spec: "Lightweight, breathable material" },
    ],
  },
  {
    name: "ESD",
    description: "Static-control equipment for electronics, assembly, and sensitive production floors.",
    icon: Shield,
    products: [
      { name: "StaticSafe ESD Wrist Strap", spec: "Adjustable band, coiled cord", badge: "Mock" },
      { name: "ESD Workbench Mat", spec: "Grounding snap, dissipative surface" },
      { name: "Anti-Static Lab Coat", spec: "Conductive grid fabric" },
    ],
  },
  {
    name: "W/ DOLE Certificate",
    description: "Mock certified product group for items requiring DOLE documentation and compliance support.",
    icon: BadgeCheck,
    products: [
      { name: "Certified Industrial Safety Kit", spec: "Includes mock DOLE document set", badge: "Mock" },
      { name: "Compliance-Ready PPE Bundle", spec: "Helmet, vest, gloves, and goggles" },
      { name: "Site Audit Starter Pack", spec: "Mock paperwork and sample PPE set" },
    ],
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name)

  const activeCategory = useMemo(
    () => categories.find((category) => category.name === selectedCategory) ?? categories[0],
    [selectedCategory],
  )

  const ActiveIcon = activeCategory.icon

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-foreground py-16 text-background lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
            <div>
              <Badge className="bg-primary text-primary-foreground">Product Catalog</Badge>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-balance sm:text-5xl">
                PPE products organized by protection category
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-background/75 text-pretty">
                Browse the mock catalog by category for now. Each category includes three sample products that can be replaced with real inventory details later.
              </p>
            </div>

            <div className="self-end">
              <label htmlFor="product-category" className="text-sm font-semibold uppercase tracking-wider text-background/70">
                Category
              </label>
              <select
                id="product-category"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="mt-3 h-12 w-full rounded-md border border-background/20 bg-background px-4 text-sm font-medium text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-card py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-4 px-4 text-center sm:px-6 lg:px-8">
            {categories.map((category) => (
              <button
                type="button"
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  category.name === activeCategory.name ? "text-primary" : "text-foreground/75 hover:text-primary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/15">
                  <ActiveIcon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{activeCategory.name}</h2>
                <p className="mt-3 text-muted-foreground">{activeCategory.description}</p>
              </div>
              <Button asChild>
                <Link href="/#contact">Request Category Quote</Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {activeCategory.products.map((product) => (
                <Card key={product.name} className="border-border transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-5 flex aspect-square items-center justify-center rounded-lg bg-muted">
                      <ActiveIcon className="h-16 w-16 text-muted-foreground/60" />
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{activeCategory.name}</p>
                      {product.badge && <Badge variant="secondary">{product.badge}</Badge>}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground">{product.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{product.spec}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/#contact">Request Quote</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
