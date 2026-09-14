export default function ProblemSection() {
  return (
    <section id="probleem" className="py-24 bg-[#f6f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial-style header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-3">Het probleem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#061b31] leading-[1.1] mb-6 tracking-tight">
            De salderingsregeling stopt per 1 januari 2027
          </h2>
          <p className="text-lg text-[#64748d] leading-relaxed">
            Sinds 2004 bestaat de salderingsregeling. Die komt per 1 januari 2027 te einde. 
            Voor huiseigenaren met zonnepanelen heeft dat grote financiële gevolgen.
          </p>
        </div>

        {/* Two-column comparison - editorial style, no cards */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-sm flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-[#061b31]">Nu: volledige saldering</h3>
            </div>
            <p className="text-[#64748d] leading-relaxed mb-6">
              Stroom die je zonnepanelen produceren maar niet direct gebruik, lever je terug aan het net. 
              Die teruggeleverde stroom trek je later weer in zonder dat je extra betaalt.
            </p>
            <div className="bg-white rounded-sm border border-[#e5edf5] p-4">
              <p className="text-sm text-[#273951]">
                <span className="font-medium">Voorbeeld:</span> Je levert 3.000 kWh terug en 
                gebruikt 3.000 kWh 's nachts. Je energierekening blijft beperkt tot het vastrecht.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-sm flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-[#061b31]">Na 2027: geen saldering meer</h3>
            </div>
            <p className="text-[#64748d] leading-relaxed mb-6">
              Teruggeleverde stroom wordt tegen een lage vergoeding afgerekend, terwijl je 
              stroom die je 's nachts van het net haalt volledig moet betalen.
            </p>
            <div className="bg-white rounded-sm border border-[#e5edf5] p-4">
              <p className="text-sm text-[#273951]">
                <span className="font-medium">Gevolg:</span> Terugleververgoeding is 
                €0,06/kWh terwijl je €0,35/kWh betaalt voor stroom van het net. 
                Dat verschil stapelt zich op tot honderden euro's per jaar.
              </p>
            </div>
          </div>
        </div>

        {/* Stats row - clean, no cards */}
        <div className="border-t border-[#e5edf5] pt-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-[#061b31] mb-1">€800</div>
              <p className="text-sm text-[#64748d]">Minimaal verlies/jaar</p>
              <p className="text-xs text-[#94a3b8] mt-1">8 panelen</p>
            </div>
            <div>
              <div className="text-3xl font-light text-[#061b31] mb-1">€1.200</div>
              <p className="text-sm text-[#64748d]">Gemiddeld verlies/jaar</p>
              <p className="text-xs text-[#94a3b8] mt-1">12 panelen</p>
            </div>
            <div>
              <div className="text-3xl font-light text-[#061b31] mb-1">€1.800</div>
              <p className="text-sm text-[#64748d]">Maximaal verlies/jaar</p>
              <p className="text-xs text-[#94a3b8] mt-1">20 panelen</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a href="#rekenmodule" className="btn-primary inline-flex items-center gap-2">
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
