export default function HowItWorks() {
  const stappen = [
    { nummer: '01', titel: 'Vul je adres in', beschrijving: 'Postcode en huisnummer. We schatten je opbrengst op basis van je locatie.' },
    { nummer: '02', titel: 'Geef je panelen op', beschrijving: 'Aantal panelen en jaarproductie. Wij helpen je als je het niet weet.' },
    { nummer: '03', titel: 'Ontvang je offerte', beschrijving: 'Binnen 24 uur een vrijblijvende offerte op maat.' },
  ]

  return (
    <section className="py-24 bg-[#f6f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-3">Hoe het werkt</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#061b31] leading-[1.1] mb-6 tracking-tight">
            Drie stappen naar je offerte
          </h2>
        </div>

        {/* Horizontal steps - clean, no cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {stappen.map((stap) => (
            <div key={stap.nummer}>
              <div className="text-emerald-600 font-light text-sm mb-2">{stap.nummer}</div>
              <h3 className="text-xl font-light text-[#061b31] mb-2">{stap.titel}</h3>
              <p className="text-sm text-[#64748d]">{stap.beschrijving}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#64748d]">
            Gratis • Vrijblijvend • Binnen 24 uur in je mailbox
          </p>
        </div>
      </div>
    </section>
  )
}
