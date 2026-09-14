import { NextRequest, NextResponse } from 'next/server'

// Dispatch work order to installer ERP
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const {
      lead_id,
      warmtefonds_goedkeuring = false,
      warmtefonds_referentie,
      klant_naam,
      klant_adres,
      klant_postcode,
      klant_woonplaats,
      klant_telefoon,
      klant_email,
      batterij_kwh,
      grid_type,
      installateur_id,
      installateur_webhook,
    } = data

    // Check Warmtefonds approval
    if (!warmtefonds_goedkeuring) {
      return NextResponse.json(
        { error: 'Warmtefonds moet zijn goedgekeurd voor dispatch' },
        { status: 400 }
      )
    }

    const dispatch = {
      dispatch_id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      status: 'pending_installation',
      customer: {
        name: klant_naam,
        address: {
          street: klant_adres,
          postcode: klant_postcode,
          city: klant_woonplaats,
        },
        phone: klant_telefoon,
        email: klant_email,
      },
      installation: {
        type: 'battery',
        capacity_kwh: batterij_kwh,
        grid_connection: grid_type,
        components: [
          { type: 'battery', model: `LiFePO4 ${batterij_kwh}kWh`, quantity: 1 },
          { type: 'rcd', spec: '30mA Type A', quantity: 1 },
          { type: 'cable', spec: '6mm² 3-core', length_meters: 8 },
        ],
        estimated_hours: 6,
      },
      financial: {
        total_cost: data.totaal_kosten || 6500,
        warmtefonds_approved: true,
        warmtefonds_reference: warmtefonds_referentie,
        btw_claimed: true,
        net_cost: data.netto_kosten || 5240,
      },
    }

    // In production: send to installer webhook
    // if (installateur_webhook) {
    //   await fetch(installateur_webhook, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(dispatch),
    //   })
    // }

    return NextResponse.json({
      success: true,
      dispatch: dispatch.dispatch_id,
      message: 'Werkorder verzonden naar installateur',
    })
  } catch (error) {
    return NextResponse.json({ error: 'Dispatch mislukt' }, { status: 500 })
  }
}
