import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TRACMAC Marketing | Industrial PPE & Safety Equipment Supplier',
  description: 'TRACMAC Marketing is a trusted supplier of personal protective equipment (PPE) for construction, mining, industrial, and manufacturing sectors. Quality safety gear for workplace protection.',
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
