import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, HardHat, Factory, ClipboardCheck } from "lucide-react"
import { QuoteLink } from "@/components/quote-link"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-foreground">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-md border border-background/15 bg-background/10 px-3 py-2 text-sm font-medium text-background/85 lg:mx-0">
              <ClipboardCheck className="h-4 w-4 text-primary" />
              PPE supply for industrial teams
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight text-balance">
              Industrial Safety Equipment Built for Serious Worksites
            </h1>
            <p className="mt-6 text-lg text-background/70 max-w-xl mx-auto lg:mx-0 text-pretty">
              TRACMAC Marketing delivers premium personal protective equipment to construction, mining, and industrial sectors. Protect your workforce with certified safety gear from a supplier who understands your industry.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/products">View Products</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background" asChild>
                <QuoteLink>Get a Quote</QuoteLink>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 text-left">
              {["Fast quotes", "Brand options", "Compliance-ready"].map((item) => (
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
                  <HardHat className="h-12 w-12 text-primary mb-3" />
                  <span className="text-background font-medium">Head Protection</span>
                </div>
                <div className="rounded-lg bg-background/10 p-6 text-center">
                  <ShieldCheck className="h-12 w-12 text-primary mb-3" />
                  <span className="text-background font-medium">Body Protection</span>
                </div>
                <div className="col-span-2 rounded-lg bg-primary p-6 text-center text-primary-foreground">
                  <Factory className="h-12 w-12 text-primary-foreground mb-3" />
                  <span className="font-semibold">Complete Industrial Safety Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 33.3C840 36.7 960 43.3 1080 45C1200 46.7 1320 43.3 1380 41.7L1440 40V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="oklch(0.985 0 0)"/>
        </svg>
      </div>
    </section>
  )
}
