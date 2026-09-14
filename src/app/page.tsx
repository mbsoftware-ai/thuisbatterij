'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const ENERGIEL_EVERANCIERS = [
  'Eneco', 'Essent', 'E.ON', 'Nuon', 'Greenchoice', 'Vattenfall', 
  'Enel', 'Budget Energie', 'HollandsZand', 'Andere'
]

const STAPPEN = [
  { id: 1, title: 'Adres', subtitle: 'Postcode & huisnummer' },
  { id: 2, title: 'Zonnepanelen', subtitle: 'Gegevens van je panelen' },
  { id: 3, title: 'Resultaat', subtitle: 'Je persoonlijke berekening' },
]

export default function HomePage() {
  const router = useRouter()
  const [stap, setStap] = useState(1)
  const [formData, setFormData] = useState({
    postcode: '',
    huisnummer: '',
    huisletter: '',
    heeft_zonnepanelen: true,
    aantal_panelen: 10,
    jaarproductie_kwh: 3000,
    jaarinstallatie: 2022,
    energieleverancier: 'Eneco',
    huidig_verbruik_kwh: 3500,
  })
  const [resultaat, setResultaat] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const volgendeStap = () => {
    if (stap < 3) {
      setStap(stap + 1)
      if (stap === 2) {
        berekenResultaat()
      }
    }
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
        estimated_savings: Math.round(verlies * 0.7),
      })
    }
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // Save lead
      const saveResponse = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const { lead_id } = await saveResponse.json()
      
      router.push(`/bedankt?lead=${lead_id}`)
    } catch (error) {
      console.error('Opslaan mislukt:', error)
      router.push('/bedankt')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-emerald-700">⚡ ThuisBatterij</div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#voordelen" className="hover:text-emerald-600">Voordelen</a>
            <a href="#werking" className="hover:text-emerald-600">Hoe werkt het?</a>
            <a href="#faq" className="hover:text-emerald-600">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Stop met geld verspreiden na 2027
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          De salderingsregeling stopt per 1 januari. Ontdek in 30 seconden hoeveel 
          <span className="font-semibold text-red-600"> €{resultaat ? resultaat.annual_loss.toLocaleString('nl-NL') : '1.200'}</span> 
          je jaarlijks verliest en hoe een thuisbatterij je kan besparen.
        </p>
      </section>

      {/* Intake Formulier */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          {/* Progress Bar */}
          <div className="flex justify-between mb-8">
            {STAPPEN.map((s) => (
              <div key={s.id} className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 ${
                  stap >= s.id ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {stap > s.id ? '✓' : s.id}
                </div>
                <span className="text-xs font-medium text-gray-700">{s.title}</span>
                <span className="text-xs text-gray-500">{s.subtitle}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Stap 1: Adres */}
            {stap === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postcode
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Huisnummer
                  </label>
                  <input
                    type="text"
                    placeholder="42"
                    value={formData.huisnummer}
                    onChange={(e) => updateField('huisnummer', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Huisletter / toevoeging
                  </label>
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
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-lg transition-colors"
                >
                  Volgende →
                </button>
              </div>
            )}

            {/* Stap 2: Zonnepanelen */}
            {stap === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Heb je zonnepanelen?
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => updateField('heeft_zonnepanelen', true)}
                      className={`flex-1 py-3 rounded-lg font-medium border-2 ${
                        formData.heeft_zonnepanelen 
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                          : 'border-gray-300 text-gray-600'
                      }`}
                    >
                      Ja
                    </button>
                    <button
                      type="button"
                      onClick={() => updateField('heeft_zonnepanelen', false)}
                      className={`flex-1 py-3 rounded-lg font-medium border-2 ${
                        !formData.heeft_zonnepanelen 
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                          : 'border-gray-300 text-gray-600'
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
                        Aantal zonnepanelen: {formData.aantal_panelen}
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
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jaarproductie (kWh)
                      </label>
                      <input
                        type="number"
                        value={formData.jaarproductie_kwh}
                        onChange={(e) => updateField('jaarproductie_kwh', parseInt(e.target.value) || 0)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Energieleverancier
                      </label>
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
                  </>
                )}

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
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                      <p className="text-sm text-red-600 font-medium mb-1">Je jaarlijks verlies na 2027</p>
                      <p className="text-4xl font-bold text-red-700">
                        €{resultaat.annual_loss.toLocaleString('nl-NL')}
                      </p>
                      <p className="text-sm text-red-500 mt-1">
                        (dat is €{resultaat.daily_loss} per dag!)
                      </p>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Je naam
                      </label>
                      <input
                        type="text"
                        placeholder="Voor- en achternaam"
                        name="naam"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mailadres
                      </label>
                      <input
                        type="email"
                        placeholder="naam@voorbeeld.nl"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefoonnummer
                      </label>
                      <input
                        type="tel"
                        placeholder="06 12 34 56 78"
                        name="telefoon"
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2027 ThuisBatterij.nl - Alle rechten voorbehouden</p>
        </div>
      </footer>
    </main>
  )
}
