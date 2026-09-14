export default function SolutionSection() {
  const stappen = [
    { titel: 'Overdag', beschrijving: 'Zonnepanelen produceren stroom. Wat je niet direct gebruikt, gaat naar de batterij.' },
    { titel: 'Opslaan', beschrijving: 'De batterij slaat je overschot op voor gebruik \'s avonds of \'s nachts.' },
    { titel: 'Gebruiken', beschrijving: 'Gebruik je opgeslagen stroom wanneer de zon onder is.' },
  ]

  return (
    <section id="voordelen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-3">De oplossing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#061b31] leading-[1.1] mb-6 tracking-tight">
            Hoe een thuisbatterij het probleem oplost
          </h2>
          <p className="text-lg text-[#64748d] leading-relaxed">
            Een thuisbatterij slaat je overschot aan zonne-energie op voor gebruik 
            wanneer de zon niet schijnt. Zo verlies je geen stroom meer aan het net.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stappen.map((stap, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-700 font-medium">{i + 1}</span>
              </div>
              <h3 className="text-lg font-medium text-[#061b31] mb-2">{stap.titel}</h3>
              <p className="text-sm text-[#64748d]">{stap.beschrijving}</p>
            </div>
          ))}
        </div>

        {/* Energy monitor foto */}
        <div className="bg-[#f6f9fc] rounded-sm border border-[#e5edf5] p-8 shadow-stripe-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-light text-[#061b31] mb-4">Volg je energie in real-time</h3>
              <p className="text-[#64748d] mb-6">
                Met een smart energy monitor zie je precies hoeveel je opwekt, gebruikt en opslaat. 
                Besnoeim op elke euro en maximaliseer je besparing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-[#061b31]">
                  <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Live inzicht in productie en verbruik
                </li>
                <li className="flex items-center gap-3 text-sm text-[#061b31]">
                  <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Automatische laadoptimalisatie
                </li>
                <li className="flex items-center gap-3 text-sm text-[#061b31]">
                  <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Geschiedenis en rapportages
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img 
                src="/energy-monitor.jpg" 
                alt="Smart energy monitor met live data over zonne-energie en batterij"
                className="rounded-sm shadow-stripe-lg border border-[#e5edf5] max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="border-t border-[#e5edf5] pt-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-medium text-[#061b31] mb-1">Direct besparen</h4>
                  <p className="text-sm text-[#64748d]">Bespaar €800 tot €1.800 per jaar.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-medium text-[#061b31] mb-1">0% financiering</h4>
                  <p className="text-sm text-[#64748d]">Via het Warmtefonds tot €8.500.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-medium text-[#061b31] mb-1">Btw-teruggave</h4>
                  <p className="text-sm text-[#64748d]">21% terug op aanschaf en installatie.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-medium text-[#061b31] mb-1">10 jaar garantie</h4>
                  <p className="text-sm text-[#64748d]">Levensduur van 10-15 jaar.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-medium text-[#061b31] mb-1">Snel gerealiseerd</h4>
                  <p className="text-sm text-[#64748d]">Installatie binnen één dag.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-medium text-[#061b31] mb-1">Meer onafhankelijkheid</h4>
                  <p className="text-sm text-[#64748d]">Minder afhankelijk van energieprijzen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
