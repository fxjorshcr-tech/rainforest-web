import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rainforest',
  description: 'Welcome to Rainforest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
