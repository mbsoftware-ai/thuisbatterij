import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-source-sans',
})

export const metadata: Metadata = {
  title: 'ThuisBatterij — Bespaar €1.200 per jaar op je energierekening',
  description: 'De salderingsregeling stopt per 1 januari 2027. Ontdek hoeveel je verliest en hoe een thuisbatterij je bespaart. Gratis offerte, 0% financiering en btw-teruggave.',
  keywords: ['thuisbatterij', 'saldering', 'salderingsregeling', 'zonnepanelen', 'energiebesparing', 'warmtefonds'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={sourceSans.variable}>
      <body className="font-sans antialiased bg-white text-neutral-900 selection:bg-emerald-500 selection:text-white">{children}</body>
    </html>
  )
}
