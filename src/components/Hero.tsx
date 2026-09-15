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
    <section className="relative bg-white overflow-hidden">
      {/* Hero image - full width */}
      <div className="relative h-[75vh] min-h-[550px]">
        <img 
          src="/solar-panels.jpg" 
          alt="Moderne Nederlandse woning met zonnepanelen op het dak"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-sm mb-6">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Salderingsregeling stopt 1 januari 2027
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-6 tracking-tight">
                Verspil geen euro meer aan{' '}
                <span className="text-emerald-400">
                  teruggeleverde stroom
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                Per 1 januari 2027 wordt de salderingsregeling afgeschaft. Een thuisbatterij 
                bespaart je <span className="font-semibold text-emerald-400">€800 tot €1.800 per jaar</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#rekenmodule" className="btn-primary inline-flex items-center justify-center gap-2 text-base">
                  Bereken je besparing
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#probleem" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-4 rounded-sm text-lg transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm">
                  Meer informatie
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-[#061b31] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Gratis offerte</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>0% financiering</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>10 jaar garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>Nog <strong className="text-white">{countdown.days} dagen</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
