import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import { ArrowUpRight, Box, Construction, Container, Snowflake, Truck, Wrench } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import dumpTruckImage from "@/assets/forland/Dump Truck 3CBM.png"
import cargoTruckImage from "@/assets/forland/Cargo Truck Double Cabin .png"
import trailerImage from "@/assets/cimc-rjst-trailer/40FT Flat-bed Trailer.png"
import tractorImage from "@/assets/shacman/SX42554V324.png"
import reeferImage from "@/assets/forland/14FOOTER COMMINS & 17FOOTER COMMINS Specification.png"
import utilityImage from "@/assets/forland/46FT Aerial Work Truck Specification.png"

type TruckCategory = {
  icon: typeof Truck
  name: string
  brand: string
  spec: string
  badge: string
  image: StaticImageData
  href: string
}

const trucks: TruckCategory[] = [
  { icon: Construction, name: "Dump Trucks", brand: "Forland", spec: "Tipper units for aggregates, site hauling, and materials movement.", badge: "Worksite", image: dumpTruckImage, href: "/products?brand=Forland" },
  { icon: Box, name: "Cargo Trucks", brand: "Forland", spec: "Double-cabin and route-ready cargo bodies for daily commercial delivery.", badge: "Delivery", image: cargoTruckImage, href: "/products?brand=Forland" },
  { icon: Container, name: "Trailers", brand: "CIMC RJST Trailer", spec: "Flatbed, tank, fuel, asphalt, and mixer trailers for heavy operations.", badge: "Heavy Duty", image: trailerImage, href: "/products?brand=CIMC%20RJST%20Trailer" },
  { icon: Truck, name: "Tractor Heads", brand: "SHACMAN", spec: "Prime movers for container hauling, long-haul routes, and fleet growth.", badge: "Fleet", image: tractorImage, href: "/products?brand=SHACMAN" },
  { icon: Snowflake, name: "Refrigerated Builds", brand: "Strongbuilt", spec: "Cold-chain capable truck sourcing for food, pharma, and grocery routes.", badge: "Cold Chain", image: reeferImage, href: "/products" },
  { icon: Wrench, name: "Special Purpose", brand: "Forland", spec: "Aerial, boom, service, and utility builds adapted to field requirements.", badge: "Configurable", image: utilityImage, href: "/products?brand=Forland" },
]

export function ProductShowcase() {
  return (
    <section className="bg-[#faf7f2] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Featured Truck Builds</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground text-balance sm:text-4xl">
              Practical truck configurations for real business routes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Start from common commercial bodies, then inquire for a unit that fits your cargo, route, and payload.
            </p>
          </div>
          <Button size="lg" asChild>
            <Link href="/products">Browse Inventory</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trucks.map((truck) => (
            <Link
              key={truck.name}
              href={truck.href}
              className="group overflow-hidden rounded-lg border border-border bg-white shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="h-1 bg-primary" />
              <div className="p-4">
                <div className="relative mb-5 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-md bg-[linear-gradient(135deg,#dedbd6_0%,#ffffff_44%,#f8efe7_100%)]">
                  <BrandMark
                    brand={truck.brand}
                    compact
                    className="absolute left-3 top-3 z-10 border-0 bg-background/90 shadow-sm backdrop-blur-sm"
                  />
                  <Badge className="absolute right-3 top-3 bg-primary text-primary-foreground">{truck.badge}</Badge>
                  <Image
                    src={truck.image}
                    alt={truck.name}
                    className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <truck.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">{truck.brand}</p>
                    <h3 className="mt-1 font-semibold text-foreground transition-colors group-hover:text-primary">{truck.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{truck.spec}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View category <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
