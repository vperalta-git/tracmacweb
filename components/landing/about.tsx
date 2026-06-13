import Image from "next/image"
import { CheckCircle2, ClipboardCheck, Route, Truck } from "lucide-react"
import aboutImage from "@/assets/shacman/Sx3315GV406.png"

const highlights = [
  "Truck options for delivery, construction, cold-chain, and fleet use",
  "Guidance on body type, payload needs, and route requirements",
  "Brand-ready catalog that is easy to update for demos",
  "Fast quote handling for commercial buyers",
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-[linear-gradient(135deg,#1f1f1f,#101010)] shadow-2xl shadow-black/15">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(135deg, transparent 0 46%, white 46% 49%, transparent 49% 100%)",
                  backgroundSize: "36px 36px",
                }}
              />
              <Image
                src={aboutImage}
                alt="Heavy-duty commercial truck"
                className="relative h-full w-full object-contain p-5"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute left-5 top-5 rounded-md border border-background/10 bg-background/90 px-4 py-3 shadow-lg">
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Years Experience</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-lg bg-primary px-6 py-4 text-primary-foreground shadow-lg sm:block">
              <div className="text-2xl font-bold">1,200+</div>
              <div className="text-sm opacity-90">Served Clients</div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Strongbuilt</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground text-balance sm:text-4xl">
              Supporting businesses with reliable truck solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Strongbuilt helps businesses source commercial trucks, body builds, and fleet-ready units from trusted
              truck and equipment brands.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Whether a buyer needs a dropside, aluminum van, refrigerated van, dump truck, or custom service body,
              the goal is to make the buying path clear, fast, and demo-ready.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Truck, label: "Truck sourcing" },
                { icon: Route, label: "Fleet route fit" },
                { icon: ClipboardCheck, label: "Quote assistance" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-card p-4 shadow-sm">
                  <item.icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
