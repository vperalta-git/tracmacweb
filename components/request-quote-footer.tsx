"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { QuoteLink } from "@/components/quote-link"
import type { QuoteContext } from "@/lib/quote-context"

type Props = {
  context?: QuoteContext
  label?: string
}

export default function RequestQuoteFooter({ context = { type: "general", value: "Truck quote" }, label = "Request Truck Quote" }: Props) {
  return (
    <div className="w-full border-t border-border bg-background/0 p-4">
      <Button className="w-full" asChild>
        <QuoteLink context={context}>{label}</QuoteLink>
      </Button>
    </div>
  )
}
