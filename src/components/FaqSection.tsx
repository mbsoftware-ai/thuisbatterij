'use client'

import { useState } from 'react'

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  const FAQS = [
    { id: 1, vraag: 'Wat is de salderingsregeling?', antwoord: 'De salderingsregeling bestaat sinds 2004 en stelt huiseigenaren in staat om teruggeleverde stroom later weer in te zonder extra te betalen.' },
    { id: 2, vraag: 'Wanneer stopt de salderingsregeling?', antwoord: 'Per 1 januari 2027 wordt de salderingsregeling afgeschaft.' },
    { id: 3, vraag: 'Wat gebeurt er na 2027?', antwoord: 'Teruggeleverde stroom wordt tegen ~€0,06/kWh afgerekend, terwijl je €0,35/kWh betaalt voor stroom van het net.' },
    { id: 4, vraag: 'Welke capaciteit heb ik nodig?', antwoord: 'Voor een gemiddeld huishouden is 10 kWh voldoende. Grotere systemen (15 kWh) voor meer dan 16 panelen.' },
    { id: 5, vraag: 'Hoe lang gaat een batterij mee?', antwoord: 'LiFePO4-batterijen hebben een levensduur van 10-15 jaar en 6.000 laadcycli.' },
    { id: 6, vraag: 'Is een batterij veilig?', antwoord: 'Ja, LiFePO4 is de veiligste thuistechnologie met een laag brandrisico.' },
    { id: 7, vraag: 'Wat krijg ik via het Warmtefonds?', antwoord: 'Een lening tot €8.500 tegen 0% rente met een looptijd van 10-15 jaar.' },
    { id: 8, vraag: 'Kan ik btw terugvragen?', antwoord: 'Ja, 21% btw terug op aanschaf en installatie, tot ~€1.300.' },
  ]

  return (
    <section id="faq" className="py-24 bg-[#f6f9fc]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-[#061b31] tracking-tight">Veelgestelde vragen</h2>
        </div>

        <div className="space-y-2">
          {FAQS.map(item => (
            <div key={item.id} className="bg-white rounded-sm border border-[#e5edf5] overflow-hidden">
              <button onClick={() => setOpenId(openId === item.id ? null : item.id)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                <span className="font-medium text-[#061b31] text-sm">{item.vraag}</span>
                <svg className={`w-4 h-4 text-[#64748d] transition-transform ${openId === item.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openId === item.id && (
                <div className="px-6 pb-4">
                  <p className="text-[#64748d] text-sm">{item.antwoord}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
