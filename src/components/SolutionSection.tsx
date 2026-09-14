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
              className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.titel}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.beschrijving}</p>
            </div>
          ))}
        </div>

        {/* How it works visual */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-10 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Zo werkt het in de praktijk
            </h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl flex items-center justify-center shadow-lg shadow-amber-100/50">
                  <svg className="w-12 h-12 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Overdag</h4>
                <p className="text-sm text-gray-600">
                  Zonnepanelen produceren stroom. Wat je niet direct gebruikt, gaat naar de batterij in plaats van naar het net.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center shadow-lg shadow-emerald-100/50">
                  <svg className="w-12 h-12 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <rect x="2" y="7" width="18" height="10" rx="2" />
                    <path d="M22 11v2" />
                    <path d="M6 11v2M10 11v2M14 11v2" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Opslaan</h4>
                <p className="text-sm text-gray-600">
                  De batterij slaat je overschot op. Een 10 kWh batterij is genoeg voor een gemiddeld huishouden voor de avond en nacht.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-lg shadow-indigo-100/50">
                  <svg className="w-12 h-12 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
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
