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
        "inline-flex shrink-0 items-center justify-center rounded-md border border-border bg-background/95 text-foreground shadow-sm",
        compact ? "h-9 min-w-9 px-2 text-[10px]" : "h-11 min-w-11 px-3 text-xs",
        className,
      )}
      title={brandMark.name}
    >
      {brandMark.logoSrc ? (
        <img src={brandMark.logoSrc} alt={`${brandMark.name} logo`} className="max-h-full max-w-20 object-contain" />
      ) : (
        <span className="font-bold tracking-wide">{brandMark.initials}</span>
      )}
    </div>
  )
}
