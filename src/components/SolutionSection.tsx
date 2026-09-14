export default function SolutionSection() {
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

        {/* Main solution image - battery closeup */}
        <div className="relative rounded-sm overflow-hidden shadow-stripe-xl border border-[#e5edf5] mb-20">
          <img 
            src="/battery-closeup.jpg" 
            alt="Close-up van een moderne thuisbatterij geïnstalleerd in een schakelkast"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white text-lg font-medium mb-2">Moderne thuisbatterij</p>
            <p className="text-white/80 text-sm">Compact, veilig en zorgeloos. Geïnstalleerd binnen één dag.</p>
          </div>
        </div>

        {/* Process steps with photos */}
        <div className="space-y-20">
          {/* Step 1: Installer */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-600 font-medium text-sm mb-3">Stap 1</div>
              <h3 className="text-2xl font-light text-[#061b31] mb-4">Professionele installatie</h3>
              <p className="text-[#64748d] leading-relaxed mb-6">
                Onze gecertificeerde installateurs plaatsen de batterij snel en vakkundig. 
                De installatie duurt gemiddeld 4 tot 6 uur en vereist geen bouwvergunning.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-[#061b31]">
                  <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Gecertificeerde installateurs
                </li>
                <li className="flex items-center gap-3 text-sm text-[#061b31]">
                  <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Installatie binnen één dag
                </li>
                <li className="flex items-center gap-3 text-sm text-[#061b31]">
                  <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  10 jaar garantie
                </li>
              </ul>
            </div>
            <div className="relative rounded-sm overflow-hidden shadow-stripe-lg border border-[#e5edf5]">
              <img 
                src="/installer.jpg" 
                alt="Gecertificeerde monteur installeert thuisbatterij naast meterkast"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-sm font-medium">Professionele montage</p>
              </div>
            </div>
          </div>

          {/* Step 2: Couple with tablet */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="text-emerald-600 font-medium text-sm mb-3">Stap 2</div>
              <h3 className="text-2xl font-light text-[#061b31] mb-4">Volg je energie in real-time</h3>
              <p className="text-[#64748d] leading-relaxed mb-6">
                Met een smart energy monitor zie je precies hoeveel je opwekt, gebruikt en opslaat. 
                Bespaar op elke euro en maximaliseer je investering.
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
            <div className="relative rounded-sm overflow-hidden shadow-stripe-lg border border-[#e5edf5] lg:order-1">
              <img 
                src="/couple-tablet.jpg" 
                alt="Trotse Nederlandse koppeling bekijkt energiedashboard op tablet in woonkamer"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-sm font-medium">Volg je besparing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits summary */}
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
