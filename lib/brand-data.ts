export const PRODUCT_BRANDS = [
  "3M",
  "Adela",
  "Auweld",
  "Bahco",
  "Blue Eagle",
  "Bosny",
  "Britannia",
  "Camel",
  "Crocodile",
  "Dormer",
  "DSK",
  "DuPont Tyvek",
  "Duracell",
  "Fenzy",
  "Flexovit",
  "Hella",
  "Hi-Tech",
  "Honeywell",
  "Honeywell Fendall",
  "Honeywell Morning Pride",
  "Jackson",
  "KING'S by Honeywell",
  "North",
  "North Tower",
  "Norton",
  "Phillyx",
  "Salisbury",
  "Supertuff",
  "Toka",
  "TRACMAC",
  "Walking Machine",
  "WD-40",
  "Wisdom",
  "ZOLL",
] as const

export type ProductBrand = (typeof PRODUCT_BRANDS)[number]

export type Brand = {
  name: string
  slug: string
  initials: string
  logoSrc?: string
}

export function normalizeBrand(value: string) {
  return value.trim().toLocaleLowerCase()
}

export function getBrandSlug(value: string) {
  return value
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

const BRAND_ALIASES: Readonly<Record<string, ProductBrand>> = {
  wd40: "WD-40",
  kings: "KING'S by Honeywell",
  "kings by honeywell": "KING'S by Honeywell",
  dupont: "DuPont Tyvek",
  "honeywell morningpride": "Honeywell Morning Pride",
  northtower: "North Tower",
  "3m": "3M",
  tracmac: "TRACMAC",
}

const canonicalBrandMap = new Map(PRODUCT_BRANDS.map((brand) => [normalizeBrand(brand), brand]))

export function getCanonicalBrandName(value: string) {
  const cleaned = value.trim()
  const normalized = normalizeBrand(cleaned)

  return canonicalBrandMap.get(normalized) ?? BRAND_ALIASES[normalized] ?? cleaned
}

export function getBrandByName(name: string) {
  const canonicalName = getCanonicalBrandName(name)

  return PRODUCT_BRANDS.includes(canonicalName as ProductBrand)
    ? productBrands.find((brand) => brand.name === canonicalName)
    : undefined
}

export function sortBrandNames(brands: readonly string[]) {
  return [...brands].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
}

export function buildBrandOptions(databaseBrands: readonly string[]) {
  const uniqueBrands = new Map<string, string>()

  for (const rawBrand of [...PRODUCT_BRANDS, ...databaseBrands]) {
    const brand = getCanonicalBrandName(rawBrand)
    if (brand) {
      uniqueBrands.set(normalizeBrand(brand), brand)
    }
  }

  return sortBrandNames([...uniqueBrands.values()])
}

export const productBrands: Brand[] = sortBrandNames(PRODUCT_BRANDS).map((name) => ({
  name,
  slug: getBrandSlug(name),
  initials: name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase(),
}))

export function getBrandMark(name: string) {
  const canonicalName = getCanonicalBrandName(name)

  return getBrandByName(canonicalName) ?? {
    name: canonicalName || "Unbranded",
    slug: getBrandSlug(canonicalName) || "custom",
    initials: (canonicalName || "UB")
      .split(/\s+/)
      .map((word) => word[0])
      .join("")
      .slice(0, 3)
      .toUpperCase(),
  }
}
