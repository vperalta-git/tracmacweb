import { getBrandMark } from "@/lib/brand-data"
import { cn } from "@/lib/utils"

type BrandMarkProps = {
  brand: string
  className?: string
  compact?: boolean
}

export function BrandMark({ brand, className, compact = false }: BrandMarkProps) {
  const brandMark = getBrandMark(brand)

  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md border border-border bg-white text-foreground shadow-sm",
        compact ? "h-10 min-w-[88px] px-2 py-1 text-[10px] leading-none" : "h-14 min-w-[120px] px-3 py-2 text-xs",
        className,
      )}
      title={brandMark.name}
    >
      {brandMark.logoSrc ? (
        <img
          src={brandMark.logoSrc}
          alt={`${brandMark.name} logo`}
            className={cn(
              "w-auto object-contain",
              compact ? "h-[70%] max-w-[84%]" : "h-[80%] max-w-[88%]",
            )}
        />
      ) : (
        <span className="font-bold tracking-wide">{brandMark.initials}</span>
      )}
    </div>
  )
}
