import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HardHat, ShieldCheck, Hand, Footprints, Eye, Anchor, Wind, Ear } from "lucide-react"

const products = [
  {
    icon: HardHat,
    name: "ProGuard Industrial Hard Hat",
    category: "Head Protection",
    spec: "ANSI Z89.1 Type I Class E",
    badge: "Best Seller",
  },
  {
    icon: ShieldCheck,
    name: "HiVis Reflective Safety Vest",
    category: "Workwear",
    spec: "ANSI/ISEA 107 Class 3",
    badge: null,
  },
  {
    icon: Hand,
    name: "CutShield Level 5 Gloves",
    category: "Hand Protection",
    spec: "EN 388:2016 Level 5",
    badge: "New",
  },
  {
    icon: Footprints,
    name: "TitanStep Steel Toe Boots",
    category: "Foot Protection",
    spec: "ASTM F2413-18",
    badge: null,
  },
  {
    icon: Eye,
    name: "ClearView Safety Goggles",
    category: "Eye and Face Protection",
    spec: "ANSI Z87.1+",
    badge: null,
  },
  {
    icon: Anchor,
    name: "FallSafe Full Body Harness",
    category: "Fall Protection",
    spec: "OSHA 1926.502",
    badge: "Popular",
  },
  {
    icon: Wind,
    name: "AirPure P100 Respirator",
    category: "Respiratory Protection",
    spec: "NIOSH N95/P100",
    badge: null,
  },
  {
    icon: Ear,
    name: "NoiseGuard Pro Earmuffs",
    category: "Hearing Protection",
    spec: "NRR 31dB",
    badge: null,
  },
]

export function ProductShowcase() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Featured Categories</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground text-balance sm:text-4xl">
              PPE essentials organized for quick procurement
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Start with the most requested safety gear, then jump into the catalog to filter by brand,
              category, specs, and certification notes.
            </p>
          </div>
          <Button size="lg" asChild>
            <Link href="/products">Browse Full Catalog</Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center group-hover:bg-primary/5 transition-colors relative overflow-hidden">
                  <product.icon className="h-16 w-16 text-muted-foreground/50 group-hover:text-primary/50 transition-colors" />
                  {product.badge && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-1">
                  <p className="text-xs text-primary font-medium uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.spec}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={`/products?category=${encodeURIComponent(product.category)}`}>View Similar</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
