'use client'

import { useState } from 'react'

interface FaqItem {
  id: number
  categorie: string
  vraag: string
  antwoord: string
}

const FAQS: FaqItem[] = [
  {
    id: 1,
    categorie: 'Saldering',
    vraag: 'Wat is de salderingsregeling?',
    antwoord: 'De salderingsregeling bestaat sinds 2004 en stelt huiseigenaren in staat om de stroom die ze terugleveren aan het net (via zonnepanelen) later weer in te zonder hiervoor extra te betalen. Het tegoed dat je opbouwt overdag, trek je gewoon weer op \'s nachts of in de winter.',
  },
  {
    id: 2,
    categorie: 'Saldering',
    vraag: 'Wanneer stopt de salderingsregeling precies?',
    antwoord: 'De salderingsregeling wordt per 1 januari 2027 afgeschaft. Dit is een landelijke maatregel die direct gevolgen heeft voor alle huiseigenaren met zonnepanelen.',
  },
  {
    id: 3,
    categorie: 'Saldering',
    vraag: 'Wat gebeurt er met mijn teruggeleverde stroom na 2027?',
    antwoord: 'Na 2027 wordt teruggeleverde stroom tegen een veel lagere vergoeding afgerekend (ongeveer €0,06/kWh) terwijl je stroom die je van het net haalt het volledige tarief betaalt (gemiddeld €0,35/kWh). Dit verschil is je verlies.',
  },
  {
    id: 4,
    categorie: 'Batterij',
    vraag: 'Welke capaciteit heb ik nodig?',
    antwoord: 'Voor een gemiddeld huishouden met 10 tot 14 zonnepanelen is een batterij van 10 kWh voldoende. Grotere systemen van 15 kWh zijn geschikt voor huishoudens met meer dan 16 panelen of een hoog energieverbruik. Onze calculator geeft een persoonlijk advies.',
  },
  {
    id: 5,
    categorie: 'Batterij',
    vraag: 'Hoe lang gaat een thuisbatterij mee?',
    antwoord: 'LiFePO4-batterijen (lithium-ijzerfosfaat) die wij aanbieden hebben een levensduur van minimaal 10 jaar en 6.000 laadcycli. Daarmee gaan ze ruim mee tot 15 jaar.',
  },
  {
    id: 6,
    categorie: 'Batterij',
    vraag: 'Is een thuisbatterij veilig?',
    antwoord: 'Ja, LiFePO4-batterijen zijn de veiligste thuisbeschikbare technologie. Ze bevatten geen giftige stoffen, hebben een lage brandrisico en zijn uitgerust met een batterijbeheersysteem dat alles monitort.',
  },
  {
    id: 7,
    categorie: 'Subsidie',
    vraag: 'Wat krijg ik via het Warmtefonds?',
    antwoord: 'Via het Warmtefonds kun je een lening aanvragen tot €8.500 tegen 0% rente met een looptijd van 10 tot 15 jaar. Aan inkomstenvoorwaarden hoef je niet te voldoen. De lening is alleen beschikbaar voor huiseigenaren.',
  },
  {
    id: 8,
    categorie: 'Subsidie',
    vraag: 'Kan ik ook btw terugvragen?',
    antwoord: 'Ja, als huiseigenaar kun je 21% btw terugvragen op de aanschaf en installatie van een thuisbatterij. Dit kan oplopen tot circa €1.300 bij een batterij van €6.000. Wij helpen je hierbij.',
  },
  {
    id: 9,
    categorie: 'Installatie',
    vraag: 'Hoe duurt de installatie?',
    antwoord: 'Een standaard installatie van een thuisbatterij duurt gemiddeld 4 tot 6 uur. Een erkende installateur van ons netwerk komt in één dag alles plaatsen en aansluiten.',
  },
  {
    id: 10,
    categorie: 'Installatie',
    vraag: 'Heb ik een bouwvergunning nodig?',
    antwoord: 'Nee, een thuisbatterij plaatsen vereist geen bouwvergunning. De installatie vallt onder kleine energie-installaties die zonder vergunning mogen worden geplaatst.',
  },
  {
    id: 11,
    categorie: 'Financieel',
    vraag: 'Wanneer is de batterij terugverdiend?',
    antwoord: 'Gemiddeld is een thuisbatterij in 5 tot 7 jaar terugverdiend, afhankelijk van je verbruik, aantal zonnepanelen en het stoppen van de salderingsregeling. Met de Warmtefonds-financiering is de maandlast vaak lager dan de besparing.',
  },
  {
    id: 12,
    categorie: 'Algemeen',
    vraag: 'Kan ik een thuisbatterij ook zonder zonnepanelen gebruiken?',
    antwoord: 'Ja, maar dan is het financieel minder aantrekkelijk. Zonder zonnepanelen kan je batterij \'s nachts goedkope stroom van het net opslaan en overdag gebruiken. Het voordeel is dan kleiner omdat het prijsverschil tussen nacht en dag minder groot is.',
  },
]

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null)
  const [activeCategorie, setActiveCategorie] = useState<string>('Alle')

  const categorien = ['Alle', ...Array.from(new Set(FAQS.map(f => f.categorie)))]
  const filteredFaqs = activeCategorie === 'Alle' ? FAQS : FAQS.filter(f => f.categorie === activeCategorie)

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-gray-600">
            Alles wat je wilt weten over thuisbatterijen en de salderingsregeling.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categorien.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategorie(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategorie === cat
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {filteredFaqs.map(item => (
            <div
              key={item.id}
              className={`bg-white rounded-xl border transition-all overflow-hidden ${
                openId === item.id ? 'border-emerald-200 shadow-sm' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                    {item.categorie}
                  </span>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    {item.vraag}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                  {item.antwoord}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Staat je vraag er niet tijdens? Neem gerust contact met ons op.
          </p>
          <a
            href="mailto:info@thuisbatterij.nl"
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@thuisbatterij.nl
          </a>
        </div>
      </div>
    </section>
  )
}