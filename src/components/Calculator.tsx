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
  recommended_capacity: number
  usable_capacity: number
  estimated_savings: number
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

  const updateField = (field: string, value: any) => {
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
    } catch (error) {
      console.error('Berekening mislukt:', error)
      // Fallback berekening
      const exportKwh = formData.jaarproductie_kwh - (formData.huidig_verbruik_kwh * 0.3)
      const verlies = exportKwh * (0.35 - 0.06 + 0.02)
      setResultaat({
        annual_loss: Math.round(verlies),
        daily_loss: Math.round(verlies / 365 * 100) / 100,
        recommended_capacity: exportKwh > 5000 ? 10 : 5,
        usable_capacity: exportKwh > 5000 ? 8 : 4,
        estimated_savings: Math.round(verlies * 0.7),
      })
    }
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const saveResponse = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const { lead_id } = await saveResponse.json()
      
      window.location.href = `/bedankt?lead=${lead_id}`
    } catch (error) {
      console.error('Opslaan mislukt:', error)
      window.location.href = '/bedankt'
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

  return (
    <section id="rekenmodule" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bereken jouw besparing
          </h2>
          <p className="text-lg text-gray-600">
            Vul je gegevens in en ontvang direct een persoonlijke berekening.
          </p>
        </div>

        {/* Calculator card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Progress bar */}
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-600">Stap {stap} van 3</span>
              <span className="text-sm text-slate-500">{Math.round((stap / 3) * 100)}% voltooid</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(stap / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {/* Stap 1: Adres */}
            {stap === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Wat is je adres?</h3>
                  <p className="text-gray-500 text-sm mt-1">We gebruiken dit om je opbrengst te schatten</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postcode</label>
                    <input
                      type="text"
                      placeholder="1234 AB"
                      value={formData.postcode}
                      onChange={(e) => updateField('postcode', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Huisnummer</label>
                    <input
                      type="text"
                      placeholder="42"
                      value={formData.huisnummer}
                      onChange={(e) => updateField('huisnummer', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Huisletter / toevoeging</label>
                  <input
                    type="text"
                    placeholder="A, B, 1, etc."
                    value={formData.huisletter}
                    onChange={(e) => updateField('huisletter', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={volgendeStap}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-lg transition-colors text-lg"
                >
                  Volgende →
                </button>
              </div>
            )}

            {/* Stap 2: Zonnepanelen */}
            {stap === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Gegevens zonnepanelen</h3>
                  <p className="text-gray-500 text-sm mt-1">Als je de exacte aantal niet weet, schat het dan gerust</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aantal zonnepanelen: <span className="font-bold text-emerald-600">{formData.aantal_panelen}</span>
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
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>2 panelen</span>
                    <span>30 panelen</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Jaarproductie (kWh)</label>
                  <input
                    type="number"
                    value={formData.jaarproductie_kwh}
                    onChange={(e) => updateField('jaarproductie_kwh', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Energieleverancier</label>
                  <select
                    value={formData.energieleverancier}
                    onChange={(e) => updateField('energieleverancier', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {ENERGIEL_EVERANCIERS.map(l => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStap(1)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-4 rounded-lg transition-colors"
                  >
                    ← Vorige
                  </button>
                  <button
                    type="button"
                    onClick={volgendeStap}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-lg transition-colors"
                  >
                    Bereken →
                  </button>
                </div>
              </div>
            )}

            {/* Stap 3: Resultaat */}
            {stap === 3 && (
              <div className="space-y-6">
                {loading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Berekening wordt gemaakt...</p>
                  </div>
                ) : resultaat ? (
                  <>
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900">Jouw persoonlijke berekening</h3>
                      <p className="text-gray-500 text-sm mt-1">Gebaseerd op je adres en zonnepanelen</p>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                      <p className="text-sm text-red-600 font-medium mb-1">Jaarlijks verlies na 2027</p>
                      <p className="text-3xl font-bold text-red-700">
                        €{resultaat.annual_loss.toLocaleString('nl-NL')}
                      </p>
                      <p className="text-sm text-red-500 mt-1">Dat is €{resultaat.daily_loss} per dag verloren</p>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
                      <p className="text-sm text-emerald-600 font-medium mb-1">
                        Met een {resultaat.recommended_capacity} kWh thuisbatterij
                      </p>
                      <p className="text-3xl font-bold text-emerald-700">
                        €{resultaat.estimated_savings.toLocaleString('nl-NL')} besparing/jaar
                      </p>
                      <p className="text-sm text-emerald-500 mt-1">
                        Inclusief 0% financiering via Warmtefonds
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Je naam</label>
                      <input
                        type="text"
                        placeholder="Voor- en achternaam"
                        name="naam"
                        value={formData.naam}
                        onChange={(e) => updateField('naam', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-mailadres</label>
                      <input
                        type="email"
                        placeholder="naam@voorbeeld.nl"
                        name="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefoonnummer</label>
                      <input
                        type="tel"
                        placeholder="06 12 34 56 78"
                        name="telefoon"
                        value={formData.telefoon}
                        onChange={(e) => updateField('telefoon', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-lg transition-colors text-lg"
                    >
                      Aanvraag starten →
                    </button>
                  </>
                ) : null}
              </div>
            )}
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          🔒 Je gegevens worden veilig opgeslagen en niet gepartageerd met derden.
        </p>
      </div>
    </section>
  )
}
