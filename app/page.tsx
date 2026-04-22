import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { ProductCategories } from "@/components/landing/product-categories"
import { Industries } from "@/components/landing/industries"
import { WhyChooseUs } from "@/components/landing/why-choose-us"
import { About } from "@/components/landing/about"
import { ProductShowcase } from "@/components/landing/product-showcase"
import { CTABanner } from "@/components/landing/cta-banner"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <Industries />
        <WhyChooseUs />
        <About />
        <ProductShowcase />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
