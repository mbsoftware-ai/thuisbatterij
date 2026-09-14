export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">ThuisBatterij.nl</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Het platform voor huiseigenaren die slim willen besparen op hun energiekosten na het stoppen van de salderingsregeling.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Informatie</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#probleem" className="hover:text-emerald-400 transition-colors">Salderingsregeling</a></li>
              <li><a href="#voordelen" className="hover:text-emerald-400 transition-colors">Voordelen thuisbatterij</a></li>
              <li><a href="#rekenmodule" className="hover:text-emerald-400 transition-colors">Bereken je besparing</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Veelgestelde vragen</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Subsidies</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Warmtefonds lening</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Btw-teruggave</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">SPRILA-regeling</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@thuisbatterij.nl
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +31 6 12 34 56 78
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} ThuisBatterij.nl - Alle rechten voorbehouden</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
