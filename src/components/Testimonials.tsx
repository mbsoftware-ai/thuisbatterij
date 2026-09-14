export default function Testimonials() {
  const testimonials = [
    {
      naam: 'Mark de Vries',
      plaats: 'Utrecht',
      tekst: 'Al lang nagedaan over een batterij. Toen ik zag hoeveel ik aan het verliezen was, had ik binnen een week een offerte. De installatie ging in een dag.',
      rating: 5,
    },
    {
      naam: 'Sophie Jansen',
      plaats: 'Eindhoven',
      tekst: 'De financiering via het Warmtefonds maakt het heel toegankelijk. Mijn maandlast zijn lager dan wat ik eerder verloor aan terugleververgoeding.',
      rating: 5,
    },
    {
      naam: 'Thomas Bakker',
      plaats: 'Amsterdam',
      tekst: 'Simpel geïnstalleerd, werkt perfect. \'s Avonds gebruik ik bijna geen stroom van het net meer. De investering had zich binnen 6 jaar terugverdiend.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-emerald-700 mb-1">2.847</div>
            <p className="text-sm text-gray-600">Geplaatste batterijen</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-emerald-700 mb-1">4.8/5</div>
            <p className="text-sm text-gray-600">Klanttevredenheid</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-emerald-700 mb-1">€1.150</div>
            <p className="text-sm text-gray-600">Gemiddelde besparing/jaar</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
            <div className="text-3xl font-bold text-emerald-700 mb-1">6 jaar</div>
            <p className="text-sm text-gray-600">Terugverdiend</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Wat klanten zeggen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">"{t.tekst}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">
                  {t.naam.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.naam}</p>
                  <p className="text-xs text-gray-500">{t.plaats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
