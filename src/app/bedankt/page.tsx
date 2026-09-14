'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const FOTOMOGELIJKHEDEN = [
  {
    id: 'meterkast',
    titel: 'Geopende meterkast',
    beschrijving: 'Foto van je meterkast met de deur open. Alle groepen en de hoofdschakelaar moeten zichtbaar zijn.',
    icone: '🔌',
  },
  {
    id: 'meter',
    titel: 'Slimme meter',
    beschrijving: 'Dichte foto van je elektriciteitsmeter (de slimme meter). Het display moet leesbaar zijn.',
    icone: '⚡',
  },
  {
    id: 'opstelplek',
    titel: 'Opstelplek batterij',
    beschrijving: 'Foto van de plek waar de batterij geïnstalleert kan worden (bijv. garage, technische ruimte).',
    icone: '🏠',
  },
]

function FotoUploadCard({ foto, isUploaded, onUpload }: { foto: typeof FOTOMOGELIJKHEDEN[0], isUploaded: boolean, onUpload: (file: File) => void }) {
  return (
    <div className={`border-2 rounded-xl p-6 text-center transition-all ${
      isUploaded 
        ? 'border-emerald-500 bg-emerald-50' 
        : 'border-dashed border-gray-300 bg-gray-50'
    }`}>
      <div className="text-4xl mb-3">{foto.icone}</div>
      <h3 className="font-semibold text-gray-900 mb-1">{foto.titel}</h3>
      <p className="text-sm text-gray-500 mb-4">{foto.beschrijving}</p>
      
      {isUploaded ? (
        <div className="text-emerald-600 text-sm font-medium">
          ✅ Geüpload
        </div>
      ) : (
        <label className="cursor-pointer inline-block">
          <span className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg">
            Kies foto
          </span>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) onUpload(file)
            }}
          />
        </label>
      )}
    </div>
  )
}

function BedanktContent() {
  const searchParams = useSearchParams()
  const leadId = searchParams.get('lead')
  const [fotoUrls, setFotoUrls] = useState<Record<string, string>>({})
  const [verzonden, setVerzonden] = useState(false)

  const handleFotoUpload = async (type: string, file: File) => {
    const fakeUrl = `https://storage.thuisbatterij.nl/${leadId}/${type}-${Date.now()}.jpg`
    setFotoUrls(prev => ({ ...prev, [type]: fakeUrl }))
  }

  const handleVerzend = async () => {
    setVerzonden(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <header className="container mx-auto px-4 py-6">
        <div className="text-2xl font-bold text-emerald-700">⚡ ThuisBatterij</div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Bedankt!</h1>
            <p className="text-lg text-gray-600 mb-4">
              Je aanvraag is succesvol ontvangen. We zijn je berekening aan het verwerken.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 inline-block">
              <p className="text-sm text-emerald-700">
                Referentie: <strong>{leadId?.slice(0, 8) || 'LADEN...'}</strong>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Stuur foto's van je meterkast
            </h2>
            <p className="text-gray-600 mb-6">
              Om je offerte te kunnen maken, hebben we 3 foto&apos;s nodig. 
              Dit helpt ons om te controleren of je meterkast geschikt is.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {FOTOMOGELIJKHEDEN.map((foto) => (
                <FotoUploadCard
                  key={foto.id}
                  foto={foto}
                  isUploaded={!!fotoUrls[foto.id]}
                  onUpload={(file) => handleFotoUpload(foto.id, file)}
                />
              ))}
            </div>

            <button
              onClick={handleVerzend}
              disabled={Object.keys(fotoUrls).length < 3 || verzonden}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
                Object.keys(fotoUrls).length >= 3 && !verzonden
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {verzonden ? '✅ Verzonden!' : "Verstuur foto's"}
            </button>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <h3 className="font-semibold text-gray-900 mb-2">
              💬 Wil je de foto's via WhatsApp sturen?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Stuur een bericht naar <strong>+31 6 12 34 56 78</strong> met je referentie{' '}
              <strong>{leadId?.slice(0, 8) || 'LADEN...'}</strong>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function BedanktPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
    </div>}>
      <BedanktContent />
    </Suspense>
  )
}
