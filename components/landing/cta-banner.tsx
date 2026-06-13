import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, PackageCheck, Phone, Truck } from "lucide-react"
import { QuoteLink } from "@/components/quote-link"
import ctaTruckImage from "@/assets/sinotruck/1.png"

export function CTABanner() {
  return (
    <section className="hero-surface relative overflow-hidden py-16 lg:py-20">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(135deg, transparent 0 46%, white 46% 49%, transparent 49% 100%)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative hidden min-h-72 overflow-hidden rounded-lg border border-background/10 bg-background/5 lg:block">
            <Image
              src={ctaTruckImage}
              alt="Commercial tractor head"
              className="absolute inset-0 h-full w-full object-contain p-8"
              sizes="40vw"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-background text-balance sm:text-4xl lg:text-5xl">
              Ready to Build Your Fleet?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-background/70 text-pretty">
              Talk to our team today for a commercial truck quote tailored to your route, payload, and business
              requirements.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <QuoteLink className="flex items-center gap-2">
                  Request a Quote Today
                  <ArrowRight className="h-5 w-5" />
                </QuoteLink>
              </Button>
              <Button size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background" asChild>
                <Link href="tel:+639178913681" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Us Now
                </Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Clock, label: "Quick Response", value: "Within 24 Hours" },
                { icon: Truck, label: "Truck Sourcing", value: "Brand Options Available" },
                { icon: PackageCheck, label: "Fleet Support", value: "Built Around Your Needs" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-background/10 bg-background/5 p-4">
                  <item.icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-background">{item.label}</p>
                  <p className="mt-1 text-xs text-background/60">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
