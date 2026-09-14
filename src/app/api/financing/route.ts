import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const {
      battery_cost = 6000,
      verzamelinkomen = 55000,
      kor_used_3yr = false,
      property_type = 'residential',
      company_type = 'mkb',
    } = data

    // Warmtefonds
    const loanAmount = Math.min(battery_cost, 8500)
    const interestRate = verzamelinkomen <= 60000 ? 0 : 2.5
    const termYears = battery_cost > 0.33 * 25000 ? 15 : 10
    const monthlyPayment = Math.round((loanAmount / (termYears * 12)) * (1 + interestRate / 100))

    const warmtefonds = {
      eligible: true,
      loan_amount: loanAmount,
      interest_rate: interestRate,
      term_years: termYears,
      pre_approval_required: true,
      monthly_payment: monthlyPayment,
    }

    // Btw
    const btw = {
      eligible: property_type === 'residential',
      claim_amount: Math.round(battery_cost * 0.21),
      claim_on: kor_used_3yr ? 'fiscale_partner' : 'owner',
      kor_block: kor_used_3yr,
      dynamic_contract_required: true,
    }

    // SPRILA
    const sprlaAmount = property_type === 'commercial' 
      ? Math.min(battery_cost / 1000, 1000) * (company_type === 'mkb' ? 85 : 60)
      : 0
    
    const sprla = {
      eligible: property_type === 'commercial',
      amount: sprlaAmount,
    }

    const totalSubsidies = btw.claim_amount + sprlaAmount
    const netCost = battery_cost - totalSubsidies

    return NextResponse.json({
      warmtefonds,
      btw,
      sprla,
      total: {
        gross_cost: battery_cost,
        subsidies: totalSubsidies,
        net_cost: netCost,
        monthly_cost: Math.round((netCost / (termYears * 12)) * 100) / 100,
        break_even_years: Math.round((netCost / (battery_cost * 0.15)) * 10) / 10,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
