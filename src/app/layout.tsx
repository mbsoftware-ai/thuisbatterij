import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ThuisBatterij - Bespaar op je energierekening na 2027',
  description: 'Ontdek hoeveel je verliest door het stoppen van de salderingsregeling en hoe een thuisbatterij je kan besparen.',
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
