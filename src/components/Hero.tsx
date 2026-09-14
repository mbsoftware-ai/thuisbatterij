'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = new Date('2027-01-01T00:00:00').getTime()
    const interval = setInterval(() => {
      const now = Date.now()
      const diff = target - now
      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f6f9fc_1px,transparent_1px),linear-gradient(to_bottom,#f6f9fc_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-medium px-4 py-2 rounded-sm mb-8 border border-emerald-100">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Salderingsregeling stopt 1 januari 2027
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#061b31] leading-[1.1] mb-6 tracking-tight">
              Verspil geen euro meer aan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                teruggeleverde stroom
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#64748d] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Per 1 januari 2027 wordt de salderingsregeling afgeschaft. Een thuisbatterij 
              bespaart je <span className="font-medium text-[#061b31]">€800 tot €1.800 per jaar</span> 
              doordat je zelf je opgewekte stroom gebruikt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#rekenmodule" className="btn-primary inline-flex items-center justify-center gap-2 text-base">
                Bereken je besparing
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#probleem" className="btn-secondary inline-flex items-center justify-center gap-2 text-base">
                Meer informatie
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-[#64748d]">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Gratis offerte</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>0% financiering</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>10 jaar garantie</span>
              </div>
            </div>
          </div>

          {/* Right: Echte installatiefoto's */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main photo - battery installation */}
              <div className="relative rounded-sm overflow-hidden shadow-stripe-xl border border-[#e5edf5]">
                <img 
                  src="/battery-installation.jpg" 
                  alt="Moderne thuisbatterij geïnstalleerd in een meterkast"
                  className="w-full h-auto"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-sm px-3 py-2 text-xs font-medium text-[#061b31]">
                  Professionele installatie
                </div>
              </div>
              
              {/* Floating secondary photo */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-sm overflow-hidden shadow-stripe-lg border-4 border-white">
                <img 
                  src="/solar-panels.jpg" 
                  alt="Zonnepanelen op een Nederlands dak"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
