import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rainforest Adventure',
  description: 'Experience the thrill of the rainforest - Ziplines, aerial trams, and unforgettable adventures await you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
