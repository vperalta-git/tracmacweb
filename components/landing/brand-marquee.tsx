"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { BrandMark } from "@/components/brand-mark"

type Brand = { name: string; slug: string }

export default function BrandMarquee({ brands }: { brands: Brand[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    // ensure children are not shrinking
    const distance = el.scrollWidth / 2
    el.style.setProperty("--marquee-distance", `-${distance}px`)
    // set a reasonable duration based on distance (pixels -> seconds)
    const duration = Math.max(12, Math.min(40, Math.round(distance / 20)))
    el.style.setProperty("--marquee-duration", `${duration}s`)
    // force the animation property (override potential cascade)
    el.style.animation = `brand-marquee-px var(--marquee-duration) linear infinite`

    // Recompute on resize
    const ro = new ResizeObserver(() => {
      const d = el.scrollWidth / 2
      el.style.setProperty("--marquee-distance", `-${d}px`)
      const dur = Math.max(12, Math.min(40, Math.round(d / 20)))
      el.style.setProperty("--marquee-duration", `${dur}s`)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [brands])

  return (
    <section className="overflow-hidden bg-[#161616] py-16 text-background lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Trusted Truck Brands We Supply
          </p>
          <h2 className="mt-3 text-3xl font-bold text-background text-balance sm:text-4xl">
            Reliable commercial vehicle and equipment partners
          </h2>
          <p className="mt-4 text-lg leading-8 text-background/70 text-pretty">
            Partnered with reliable commercial vehicle and equipment brands to support fleet, logistics, construction,
            and business operations.
          </p>
        </div>

        <div className="mx-auto mt-10 h-8 max-w-5xl overflow-hidden rounded-sm border border-primary/25 bg-[repeating-linear-gradient(135deg,#e75a00_0_18px,#101010_18px_36px)] opacity-90">
          <div className="flex h-full items-center justify-center bg-black/10 text-[10px] font-bold uppercase tracking-[0.28em] text-white/80">
            Fleet Sourcing / Commercial Trucks / Body Builds
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#161616] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#161616] to-transparent" />
          <div
            ref={trackRef}
            className="brand-marquee brand-enter gap-4 py-2 hover:[animation-play-state:paused]"
            style={{ display: "inline-flex", minWidth: "max-content", transform: "translate3d(0,0,0)" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <Link
                key={`${brand.slug}-${index}`}
                href={`/products?brand=${encodeURIComponent(brand.name)}`}
                className="flex-shrink-0"
                aria-label={`View ${brand.name} products`}
              >
                <BrandMark
                  brand={brand.name}
                  compact
                  className="h-16 min-w-[148px] border-background/10 bg-background px-4 grayscale transition-all duration-300 hover:scale-[1.03] hover:grayscale-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
