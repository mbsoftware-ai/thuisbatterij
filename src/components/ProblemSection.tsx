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
          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Nu: volledige saldering</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Stroom die je zonnepanelen produceren maar niet direct gebruik, lever je terug aan het net. 
              Die teruggeleverde stroom trek je later weer in zonder dat je extra betaalt. 
              Het tegoed dat je opbouwd overdag, gebruik je 's nachts of in de winter.
            </p>
            <div className="bg-white rounded-lg p-4 border border-emerald-200">
              <p className="text-sm text-emerald-800">
                <span className="font-semibold">Voorbeeld:</span> Je levert 3.000 kWh terug en 
                gebruikt 3.000 kWh 's nachts. Je energierekening blijft beperkt tot het vastrecht.
              </p>
            </div>
          </div>

          <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Na 2027: geen saldering meer</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Teruggeleverde stroom wordt tegen een lage vergoeding afgerekend, terwijl je 
              stroom die je 's nachts van het net haalt volledig moet betalen. Het verschil is je verlies.
            </p>
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <p className="text-sm text-red-800">
                <span className="font-semibold">Gevolg:</span> Terugleververgoeding is 
                €0,06/kWh terwijl je €0,35/kWh betaalt voor stroom van het net. 
                Dat verschil stapelt zich op tot honderden euro's per jaar.
              </p>
            </div>
          </div>
        </div>

        {/* Impact numbers */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Financiële impact voor huiseigenaren
          </h3>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">€800</div>
              <p className="text-gray-300 text-sm">
                Minimaal verlies per jaar<br />
                <span className="text-gray-500">(8 panelen, 2.400 kWh)</span>
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">€1.200</div>
              <p className="text-gray-300 text-sm">
                Gemiddeld verlies per jaar<br />
                <span className="text-gray-500">(12 panelen, 3.600 kWh)</span>
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">€1.800</div>
              <p className="text-gray-300 text-sm">
                Maximaal verlies per jaar<br />
                <span className="text-gray-500">(20 panelen, 6.000 kWh)</span>
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="#rekenmodule"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
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
