export default function Testimonials() {
  const testimonials = [
    { naam: 'Mark de Vries', plaats: 'Utrecht', tekst: 'Al lang nagedaan over een batterij. Toen ik zag hoeveel ik verloor, binnen een week een offerte.' },
    { naam: 'Sophie Jansen', plaats: 'Eindhoven', tekst: 'Warmtefonds-financiering maakt het toegankelijk. Mijn maandlast zijn lager dan wat ik verloor.' },
    { naam: 'Thomas Bakker', plaats: 'Amsterdam', tekst: 'Simpel geïnstalleerd. \'s Avonds gebruik ik bijna geen stroom van het net meer.' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-[#f6f9fc] rounded-sm">
            <div className="text-3xl font-light text-[#061b31] mb-1">2.847</div>
            <p className="text-sm text-[#64748d]">Geplaatste batterijen</p>
          </div>
          <div className="text-center p-6 bg-[#f6f9fc] rounded-sm">
            <div className="text-3xl font-light text-[#061b31] mb-1">4.8/5</div>
            <p className="text-sm text-[#64748d]">Klanttevredenheid</p>
          </div>
          <div className="text-center p-6 bg-[#f6f9fc] rounded-sm">
            <div className="text-3xl font-light text-[#061b31] mb-1">€1.150</div>
            <p className="text-sm text-[#64748d]">Gem. besparing/jaar</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-[#061b31] tracking-tight">Wat klanten zeggen</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border-l-2 border-emerald-200 pl-6">
              <p className="text-[#64748d] text-sm leading-relaxed mb-4">"{t.tekst}"</p>
              <div>
                <p className="font-medium text-[#061b31] text-sm">{t.naam}</p>
                <p className="text-xs text-[#94a3b8]">{t.plaats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
