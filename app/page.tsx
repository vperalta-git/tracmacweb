import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { ProductShowcase } from "@/components/landing/product-showcase"
import { Industries } from "@/components/landing/industries"
import { WhyChooseUs } from "@/components/landing/why-choose-us"
import { About } from "@/components/landing/about"
import BrandMarquee from "@/components/landing/brand-marquee"
import { CTABanner } from "@/components/landing/cta-banner"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"
import { productBrands } from "@/lib/brand-data"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <Industries />
        <WhyChooseUs />
        <About />
        <BrandMarquee brands={productBrands.filter((brand) => brand.name !== "Strongbuilt").slice(-10)} />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
