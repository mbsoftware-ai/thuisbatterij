import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ThuisBatterij - Bespaar €1.200 per jaar op je energierekening',
  description: 'De salderingsregeling stopt per 1 januari 2027. Bereken hoeveel je verliest en hoe een thuisbatterij je bespaart. Gratis offerte, Warmtefonds-financiering en btw-teruggave.',
  keywords: ['thuisbatterij', 'saldering', 'salderingsregeling', 'zonnepanelen', 'energiebesparing', 'warmtefonds'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}