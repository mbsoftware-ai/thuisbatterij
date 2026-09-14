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
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Salderingsregeling stopt 1 januari 2027
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Stop met geld
              <br />
              <span className="text-emerald-600">verspreiden</span>
              <br />
              na 2027
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Per 1 januari 2027 valt de salderingsregeling weg. Stroom die je teruglevert aan het net
              krijg je straks nauwelijks meer voor betaald. Een thuisbatterij bespaart je dan
              <span className="font-semibold text-emerald-700"> €800 tot €1.500 per jaar</span>.
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Gratis offerte
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Warmtefonds financiering
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                10 jaar garantie
              </div>
            </div>
          </div>

          {/* Right: Countdown + savings card */}
          <div className="flex flex-col items-center gap-6">
            {/* Countdown */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-emerald-100 p-8">
              <p className="text-center text-sm font-medium text-gray-500 mb-4">Tot het einde van de salderingsregeling</p>
              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-emerald-50 rounded-xl p-3">
                  <div className="text-3xl font-bold text-emerald-700">{countdown.days}</div>
                  <div className="text-xs text-gray-500 mt-1">dagen</div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-3">
                  <div className="text-3xl font-bold text-emerald-700">{countdown.hours}</div>
                  <div className="text-xs text-gray-500 mt-1">uur</div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-3">
                  <div className="text-3xl font-bold text-emerald-700">{countdown.minutes}</div>
                  <div className="text-xs text-gray-500 mt-1">minuten</div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-3">
                  <div className="text-3xl font-bold text-emerald-700">{countdown.seconds}</div>
                  <div className="text-xs text-gray-500 mt-1">seconden</div>
                </div>
              </div>
            </div>

            {/* Savings highlight */}
            <div className="w-full max-w-md bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-8 text-white text-center">
              <p className="text-emerald-100 text-sm font-medium mb-2">Gemiddelde jaarlijkse besparing</p>
              <div className="text-5xl font-bold mb-2">&euro;1.200</div>
              <p className="text-emerald-200 text-sm">voor een gemiddeld huishouden met 10 zonnepanelen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}