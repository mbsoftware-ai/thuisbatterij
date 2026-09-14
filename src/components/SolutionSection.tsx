export default function SolutionSection() {
  const voordelen = [
    {
      titel: 'Direct besparen',
      beschrijving: 'Gebruik je opgewekte zelf stroom in plaats van deze tegen een lage vergoeding aan het net te leveren. Bespaar €800 tot €1.800 per jaar.',
    },
    {
      titel: '0% financiering',
      beschrijving: 'Via het Warmtefonds kun je tot €8.500 lenen tegen 0% rente. De maandlasten zijn vaak lager dan de besparing.',
    },
    {
      titel: 'Btw-teruggave',
      beschrijving: 'Je kunt 21% btw terugvragen op de aanschaf en installatie van de thuisbatterij, tot circa €1.300.',
    },
    {
      titel: '10 jaar garantie',
      beschrijving: 'LiFePO4-batterijen zijn veilig, duurzaam en hebben een levensduur van 10 tot 15 jaar.',
    },
    {
      titel: 'Meer onafhankelijkheid',
      beschrijving: 'Minder afhankelijk van stijgende energieprijzen en wisselende terugleververgoedingen.',
    },
    {
      titel: 'Snel gerealiseerd',
      beschrijving: 'Een erkende installateur plaatst de batterij binnen één dag. Geen gedoe met vergunningen.',
    },
  ]

  return (
    <section id="voordelen" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hoe een thuisbatterij het probleem oplost
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Een thuisbatterij slaat je overschot aan zonne-energie op voor gebruik 
            wanneer de zon niet schijnt. Zo verlies je geen stroom meer aan het net.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {voordelen.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.titel}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.beschrijving}</p>
            </div>
          ))}
        </div>

        {/* How it works visual */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
              Zo werkt het in de praktijk
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-amber-100 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">☀️</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Overdag</h4>
                <p className="text-sm text-gray-600">
                  Zonnepanelen produceren stroom. Wat je niet direct gebruikt, gaat naar de batterij in plaats van naar het net.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🔋</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Opslaan</h4>
                <p className="text-sm text-gray-600">
                  De batterij slaat je overschot op. Een 10 kWh batterij is genoeg voor een gemiddeld huishouden voor de avond en nacht.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-indigo-100 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🌙</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">'s Avonds & 's nachts</h4>
                <p className="text-sm text-gray-600">
                  Gebruik je opgeslagen stroom wanneer de zon onder is. Zo haal je nauwelijks stroom van het net.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
