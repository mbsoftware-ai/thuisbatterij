import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
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
    <html lang="nl" className={plusJakartaSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
