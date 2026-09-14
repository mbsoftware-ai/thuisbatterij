import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const {
      jaarproductie_kwh = 3000,
      huidig_verbruik_kwh = 3500,
      heeft_zonnepanelen = true,
    } = data

    if (!heeft_zonnepanelen) {
      return NextResponse.json({
        annual_loss: 0,
        daily_loss: 0,
        current_export_kWh: 0,
        recommended_capacity: 0,
        usable_capacity: 0,
        estimated_savings: 0,
        message: 'Geen zonnepanelen - geen salderingsverlies',
      })
    }

    // Calculate current export
    const selfConsumptionRate = 0.3
    const directUse = Math.min(jaarproductie_kwh * 0.4, huidig_verbruik_kwh * selfConsumptionRate)
    const currentExport = jaarproductie_kwh - directUse

    // Post-saldering rates
    const avgDeliveryRate = 0.35
    const avgFeedinRate = 0.06
    const feedinCosts = 0.02

    const lossPerKwh = avgDeliveryRate - avgFeedinRate + feedinCosts
    const annualLoss = currentExport * lossPerKwh

    // Battery sizing
    const usableNeeded = (currentExport / 365) * 0.8
    const grossCapacity = usableNeeded / 0.8

    let recommended = 5
    if (grossCapacity > 10) recommended = 15
    else if (grossCapacity > 5) recommended = 10

    const estimatedSavings = currentExport * 0.7 * lossPerKwh

    return NextResponse.json({
      annual_loss: Math.round(annualLoss),
      daily_loss: Math.round((annualLoss / 365) * 100) / 100,
      current_export_kWh: Math.round(currentExport),
      recommended_capacity: recommended,
      usable_capacity: Math.round(recommended * 0.8 * 10) / 10,
      estimated_savings: Math.round(estimatedSavings),
    })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
