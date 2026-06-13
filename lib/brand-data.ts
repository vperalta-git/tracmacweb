import forlandLogo from "@/assets/logos/forlandlogo.png"
import cimcLogo from "@/assets/logos/cimclogo.png"
import asiastarLogo from "@/assets/logos/asiastarlogo.png"
import isuzuLogo from "@/assets/logos/isuzul.png"
import jinggongLogo from "@/assets/logos/jinggonglogo.png"
import lonkingLogo from "@/assets/logos/lonking.png"
import shacmanLogo from "@/assets/logos/shacmanlogo.png"
import weichaiLogo from "@/assets/logos/weichailogo.png"
import xcmgLogo from "@/assets/logos/xcmg.png"

export type Brand = {
  name: string
  slug: string
  initials: string
  logoSrc?: string
}

export const productBrands: Brand[] = [
  { name: "Strongbuilt", slug: "strongbuilt", initials: "SB", logoSrc: "/strongbuilt-logo.png" },
  { name: "ZhengZhong Vibro", slug: "zhengzhong-vibro", initials: "ZZ" },
  { name: "XINIU Wheel", slug: "xiniu-wheel", initials: "XN" },
  { name: "HENGXING Mixing", slug: "hengxing-mixing", initials: "HX" },
  { name: "HUNAN PLUM", slug: "hunan-plum", initials: "HP" },
  { name: "XCMG", slug: "xcmg", initials: "XCM", logoSrc: xcmgLogo.src },
  { name: "Wong Gong Scale", slug: "wong-gong-scale", initials: "WG" },
  { name: "WEICHAI GENSET", slug: "weichai-genset", initials: "WG" },
  { name: "WEICHAI", slug: "weichai", initials: "WC", logoSrc: weichaiLogo.src },
  { name: "TUFF DRILLING BUCKET", slug: "tuff-drilling-bucket", initials: "TDB" },
  { name: "TONGYA Powertrac", slug: "tongya-powertrac", initials: "TY" },
  { name: "TANT-REACH", slug: "tant-reach", initials: "TR" },
  { name: "SWT Light", slug: "swt-light", initials: "SWT" },
  { name: "SUNWARD", slug: "sunward", initials: "SW" },
  { name: "SUNJIN Vibro", slug: "sunjin-vibro", initials: "SJ" },
  { name: "SOCMA", slug: "socma", initials: "SOC" },
  { name: "SINOMACH", slug: "sinomach", initials: "SIN" },
  { name: "SHIYUN Girder Trailer", slug: "shiyun-girder-trailer", initials: "SY" },
  { name: "SHANTUI", slug: "shantui", initials: "ST" },
  { name: "SHACMAN", slug: "shacman", initials: "SM", logoSrc: shacmanLogo.src },
  { name: "Powerquip", slug: "powerquip", initials: "PQ" },
  { name: "Lonking", slug: "lonking", initials: "LK", logoSrc: lonkingLogo.src },
  { name: "LAIGONG", slug: "laigong", initials: "LG" },
  { name: "JINGGONG", slug: "jinggong", initials: "JG", logoSrc: jinggongLogo.src },
  { name: "ISUZU", slug: "isuzu", initials: "IZ", logoSrc: isuzuLogo.src },
  { name: "Forland", slug: "forland", initials: "FL", logoSrc: forlandLogo.src },
  { name: "EDT", slug: "edt", initials: "EDT" },
  { name: "CIMC RJST Trailer", slug: "cimc-rjst-trailer", initials: "CR", logoSrc: cimcLogo.src },
  { name: "Asiastar", slug: "asiastar", initials: "AS", logoSrc: asiastarLogo.src },
  { name: "Sinotruck", slug: "sinotruck", initials: "SN" },
]

export function getBrandByName(name: string) {
  const normalizedName = name.trim().toLowerCase()

  return productBrands.find((brand) => brand.name.toLowerCase() === normalizedName)
}

export function getBrandMark(name: string) {
  return getBrandByName(name) ?? {
    name: name || "Unbranded",
    slug: "custom",
    initials: (name || "UB")
      .split(/\s+/)
      .map((word) => word[0])
      .join("")
      .slice(0, 3)
      .toUpperCase(),
  }
}
