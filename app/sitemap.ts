import type { MetadataRoute } from 'next'

const siteUrl = 'https://tracmac.com.ph'

const publicRoutes = [
  '/',
  '/about',
  '/products',
  '/industries',
  '/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
