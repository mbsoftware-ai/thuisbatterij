export default function ProblemSection() {
  return (
    <section id="probleem" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent -skew-x-12 transform origin-top-right"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left - Photo composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full opacity-60"></div>
              <div className="relative rounded-sm overflow-hidden shadow-stripe-xl border border-[#e5edf5]">
                <img 
                  src="/solar-panels.jpg" 
                  alt="Zonnepanelen op een Nederlands dak"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-sm shadow-stripe-lg border border-[#e5edf5] p-4 max-w-xs">
                <p className="text-xs text-[#64748d]">Terugleververgoeding</p>
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

            {/* Comparison */}
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
