import { NextRequest, NextResponse } from 'next/server'

// Generate offer PDF content (HTML that can be printed to PDF)
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const {
      lead_id,
      naam,
      adres,
      postcode,
      woonplaats,
      batterij_kwh = 10,
      batterij_prijs = 6000,
      warmtefonds_lening = 6000,
      btw_teruggave = 1260,
      maandlasten = 50,
    } = data

    const offerte = {
      referentie: `TB-${lead_id?.slice(0, 8) || 'XXXX'}-${Date.now().toString(36).toUpperCase()}`,
      datum: new Date().toLocaleDateString('nl-NL'),
      klant: {
        naam,
        adres,
        postcode,
        woonplaats,
      },
      product: {
        type: 'LiFePO4 Thuisbatterij',
        capaciteit: `${batterij_kwh} kWh`,
        bruikbaar: `${batterij_kwh * 0.8} kWh`,
        garantie: '10 jaar',
      },
      prijzen: {
        batterij: batterij_prijs,
        installatie: 500,
        totaal: batterij_prijs + 500,
      },
      financiering: {
        warmtefonds_lening,
        warmtefonds_rente: '0%',
        warmtefonds_looptijd: '10 jaar',
        warmtefonds_maandbedrag: maandlasten,
        btw_teruggave,
        netto_kosten: batterij_prijs + 500 - btw_teruggave,
      },
      warmtefonds_formulier: {
        benodigd: [
          'Ingevuld aanvraagformulier',
          'Recent aangifte inkomstenbelasting',
          'Kadaster extract',
          'Energielabel (optioneel)',
        ],
        status: 'Wacht op toekenning',
      },
    }

    return NextResponse.json(offerte)
  } catch (error) {
    return NextResponse.json({ error: 'Offerte generatie mislukt' }, { status: 500 })
  }
}
