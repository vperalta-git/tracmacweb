import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import whiteLogo from "@/assets/whitelogo.png"

const footerLinks = {
  products: [
    { label: "Light-Duty Trucks", href: "/products" },
    { label: "Medium-Duty Trucks", href: "/products" },
    { label: "Aluminum Van", href: "/products" },
    { label: "Dump Truck", href: "/products" },
    { label: "Full Inventory", href: "/products" },
  ],
  industries: [
    { label: "Logistics", href: "/#industries" },
    { label: "Construction", href: "/#industries" },
    { label: "Cold Chain", href: "/#industries" },
    { label: "Fleet Operations", href: "/#industries" },
  ],
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Contact", href: "/#contact" },
    { label: "Request Quote", href: "/#contact" },
    { label: "Truck Inventory", href: "/products" },
  ],
}

const contactLinks = [
  { icon: Phone, href: "tel:+639178913681", label: "Call Strongbuilt" },
  { icon: Mail, href: "mailto:sales@strongbuilt.com.ph", label: "Email Strongbuilt" },
  {
    icon: MapPin,
    href: "https://www.google.com/maps/search/?api=1&query=Mercedes+Plaza+I+Mercedes+Ave+Pasig+City",
    label: "Find Strongbuilt",
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src={whiteLogo}
                alt="Strongbuilt logo"
                className="h-20 w-auto object-contain lg:h-24"
              />
            </div>
            <div className="flex gap-4">
              {contactLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Inventory */}
          <div>
            <h3 className="font-semibold text-background mb-4">Inventory</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-background mb-4">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Strongbuilt Trucks. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link href="/admin" className="hover:text-background/80 transition-colors">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
