import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const supabase = createServerClient()
    
    // Calculate battery recommendation
    const jaarproductie = data.jaarproductie_kwh || 0
    const verbruik = data.huidig_verbruik_kwh || 3500
    const zonnepanelen = data.heeft_zonnepanelen !== false
    
    let salderingsverlies = 0
    let aanbevolen_batterij = 0
    let geschatte_besparing = 0
    
    if (zonnepanelen && jaarproductie > 0) {
      const currentExport = jaarproductie - Math.min(jaarproductie * 0.4, verbruik * 0.3)
      const lossPerKwh = 0.35 - 0.06 + 0.02
      salderingsverlies = Math.round(currentExport * lossPerKwh)
      
      const usableNeeded = (currentExport / 365) * 0.8
      const grossCapacity = usableNeeded / 0.8
      if (grossCapacity > 10) aanbevolen_batterij = 15
      else if (grossCapacity > 5) aanbevolen_batterij = 10
      else aanbevolen_batterij = 5
      
      geschatte_besparing = Math.round(currentExport * 0.7 * lossPerKwh)
    }

    // Save to Supabase
    const { data: lead, error } = await supabase.from('leads').insert({
      postcode: data.postcode,
      huisnummer: data.huisnummer,
      huisletter: data.huisletter || '',
      heeft_zonnepanelen: zonnepanelen,
      jaarproductie_kwh: jaarproductie,
      aantal_panelen: data.aantal_panelen || 0,
      energieleverancier: data.energieleverancier,
      huidig_verbruik_kwh: verbruik,
      naam: data.naam,
      email: data.email,
      telefoon: data.telefoon,
      salderingsverlies_jaar: salderingsverlies,
      aanbevolen_batterij_kwh: aanbevolen_batterij,
      geschatte_besparing_jaar: geschatte_besparing,
      status: 'lead',
    }).select().single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      lead_id: lead.id,
      message: 'Lead saved to database',
      calculated: { annual_loss: salderingsverlies, recommended_capacity: aanbevolen_batterij }
    })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }
}
