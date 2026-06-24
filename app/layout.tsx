import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Strongbuilt | Trucks, Buses & Heavy Equipment',
  description: 'Strongbuilt supplies commercial trucks, buses, trailers, and heavy equipment for fleet, logistics, construction, and industrial operations.',
  generator: 'v0.app',
  icons: {
    icon: '/tmaclogo.png',
    apple: '/tmaclogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
