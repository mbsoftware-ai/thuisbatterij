'use client'

import { useState } from 'react'

const ENERGIEL_EVERANCIERS = [
  'Eneco', 'Essent', 'E.ON', 'Nuon', 'Greenchoice', 'Vattenfall',
  'Enel', 'Budget Energie', 'HollandsZand', 'Andere'
]

interface FormData {
  postcode: string
  huisnummer: string
  huisletter: string
  heeft_zonnepanelen: boolean
  aantal_panelen: number
  jaarproductie_kwh: number
  jaarinstallatie: number
  energieleverancier: string
  huidig_verbruik_kwh: number
  naam: string
  email: string
  telefoon: string
}

interface Resultaat {
  annual_loss: number
  daily_loss: number
  current_export_kWh: number
  recommended_capacity: number
  usable_capacity: number
  estimated_savings: number
  message?: string
}

export default function Calculator() {
  const [stap, setStap] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    postcode: '',
    huisnummer: '',
    huisletter: '',
    heeft_zonnepanelen: true,
    aantal_panelen: 12,
    jaarproductie_kwh: 3600,
    jaarinstallatie: 2022,
    energieleverancier: 'Eneco',
    huidig_verbruik_kwh: 3500,
    naam: '',
    email: '',
    telefoon: '',
  })
  const [resultaat, setResultaat] = useState<Resultaat | null>(null)
  const [loading, setLoading] = useState(false)

  const updateField = (field: keyof FormData, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const berekenResultaat = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      setResultaat(data)
    } catch {
      // Fallback berekening
      const directUse = Math.min(formData.jaarproductie_kwh * 0.4, formData.huidig_verbruik_kwh * 0.3)
      const currentExport = formData.jaarproductie_kwh - directUse
      const lossPerKwh = 0.35 - 0.06 + 0.02
      const annualLoss = currentExport * lossPerKwh
      const usableNeeded = (currentExport / 365) * 0.8
      const grossCapacity = usableNeeded / 0.8

      let recommended = 5
      if (grossCapacity > 10) recommended = 15
      else if (grossCapacity > 5) recommended = 10

      setResultaat({
        annual_loss: Math.round(annualLoss),
        daily_loss: Math.round((annualLoss / 365) * 100) / 100,
        current_export_kWh: Math.round(currentExport),
        recommended_capacity: recommended,
        usable_capacity: Math.round(recommended * 0.8 * 10) / 10,
        estimated_savings: Math.round(currentExport * 0.7 * lossPerKwh),
      })
    }
    setLoading(false)
  }

  const volgendeStap = () => {
    if (stap < 3) {
      setStap(stap + 1)
      if (stap === 2) {
        berekenResultaat()
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, naam: (e.target as any).naam.value, email: (e.target as any).email.value, telefoon: (e.target as any).telefoon.value }),
      })
      const { lead_id } = await response.json()
      if (lead_id) {
        window.location.href = `/bedankt?lead=${lead_id}`
      } else {
        window.location.href = '/bedankt'
      }
    } catch {
      window.location.href = '/bedankt'
    }
    setLoading(false)
  }

  const stappen = [
    { id: 1, titel: 'Adres', subtitel: 'Postcode & huisnummer' },
    { id: 2, titel: 'Zonnepanelen', subtitel: 'Gegevens van je panelen' },
    { id: 3, titel: 'Resultaat', subtitel: 'Je persoonlijke berekening' },
  ]

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Progress */}
          <div className="bg-gray-50 border-b border-gray-100 px-8 pt-8 pb-6">
            <div className="flex items-center justify-between">
              {stappen.map((s, i) => (
                <div key={s.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      stap > s.id ? 'bg-emerald-600 text-white' :
                      stap === s.id ? 'bg-emerald-600 text-white ring-4 ring-emerald-100' :
                      'bg-gray-200 text-gray-500'
                    }`}>
                      {stap > s.id ? '✓' : s.id}
                    </div>
                    <span className="text-xs font-medium text-gray-700 mt-2 hidden sm:block">{s.titel}</span>
                  </div>
                  {i < stappen.length - 1 && (
                    <div className={`w-16 sm:w-24 h-0.5 mx-2 mt-[-20px] ${
                      stap > s.id ? 'bg-emerald-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form content */}
          <form onSubmit={handleSubmit} className="p-8 md:p-10">
            {/* Stap 1 */}
            {stap === 1 && (
              <div className="space-y-6 animate-[fadeIn_0.3s_ease-in-out]">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wat is je adres?</h3>
                  <p className="text-gray-500 text-sm">We gebruiken je adres om de zonnestraling en productie te schatten.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Postcode *</label>
                    <input
                      type="text"
                      placeholder="1234 AB"
                      value={formData.postcode}
                      onChange={(e) => updateField('postcode', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Huisnummer *</label>
                    <input
                      type="text"
                      placeholder="42"
                      value={formData.huisnummer}
                      onChange={(e) => updateField('huisnummer', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Toevoeging</label>
                  <input
                    type="text"
                    placeholder="A, B, etc. (optioneel)"
                    value={formData.huisletter}
                    onChange={(e) => updateField('huisletter', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  />
                </div>
                <button
                  type="button"
                  onClick={volgendeStap}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Volgende
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            )}

            {/* Stap 2 */}
            {stap === 2 && (
              <div className="space-y-6 animate-[fadeIn_0.3s_ease-in-out]">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Zonnepanelen</h3>
                  <p className="text-gray-500 text-sm">Geef aan hoeveel panelen je hebt en je energieverbruik.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Heb je zonnepanelen?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => updateField('heeft_zonnepanelen', true)}
                      className={`py-3 rounded-xl font-medium border-2 transition-colors ${
                        formData.heeft_zonnepanelen
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      Ja
                    </button>
                    <button
                      type="button"
                      onClick={() => updateField('heeft_zonnepanelen', false)}
                      className={`py-3 rounded-xl font-medium border-2 transition-colors ${
                        !formData.heeft_zonnepanelen
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      Nee
                    </button>
                  </div>
                </div>

                {formData.heeft_zonnepanelen && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Aantal zonnepanelen: <span className="font-bold text-emerald-700">{formData.aantal_panelen}</span>
                      </label>
                      <input
                        type="range"
                        min="2"
                        max="30"
                        value={formData.aantal_panelen}
                        onChange={(e) => {
                          const panels = parseInt(e.target.value)
                          updateField('aantal_panelen', panels)
                          updateField('jaarproductie_kwh', Math.round(panels * 300))
                        }}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>2</span>
                        <span>30</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Jaarproductie (kWh)
                      </label>
                      <input
                        type="number"
                        value={formData.jaarproductie_kwh}
                        onChange={(e) => updateField('jaarproductie_kwh', parseInt(e.target.value) || 0)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      />
                      <p className="text-xs text-gray-400 mt-1">Gemiddeld: 300 kWh per paneel per jaar</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Energieleverancier
                      </label>
                      <select
                        value={formData.energieleverancier}
                        onChange={(e) => updateField('energieleverancier', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white"
                      >
                        {ENERGIEL_EVERANCIERS.map(l => (
                          <option key={l} value={l}>{l}</option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStap(1)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl transition-colors"
                  >
                    Terug
                  </button>
                  <button
                    type="button"
                    onClick={volgendeStap}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    Berekenen
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Stap 3: Resultaat */}
            {stap === 3 && (
              <div className="space-y-6 animate-[fadeIn_0.3s_ease-in-out]">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Je persoonlijke berekening</h3>
                </div>

                {loading ? (
                  <div className="text-center py-10">
                    <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Berekening wordt gemaakt...</p>
                  </div>
                ) : resultaat ? (
                  <>
                    {resultaat.message ? (
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                        <p className="text-lg text-gray-700">{resultaat.message}</p>
                      </div>
                    ) : (
                      <>
                        {/* Verlies */}
                        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
                          <p className="text-sm text-red-600 font-medium mb-1">Je jaarlijkse verlies na 2027</p>
                          <p className="text-4xl font-bold text-red-700">
                            &euro;{resultaat.annual_loss.toLocaleString('nl-NL')}
                          </p>
                          <p className="text-sm text-red-500 mt-1">
                            Dat is &euro;{resultaat.daily_loss} per dag
                          </p>
                        </div>

                        {/* Besparing */}
                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                          <p className="text-sm text-emerald-600 font-medium mb-1">
                            Met een {resultaat.recommended_capacity} kWh thuisbatterij
                          </p>
                          <p className="text-3xl font-bold text-emerald-700">
                            &euro;{resultaat.estimated_savings.toLocaleString('nl-NL')} besparing/jaar
                          </p>
                          <p className="text-sm text-emerald-600 mt-1">
                            Bruikbare capaciteit: {resultaat.usable_capacity} kWh
                          </p>
                        </div>

                        {/* Contactgegevens */}
                        <div className="space-y-4 pt-4">
                          <p className="text-sm font-medium text-gray-700">
                            Laat je gegevens achter voor een offerte op maat:
                          </p>
                          <div>
                            <input
                              type="text"
                              name="naam"
                              placeholder="Voor- en achternaam"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                            />
                          </div>
                          <div>
                            <input
                              type="email"
                              name="email"
                              placeholder="E-mailadres"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                            />
                          </div>
                          <div>
                            <input
                              type="tel"
                              name="telefoon"
                              placeholder="Telefoonnummer"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-xl transition-colors text-lg flex items-center justify-center gap-2"
                        >
                          Aanvraag starten
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </>
                    )}
                  </>
                ) : null}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}