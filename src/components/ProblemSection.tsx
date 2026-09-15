export default function ProblemSection() {
  return (
    <section id="probleem" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left - Photo with floating element */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-50 rounded-full opacity-60 blur-2xl"></div>
              <div className="relative rounded-sm overflow-hidden shadow-stripe-xl border border-[#e5edf5]">
                <img 
                  src="/aerial-solar.jpg" 
                  alt="Overzicht van Nederlandse wijk met zonnepanelen"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-sm shadow-stripe-lg border border-[#e5edf5] p-4">
                <p className="text-xs text-[#64748d] mb-1">Gemiddeld verlies</p>
                <p className="text-2xl font-light text-red-600">-€1.200/jaar</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-7">
            <p className="text-xs font-medium text-red-600 uppercase tracking-wider mb-3">Het probleem</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#061b31] leading-[1.1] mb-6 tracking-tight">
              De salderingsregeling stopt per 1 januari 2027
            </h2>
            <p className="text-lg text-[#64748d] leading-relaxed mb-8">
              Sinds 2004 bestaat de salderingsregeling. Die komt per 1 januari 2027 te einde. 
              Voor huiseigenaren met zonnepanelen heeft dat grote financiële gevolgen.
            </p>

            {/* Comparison boxes */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-sm p-6 border border-emerald-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <h3 className="font-medium text-[#061b31]">Nu</h3>
                </div>
                <p className="text-sm text-[#64748d]">
                  Stroom die je levert, trek je later gratis terug in.
                </p>
              </div>
              <div className="bg-red-50 rounded-sm p-6 border border-red-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <h3 className="font-medium text-[#061b31]">Na 2027</h3>
                </div>
                <p className="text-sm text-[#64748d]">
                  Je krijgt €0,06/kWh terwijl je €0,35 betaalt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
