'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">ThuisBatterij.nl</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#probleem" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
              Saldering
            </a>
            <a href="#voordelen" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
              Voordelen
            </a>
            <a href="#rekenmodule" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
              Berekenen
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
              FAQ
            </a>
            <a
              href="#rekenmodule"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Gratis offerte
            </a>
          </nav>
          <a
            href="#rekenmodule"
            className="md:hidden bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Offerte
          </a>
        </div>
      </div>
    </header>
  )
}
