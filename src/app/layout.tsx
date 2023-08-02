import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swissborg Challenge Frontend',
  description: 'Swissborg Challenge Frontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" href="/images/favicon.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
