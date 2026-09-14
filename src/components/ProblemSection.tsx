export default function ProblemSection() {
  return (
    <section id="probleem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            De salderingsregeling stopt. Wat betekent dat voor jou?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sinds 2004 bestaat de salderingsregeling. Die komt per 1 januari 2027 te einde. 
            Voor huiseigenaren met zonnepanelen heeft dat grote financiële gevolgen.
          </p>
        </div>

        {/* Timeline comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100 shadow-sm">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nu: volledige saldering</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Stroom die je zonnepanelen produceren maar niet direct gebruik, lever je terug aan het net. 
              Die teruggeleverde stroom trek je later weer in zonder dat je extra betaalt.
            </p>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-emerald-200">
              <p className="text-sm text-emerald-800">
                <span className="font-semibold">Voorbeeld:</span> Je levert 3.000 kWh terug en 
                gebruikt 3.000 kWh 's nachts. Je energierekening blijft beperkt tot het vastrecht.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100 shadow-sm">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Na 2027: geen saldering meer</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Teruggeleverde stroom wordt tegen een lage vergoeding afgerekend, terwijl je 
              stroom die je 's nachts van het net haalt volledig moet betalen.
            </p>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-red-200">
              <p className="text-sm text-red-800">
                <span className="font-semibold">Gevolg:</span> Terugleververgoeding is 
                €0,06/kWh terwijl je €0,35/kWh betaalt voor stroom van het net. 
                Dat verschil stapelt zich op tot honderden euro's per jaar.
              </p>
            </div>
          </div>
        </div>

        {/* Impact numbers */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-10 md:p-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Financiële impact voor huiseigenaren
          </h3>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-2xl mb-4">
                <span className="text-3xl font-bold text-emerald-400">€800</span>
              </div>
              <p className="text-gray-300 text-sm">
                Minimaal verlies per jaar
              </p>
              <p className="text-gray-500 text-xs mt-1">8 panelen, 2.400 kWh</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-2xl mb-4">
                <span className="text-3xl font-bold text-emerald-400">€1.200</span>
              </div>
              <p className="text-gray-300 text-sm">
                Gemiddeld verlies per jaar
              </p>
              <p className="text-gray-500 text-xs mt-1">12 panelen, 3.600 kWh</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-2xl mb-4">
                <span className="text-3xl font-bold text-emerald-400">€1.800</span>
              </div>
              <p className="text-gray-300 text-sm">
                Maximaal verlies per jaar
              </p>
              <p className="text-gray-500 text-xs mt-1">20 panelen, 6.000 kWh</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="#rekenmodule"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Bereken jouw verlies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
