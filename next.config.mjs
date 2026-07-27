import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "wintesscommercial.com" },
      { protocol: "https", hostname: "www.wintesscommercial.com" },
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "chemluxinc.com" },
      { protocol: "https", hostname: "www.chemluxinc.com" },
    ],
  },
}

export default nextConfig
