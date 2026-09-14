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
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-20 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Salderingsregeling stopt 1 januari 2027
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Verspil geen euro meer aan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                teruggeleverde stroom
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Per 1 januari 2027 wordt de salderingsregeling afgeschaft. Stroom die je teruglevert 
              aan het net, wordt dan tegen een fractie van je eigen tarief vergoed. Een thuisbatterij 
              bespaart je{' '}
              <span className="font-semibold text-emerald-700">€800 tot €1.800 per jaar</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#rekenmodule"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5"
              >
                Bereken je besparing
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#probleem"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-emerald-500 text-gray-700 hover:text-emerald-700 font-semibold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Meer informatie
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Gratis offerte</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>0% financiering</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>10 jaar garantie</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 shadow-2xl">
              {/* Countdown card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <p className="text-emerald-100 text-sm font-medium mb-3">Tijd tot salderingsregeling stopt:</p>
                <div className="grid grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{countdown.days}</div>
                    <div className="text-xs text-emerald-200">dagen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{countdown.hours}</div>
                    <div className="text-xs text-emerald-200">uur</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{countdown.minutes}</div>
                    <div className="text-xs text-emerald-200">min</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{countdown.seconds}</div>
                    <div className="text-xs text-emerald-200">sec</div>
                  </div>
                </div>
              </div>

              {/* Savings preview */}
              <div className="bg-white rounded-2xl p-6">
                <p className="text-gray-500 text-sm mb-2">Je jaarlijkse besparing:</p>
                <div className="text-4xl font-bold text-emerald-600 mb-2">€1.200</div>
                <p className="text-gray-500 text-sm">Gebaseerd op 12 zonnepanelen en gemiddeld verbruik</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Warmtefonds lening:</span>
                    <span className="font-semibold text-gray-900">€6.000</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-500">Btw-teruggave:</span>
                    <span className="font-semibold text-gray-900">€1.260</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-500">Netto maandlast:</span>
                    <span className="font-semibold text-emerald-600">€33/maand</span>
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
