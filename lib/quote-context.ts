export const QUOTE_CONTEXT_STORAGE_KEY = "strongbuilt.quote.context"
export const QUOTE_CONTEXT_EVENT = "strongbuilt:quote-context"

export type QuoteContext = {
  type: "brand" | "category" | "product" | "truck" | "general"
  value: string
}

export function createQuoteMessage(context: QuoteContext) {
  const label =
    context.type === "product"
      ? `Product inquiry: ${context.value}`
      : context.type === "truck"
        ? `Truck inquiry: ${context.value}`
        : context.type === "brand"
          ? `Brand inquiry: ${context.value}`
      : context.type === "category"
        ? `Category inquiry: ${context.value}`
        : "General truck inquiry"

  return `${label}\n\nQuantity needed:\nDelivery location:\nPreferred body type or specs:\nOther requirements:`
}
