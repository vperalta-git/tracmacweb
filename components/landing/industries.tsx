import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import { ArrowRight, Building2, Mountain, Recycle, Route, Tractor, Warehouse } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import heroImage from "@/assets/homedesign/strongbuilt-industry-hero-bg.png"
import logisticsImage from "@/assets/homedesign/strongbuilt-logistics-delivery.png"
import constructionImage from "@/assets/homedesign/strongbuilt-construction.png"
import agricultureImage from "@/assets/homedesign/strongbuilt-agriculture.png"
import miningImage from "@/assets/shacman/Sx3315GV406.png"
import wasteImage from "@/assets/homedesign/strongbuilt-waste-management.png"
import fleetImage from "@/assets/homedesign/strongbuilt-fleet-operations.png"

const industries = [
  {
    icon: Warehouse,
    title: "Logistics & Delivery",
    image: logisticsImage,
    description: "Efficient trucks for distribution, last-mile delivery, and supply chain operations.",
  },
  {
    icon: Building2,
    title: "Construction",
    image: constructionImage,
    description: "Durable and heavy-duty trucks built for construction sites and demanding projects.",
  },
  {
    icon: Tractor,
    title: "Agriculture",
    image: agricultureImage,
    description: "Dependable trucks for farms, plantations, and agricultural transport needs.",
  },
  {
    icon: Mountain,
    title: "Mining & Quarry",
    image: miningImage,
    description: "Built tough for heavy loads and harsh mining & quarry environments.",
  },
  {
    icon: Recycle,
    title: "Waste Management",
    image: wasteImage,
    description: "Specialized trucks for waste collection, disposal, and environmental services.",
  },
  {
    icon: Route,
    title: "Fleet Operations",
    image: fleetImage,
    description: "Scalable fleet solutions to keep your business moving and your operations ahead.",
  },
] satisfies {
  icon: typeof Warehouse
  title: string
  image: StaticImageData
  description: string
}[]

export function Industries() {
  return (
    <section id="industries" className="overflow-hidden bg-[#faf7f2]">
      <div className="relative bg-[#101010] py-20 text-white lg:py-24">
        <Image src={heroImage} alt="" fill priority={false} className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,16,0.94)_0%,rgba(16,16,16,0.78)_42%,rgba(16,16,16,0.48)_100%)]" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(135deg, transparent 0 46%, white 46% 49%, transparent 49% 100%)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="bg-primary text-primary-foreground">Our Industries</Badge>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight text-balance sm:text-5xl">
            Solutions for Every <span className="text-primary">Business Route</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78 text-pretty">
            Strongbuilt provides reliable commercial trucks and equipment built to support the industries that keep our
            nation moving.
          </p>
        </div>
      </div>

      <div className="relative py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(135deg, transparent 0 46%, #161616 46% 49%, transparent 49% 100%)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#d8d8d8] bg-white shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="h-1 bg-primary/85 transition-all duration-300 group-hover:bg-primary" />
              <div className="relative h-56 overflow-hidden bg-[linear-gradient(135deg,#ece9e4_0%,#ffffff_45%,#f7efe8_100%)] sm:h-52 lg:h-56">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-black/20">
                  <industry.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="relative flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold leading-snug text-foreground">{industry.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-muted-foreground">{industry.description}</p>
                <Link
                  href="/products"
                  className="mt-5 inline-flex items-center justify-between gap-2 text-sm font-semibold text-primary transition-colors hover:text-[#c94d00]"
                >
                  <span>View solutions</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
