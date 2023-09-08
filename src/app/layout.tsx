import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WEB tutorial',
  description: 'Generated by 태현',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}