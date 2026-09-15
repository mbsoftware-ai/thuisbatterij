export default function CtaSection() {
  return (
    <section className="py-24 bg-emerald-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-600"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
          Klaar om te besparen?
        </h2>
        <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
          Bereken in 30 seconden hoveel je verliest door het stoppen van de salderingsregeling. 
          Vrijblijvend en vrijblijvend.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#rekenmodule" className="bg-white text-emerald-700 font-semibold px-8 py-4 rounded-sm text-lg hover:bg-emerald-50 transition-colors shadow-lg inline-flex items-center justify-center gap-2">
            Bereken je besparing
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#probleem" className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-sm text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
            Meer informatie
          </a>
        </div>
      </div>
    </section>
  )
}
