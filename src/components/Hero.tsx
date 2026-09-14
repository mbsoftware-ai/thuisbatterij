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
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f6f9fc_1px,transparent_1px),linear-gradient(to_bottom,#f6f9fc_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content - asymmetric */}
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
              <a
                href="#rekenmodule"
                className="btn-primary inline-flex items-center justify-center gap-2 text-base"
              >
                Bereken je besparing
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#probleem"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-base"
              >
                Meer informatie
              </a>
            </div>

            {/* Trust signals - minimal, no cards */}
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

          {/* Right: Stripe-style visual - not a card, just a clean panel */}
          <div className="lg:col-span-5">
            <div className="bg-[#f6f9fc] rounded-sm border border-[#e5edf5] p-8 shadow-stripe-lg">
              {/* Countdown */}
              <div className="mb-8">
                <p className="text-xs font-medium text-[#273951] uppercase tracking-wider mb-4">Tijd tot saldering stopt</p>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-white rounded-sm border border-[#e5edf5] p-3 mb-1">
                      <div className="text-2xl font-light text-[#061b31]">{countdown.days}</div>
                    </div>
                    <div className="text-xs text-[#64748d]">Dagen</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-sm border border-[#e5edf5] p-3 mb-1">
                      <div className="text-2xl font-light text-[#061b31]">{countdown.hours}</div>
                    </div>
                    <div className="text-xs text-[#64748d]">Uur</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-sm border border-[#e5edf5] p-3 mb-1">
                      <div className="text-2xl font-light text-[#061b31]">{countdown.minutes}</div>
                    </div>
                    <div className="text-xs text-[#64748d]">Min</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-sm border border-[#e5edf5] p-3 mb-1">
                      <div className="text-2xl font-light text-[#061b31]">{countdown.seconds}</div>
                    </div>
                    <div className="text-xs text-[#64748d]">Sec</div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#e5edf5] my-6"></div>

              {/* Savings */}
              <div>
                <p className="text-xs font-medium text-[#273951] uppercase tracking-wider mb-2">Je jaarlijkse besparing</p>
                <div className="text-4xl font-light text-[#061b31] mb-1">€1.200</div>
                <p className="text-sm text-[#64748d]">Gebaseerd op 12 zonnepanelen</p>
                
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#64748d]">Warmtefonds lening</span>
                    <span className="font-medium text-[#061b31]">€6.000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#64748d]">Btw-teruggave</span>
                    <span className="font-medium text-[#061b31]">€1.260</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#64748d]">Netto maandlast</span>
                    <span className="font-medium text-emerald-600">€33/maand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
