import Image, { type StaticImageData } from "next/image"
import { Award, Boxes, Cog, Headphones, Package, ShieldCheck, Truck } from "lucide-react"
import workReadyImage from "@/assets/shacman/SX3255MT384.png"
import brandOptionsImage from "@/assets/sinotruck/1.png"
import bodyBuildImage from "@/assets/forland/Cargo Truck Double Cabin .png"
import fleetSourcingImage from "@/assets/cimc-rjst-trailer/50KL Steel Fuel Tank Trailer.png"
import salesSupportImage from "@/assets/forland/3.2T Cargo Boom Truck .png"
import availabilityImage from "@/assets/asiastar/JS6762G.png"

const features = [
  {
    icon: Truck,
    title: "Work-Ready Truck Units",
    image: workReadyImage,
    description: "Practical truck units for construction, delivery, hauling, and everyday fleet operations.",
  },
  {
    icon: Award,
    title: "Trusted Brand Options",
    image: brandOptionsImage,
    description: "Compare commercial vehicle brands already represented in the Strongbuilt catalog.",
  },
  {
    icon: Cog,
    title: "Body Build Support",
    image: bodyBuildImage,
    description: "Get guidance for dropside, van, dump, trailer, and special-purpose body configurations.",
  },
  {
    icon: Boxes,
    title: "Fleet-Focused Sourcing",
    image: fleetSourcingImage,
    description: "Source trucks around route demands, payload requirements, quantity needs, and business timing.",
  },
  {
    icon: Headphones,
    title: "Responsive Sales Support",
    image: salesSupportImage,
    description: "Fast replies for availability, specs, body recommendations, and quotation requests.",
  },
  {
    icon: Package,
    title: "Reliable Unit Availability",
    image: availabilityImage,
    description: "Keep buyers moving with a catalog that makes available units easy to review and update.",
  },
] satisfies {
  icon: typeof ShieldCheck
  title: string
  image: StaticImageData
  description: string
}[]

export function WhyChooseUs() {
  return (
    <section className="bg-[#faf7f2] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground text-balance sm:text-4xl">
            Your trusted commercial truck partner
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Strongbuilt combines practical vehicle knowledge, brand options, and fast sales support to help teams get the right truck for the job.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group overflow-hidden rounded-lg border border-border bg-white shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10">
              <div className="grid min-h-full grid-cols-[minmax(0,1fr)_116px]">
                <div className="p-5">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-foreground">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                </div>
                <div className="relative overflow-hidden bg-[linear-gradient(135deg,#202020,#0f0f0f)]">
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(231,90,0,0.22),rgba(0,0,0,0))]" />
                  <Image
                    src={feature.image}
                    alt=""
                    className="relative h-full w-full object-contain p-3 opacity-95 transition-transform duration-500 group-hover:scale-105"
                    sizes="116px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
