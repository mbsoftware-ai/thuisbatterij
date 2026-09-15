export default function SolutionSection() {
  return (
    <section id="voordelen" className="py-24 bg-[#1c1e54] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left - Content */}
          <div className="lg:col-span-6">
            <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider mb-3">De oplossing</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.1] mb-6 tracking-tight">
              Een thuisbatterij slaat je energie op
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Geen stroom meer verspillen aan het net. Gebruik je eigen zonne-energie 
              wanneer je hem nodig hebt.
            </p>

            {/* Battery visual */}
            <div className="bg-white/5 backdrop-blur-sm rounded-sm p-6 border border-white/10 inline-flex items-center gap-4">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-sm flex items-center justify-center">
                <span className="text-3xl font-light text-emerald-400">85%</span>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Batterij niveau</p>
                <p className="text-lg font-medium text-white">Genoeg voor vanavond</p>
              </div>
            </div>
          </div>

          {/* Right - Battery photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-emerald-500/30 rounded-full blur-2xl"></div>
              <div className="relative rounded-sm overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="/battery-hero.jpg" 
                  alt="Moderne thuisbatterij wit keurmerk"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-sm px-3 py-2 shadow-stripe-sm">
                <p className="text-xs text-[#64748d]">10 jaar garantie</p>
              </div>
              <div className="absolute -bottom-4 left-4 bg-emerald-600 text-white rounded-sm px-4 py-2 shadow-stripe-md">
                <p className="text-xs font-medium">Geïnstalleerd vandaag</p>
              </div>
            </div>
          </div>
        </div>

        {/* Three photos - editorial grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative rounded-sm overflow-hidden shadow-2xl border border-white/10 group">
            <img 
              src="/installer.jpg" 
              alt="Gecertificeerde monteur installeert batterij"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm font-medium">Professionele installatie</p>
              <p className="text-white/70 text-xs">Binnen één dag klaar</p>
            </div>
          </div>

          <div className="relative rounded-sm overflow-hidden shadow-2xl border border-white/10 group">
            <img 
              src="/couple.jpg" 
              alt="Koppeling bekijkt energie dashboard op tablet"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm font-medium">Real-time inzicht</p>
              <p className="text-white/70 text-xs">Volg je besparing live</p>
            </div>
          </div>

          <div className="relative rounded-sm overflow-hidden shadow-2xl border border-white/10 group">
            <img 
              src="/solar-panels.jpg" 
              alt="Zonnepanelen op Nederlands dak"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm font-medium">Maximaliseer opbrengst</p>
              <p className="text-white/70 text-xs">Gebruik alles zelf</p>
            </div>
          </div>
        </div>

        {/* Benefits list */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { titel: 'Direct besparen', desc: '€800 tot €1.800 per jaar' },
            { titel: '0% financiering', desc: 'Warmtefonds tot €8.500' },
            { titel: 'Btw-teruggave', desc: '21% terug op aanschaf' },
            { titel: '10 jaar garantie', desc: 'Levensduur 10-15 jaar' },
            { titel: 'Installatie in 1 dag', desc: 'Geen vergunning nodig' },
            { titel: 'Onafhankelijk', desc: 'Minder prijsgevoelig' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">{item.titel}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
