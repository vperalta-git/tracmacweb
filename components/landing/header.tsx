"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { QuoteLink } from "@/components/quote-link"
import { SectionLink } from "@/components/section-link"
import { Button } from "@/components/ui/button"
import darkLogo from "@/assets/darklogo.png"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/#industries", label: "Industries" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState("")

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash)

    updateHash()
    window.addEventListener("hashchange", updateHash)

    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  function isActiveLink(href: string) {
    const [linkPath, linkHash] = href.split("#")

    if (pathname === "/products") {
      return href === "/products"
    }

    if (pathname !== (linkPath || "/")) {
      return false
    }

    if (!linkHash) {
      return pathname === href
    }

    return activeHash ? activeHash === `#${linkHash}` : linkHash === "home"
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between py-3 lg:min-h-24">
          <Link href="/" className="flex items-center">
            <Image
              src={darkLogo}
              alt="Strongbuilt logo"
              className="h-16 w-auto object-contain lg:h-20"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <SectionLink
                key={link.href}
                href={link.href}
                aria-current={isActiveLink(link.href) ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-primary/10 hover:text-primary",
                  isActiveLink(link.href) && "bg-primary/15 text-primary",
                )}
              >
                {link.label}
              </SectionLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/products">Browse Trucks</Link>
            </Button>
            <Button size="sm" asChild>
              <QuoteLink>Request a Quote</QuoteLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <SectionLink
                  key={link.href}
                  href={link.href}
                  aria-current={isActiveLink(link.href) ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary",
                    isActiveLink(link.href) && "bg-primary/15 text-primary",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </SectionLink>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/products">Browse Trucks</Link>
                </Button>
                <Button size="sm" asChild>
                  <QuoteLink onClick={() => setMobileMenuOpen(false)}>Request a Quote</QuoteLink>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
