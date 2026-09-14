import { Illustrations } from './Illustrations'

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

        {/* Process steps - horizontal, no cards */}
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

        {/* Battery diagram */}
        <div className="bg-[#f6f9fc] rounded-sm border border-[#e5edf5] p-8 mb-20 shadow-stripe-sm">
          <h3 className="text-xl font-light text-[#061b31] text-center mb-6">Zo werkt het in de praktijk</h3>
          <Illustrations.BatteryDiagram />
        </div>

        {/* Benefits - clean list style */}
        <div className="border-t border-[#e5edf5] pt-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-medium text-[#061b31] mb-1">Direct besparen</h4>
                  <p className="text-sm text-[#64748d]">Bespaar €800 tot €1.800 per jaar doordat je zelf je opgewekte stroom gebruikt.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-medium text-[#061b31] mb-1">0% financiering</h4>
                  <p className="text-sm text-[#64748d]">Via het Warmtefonds kun je tot €8.500 lenen tegen 0% rente.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-medium text-[#061b31] mb-1">Btw-teruggave</h4>
                  <p className="text-sm text-[#64748d]">Je kunt 21% btw terugvragen op de aanschaf en installatie.</p>
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
                  <p className="text-sm text-[#64748d]">LiFePO4-batterijen hebben een levensduur van 10 tot 15 jaar.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-medium text-[#061b31] mb-1">Snel gerealiseerd</h4>
                  <p className="text-sm text-[#64748d]">Een erkende installateur plaatst de batterij binnen één dag.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-medium text-[#061b31] mb-1">Meer onafhankelijkheid</h4>
                  <p className="text-sm text-[#64748d]">Minder afhankelijk van stijgende energieprijzen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
