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
      <div className="absolute inset-0 bg-[linear_gradient(to_right,#f6f9fc_1px,transparent_1px),linear-gradient(to_bottom,#f6f9fc_1px,transparent_1px)] bg-[size:48px_48px]"></div>

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
              Per 1 januari 2027 wordt de salderingsregeling afgeschaft. Stroom die je teruglevert 
              wordt dan tegen een fractie betaald. Een thuisbatterij bespaart je{' '}
              <span className="font-medium text-[#061b31]">€800 tot €1.800 per jaar</span>.
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

            {/* Countdown */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-[#64748d]">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Nog <strong className="text-[#061b31]">{countdown.days} dagen</strong> om te besparen</span>
              </div>
            </div>
          </div>

          {/* Right: Solar panels on Dutch house */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden shadow-stripe-xl border border-[#e5edf5]">
              <img 
                src="/solar-panels-street.jpg" 
                alt="Moderne Nederlandse rijwoning met zwarte zonnepanelen op het dak"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">Zonnepanelen op uw dak</p>
                <p className="text-white/70 text-xs">Bespaar tot €1.800 per jaar met een thuisbatterij</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
