export default function SolutionSection() {
  const voordelen = [
    {
      icone: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      titel: 'Direct besparen',
      beschrijving: 'Bespaar €800 tot €1.800 per jaar doordat je zelf je opgewekte stroom gebruik in plaats van deze tegen een lage vergoeding aan het net te leveren.',
    },
    {
      icone: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V12Zm-12 0h.008v.008H6V12Z" />
        </svg>
      ),
      titel: '0% financiering',
      beschrijving: 'Via het Warmtefonds kun je tot €8.500 lenen tegen 0% rente. De maandlasten zijn vaak lager dan de besparing, dus de batterij betaalt zichzelf terug.',
    },
    {
      icone: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
      titel: '10 jaar garantie',
      beschrijving: 'LiFePO4-batterijen zijn veilig, duurzaam en hebben een levensduur van 10 tot 15 jaar. Geen onderhoud nodig na installatie.',
    },
    {
      icone: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      ),
      titel: 'Onafhankelijkheid',
      beschrijving: 'Minder afhankelijk van stijgende energieprijzen en wisselende terugleververgoedingen. Je hebt meer zekerheid over je energiekosten.',
    },
    {
      icone: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      titel: 'Btw-teruggave',
      beschrijving: 'Je kunt 21% btw terugvragen op de aanschaf en installatie van de thuisbatterij. Hiermee wordt de netto-investitie nog lager.',
    },
    {
      icone: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
      ),
      titel: 'Snel geïnstalleerd',
      beschrijving: 'Een erkende installateur plaatst de batterij binnen één dag. Geen gedoe met bouwvergunningen of grote aanpassingen aan je meterkast.',
    },
  ]

  return (
    <section id="voordelen" className="py-20 bg-emerald-50/50">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {voordelen.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                {item.icone}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.titel}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.beschrijving}</p>
            </div>
          ))}
        </div>

        {/* How it works visual */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
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