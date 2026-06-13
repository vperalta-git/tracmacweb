"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { type ComponentProps, type MouseEvent, type ReactNode } from "react"

type SectionLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: `/#${string}` | string
  children: ReactNode
}

export function SectionLink({ href, children, onClick, ...props }: SectionLinkProps) {
  const pathname = usePathname()
  const router = useRouter()

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)

    if (event.defaultPrevented || !href.startsWith("/#")) {
      return
    }

    if (pathname === "/") {
      event.preventDefault()
      const hash = href.slice(2)
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.replaceState(null, "", `#${hash}`)
      window.dispatchEvent(new HashChangeEvent("hashchange"))
      return
    }

    event.preventDefault()
    router.push(href)
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
