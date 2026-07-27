export const PRODUCT_IMAGE_PLACEHOLDER = "/placeholder.jpg"

export function getProductImageUrl(value: string | null | undefined) {
  const source = value?.trim()

  if (!source) {
    return PRODUCT_IMAGE_PLACEHOLDER
  }

  if (source.startsWith("/") || source.startsWith("data:image/") || source.startsWith("blob:")) {
    return source
  }

  try {
    const url = new URL(source)
    return url.protocol === "http:" || url.protocol === "https:" ? source : PRODUCT_IMAGE_PLACEHOLDER
  } catch {
    return PRODUCT_IMAGE_PLACEHOLDER
  }
}
