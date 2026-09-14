'use client'

import { useState, useEffect } from 'react'

// Custom SVG Icons - geen emoji's
const Icons = {
  Battery: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="7" width="18" height="10" rx="2" />
      <path d="M22 11v2" />
      <path d="M6 11v2" />
      <path d="M10 11v2" />
      <path d="M14 11v2" />
    </svg>
  ),
  Sun: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
  Chart: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Wallet: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M16 12h.01" />
      <path d="M2 10h20" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  Arrow: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  ChevronDown: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M19 9l-7 7-7-7" />
    </svg>
  ),
  Location: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Solar: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 3v18" />
      <path d="M15 3l-6 18" opacity="0.5" />
    </svg>
  ),
}

export default function Hero() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Salderingsregeling stopt 1 januari 2027
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Verspil geen euro meer aan{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  teruggeleverde stroom
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Per 1 januari 2027 wordt de salderingsregeling afgeschaft. Stroom die je teruglevert 
                aan het net wordt dan tegen een fractie van je eigen tarief vergoed. Een thuisbatterij 
                bespaart je <span className="font-semibold text-emerald-400">€800 tot €1.800 per jaar</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <a
                  href="#rekenmodule"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 hover:-translate-y-0.5"
                >
                  Bereken je besparing
                  <Icons.Arrow />
                </a>
                <a
                  href="#probleem"
                  className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 hover:border-emerald-500 text-white hover:text-emerald-400 font-semibold px-8 py-4 rounded-xl text-lg transition-all backdrop-blur-sm"
                >
                  Meer informatie
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400">
                    <Icons.Check />
                  </div>
                  <span>Gratis offerte</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400">
                    <Icons.Wallet />
                  </div>
                  <span>0% financiering</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400">
                    <Icons.Shield />
                  </div>
                  <span>10 jaar garantie</span>
                </div>
              </div>
            </div>

            {/* Right: Visual card */}
            <div className="relative">
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                {/* Countdown section */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-4">
                    <Icons.Clock />
                    <span>Tijd tot saldering stopt</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-slate-900/50 rounded-xl p-4 mb-2">
                        <div className="text-3xl font-bold text-white">{countdown.days}</div>
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Dagen</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-slate-900/50 rounded-xl p-4 mb-2">
                        <div className="text-3xl font-bold text-white">{countdown.hours}</div>
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Uur</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-slate-900/50 rounded-xl p-4 mb-2">
                        <div className="text-3xl font-bold text-white">{countdown.minutes}</div>
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Min</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-slate-900/50 rounded-xl p-4 mb-2">
                        <div className="text-3xl font-bold text-white">{countdown.seconds}</div>
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Sec</div>
                    </div>
                  </div>
                </div>

                {/* Savings card */}
                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6">
                  <p className="text-emerald-100 text-sm mb-2">Je jaarlijkse besparing</p>
                  <div className="text-4xl font-bold text-white mb-2">€1.200</div>
                  <p className="text-emerald-200 text-sm">Gebaseerd op 12 zonnepanelen</p>
                  
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-emerald-200">Warmtefonds lening</span>
                      <span className="font-semibold text-white">€6.000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-emerald-200">Btw-teruggave</span>
                      <span className="font-semibold text-white">€1.260</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-emerald-200">Netto maandlast</span>
                      <span className="font-bold text-white">€33/maand</span>
                    </div>
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
