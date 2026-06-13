import Link from "next/link"
import { ClipboardCheck, Factory, PackageCheck, Truck } from "lucide-react"
import { QuoteLink } from "@/components/quote-link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="hero-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 0 46%, white 46% 49%, transparent 49% 100%)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-md border border-background/15 bg-background/10 px-3 py-2 text-sm font-medium text-background/85 lg:mx-0">
              <ClipboardCheck className="h-4 w-4 text-primary" />
              Commercial truck sales and fleet sourcing
            </div>
            <h1 className="text-4xl font-bold leading-tight text-background text-balance sm:text-5xl lg:text-6xl">
              Work-Ready Trucks for Delivery, Construction, and Fleet Growth
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-background/70 text-pretty lg:mx-0">
              Strongbuilt helps businesses source commercial trucks, body builds, and fleet-ready units from trusted
              truck brands.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/products">View Trucks</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
                asChild
              >
                <QuoteLink>Request a Quote</QuoteLink>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 text-left">
              {["Ready units", "Brand options", "Fleet builds"].map((item) => (
                <div key={item} className="rounded-lg border border-background/10 bg-background/5 p-3">
                  <p className="text-sm font-semibold text-background">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-xl border border-background/10 bg-background/5 p-8 shadow-2xl shadow-black/25 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-background/10 p-6 text-center">
                  <Truck className="mb-3 h-12 w-12 text-primary" />
                  <span className="font-medium text-background">Light and Medium Duty</span>
                </div>
                <div className="rounded-lg bg-background/10 p-6 text-center">
                  <PackageCheck className="mb-3 h-12 w-12 text-primary" />
                  <span className="font-medium text-background">Body Configurations</span>
                </div>
                <div className="col-span-2 rounded-lg bg-primary p-6 text-center text-primary-foreground">
                  <Factory className="mb-3 h-12 w-12 text-primary-foreground" />
                  <span className="font-semibold">Built Around Your Business Route</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
