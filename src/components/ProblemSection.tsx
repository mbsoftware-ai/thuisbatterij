export default function ProblemSection() {
  return (
    <section id="probleem" className="py-24 bg-[#f6f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Two-column with photos */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="relative rounded-sm overflow-hidden shadow-stripe-lg border border-[#e5edf5]">
              <img 
                src="/energy-monitor.jpg" 
                alt="Smart energy monitor toont je energieverbruik en terugleveringen in real-time"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-sm font-medium">Real-time inzicht</p>
                <p className="text-white/70 text-xs">Zie precies wat je levert en gebruikt</p>
              </div>
            </div>
            <h3 className="text-2xl font-light text-[#061b31]">Nu: volledige saldering</h3>
            <p className="text-[#64748d] leading-relaxed">
              Stroom die je zonnepanelen produceren maar niet direct gebruik, lever je terug aan het net. 
              Die teruggeleverde stroom trek je later weer in zonder dat je extra betaalt.
            </p>
            <div className="bg-white rounded-sm border border-[#e5edf5] p-4">
              <p className="text-sm text-[#273951]">
                <span className="font-medium">Voorbeeld:</span> Je levert 3.000 kWh terug en 
                gebruikt 3.000 kWh 's nachts. Je rekening blijft beperkt tot het vastrecht.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-sm overflow-hidden shadow-stripe-lg border border-[#e5edf5]">
              <img 
                src="/battery-installation.jpg" 
                alt="Thuisbatterij geïnstalleerd naast meterkast in Nederlandse woning"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-sm font-medium">Energie-onafhankelijk</p>
                <p className="text-white/70 text-xs">Gebruik je eigen stroom op alle tijden</p>
              </div>
            </div>
            <h3 className="text-2xl font-light text-[#061b31]">Na 2027: geen saldering meer</h3>
            <p className="text-[#64748d] leading-relaxed">
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

        {/* Stats */}
        <div className="border-t border-[#e5edf5] pt-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-[#061b31] mb-1">€800</div>
              <p className="text-sm text-[#64748d]">Minimaal verlies/jaar</p>
            </div>
            <div>
              <div className="text-3xl font-light text-[#061b31] mb-1">€1.200</div>
              <p className="text-sm text-[#64748d]">Gemiddeld verlies/jaar</p>
            </div>
            <div>
              <div className="text-3xl font-light text-[#061b31] mb-1">€1.800</div>
              <p className="text-sm text-[#64748d]">Maximaal verlies/jaar</p>
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
