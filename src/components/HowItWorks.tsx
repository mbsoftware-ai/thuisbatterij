export default function HowItWorks() {
  const stappen = [
    {
      nummer: 1,
      titel: 'Vul je adres in',
      beschrijving: 'Postcode en huisnummer. Op basis van je locatie schatten we je opbrengst en zonnestraling.',
    },
    {
      nummer: 2,
      titel: 'Geef je zonnepanelen op',
      beschrijving: 'Aantal panelen, jaarproductie en energieleverancier. Als je de gegevens niet weet, schatten wij dit op basis van je adres.',
    },
    {
      nummer: 3,
      titel: 'Ontvang je offerte',
      beschrijving: 'Binnen 24 uur ontvang je een vrijblijvende offerte op maat, inclusief Warmtefonds-financiering en btw-teruggave.',
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Drie stappen naar je offerte
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Binnen een minuut weet je hoeveel je verliest door het stoppen van de saldering
            en hoeveel een thuisbatterij je kan besparen.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {stappen.map((stap) => (
            <div key={stap.nummer} className="relative">
              <div className="bg-white rounded-2xl p-8 h-full shadow-sm border border-slate-200">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-600 text-white text-lg font-bold rounded-full mb-4">
                  {stap.nummer}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stap.titel}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stap.beschrijving}</p>
              </div>
              {stap.nummer < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-emerald-300 text-2xl font-light">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Gratis • Vrijblijvend • Binnen 24 uur in je mailbox
          </p>
        </div>
      </div>
    </section>
  )
}
