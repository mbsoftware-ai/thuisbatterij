import { NextRequest, NextResponse } from 'next/server'
import PDFDocument from 'pdfkit'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const {
      lead_id,
      naam,
      adres,
      postcode,
      woonplaats,
      email,
      telefoon,
      batterij_kwh = 10,
      batterij_prijs = 6000,
      installatie_prijs = 500,
      warmtefonds_lening = 6000,
      warmtefonds_rente = 0,
      warmtefonds_looptijd = 10,
      btw_teruggave = 1260,
    } = data

    const totaal = batterij_prijs + installatie_prijs
    const netto = totaal - btw_teruggave
    const maandbedrag = Math.round((warmtefonds_lening / (warmtefonds_looptijd * 12)) * (1 + warmtefonds_rente / 100))

    // Generate PDF
    const doc = new PDFDocument({ size: 'A4', margin: 50 })
    const chunks: Buffer[] = []
    
    doc.on('data', (chunk: Buffer) => chunks.push(chunk))
    
    const pdfPromise = new Promise<Buffer>((resolve) => {
      doc.on('end', () => resolve(Buffer.concat(chunks)))
    })

    // Header
    doc.fontSize(25).fillColor('#10b981').text('ThuisBatterij', 50, 50)
    doc.fontSize(10).fillColor('#666').text('Energiebesparing na 2027', 50, 80)
    
    // Offerte details
    doc.fontSize(18).fillColor('#000').text('Offerte', 50, 120)
    doc.moveTo(50, 145).lineTo(550, 145).stroke()
    
    doc.fontSize(11).fillColor('#333')
    doc.text(`Referentie: TB-${lead_id?.slice(0, 8) || 'XXXX'}-${Date.now().toString(36).toUpperCase()}`, 50, 160)
    doc.text(`Datum: ${new Date().toLocaleDateString('nl-NL')}`, 50, 180)
    
    // Klantgegevens
    doc.fontSize(14).fillColor('#000').text('Klantgegevens', 50, 220)
    doc.moveTo(50, 240).lineTo(550, 240).stroke()
    
    doc.fontSize(11).fillColor('#333')
    doc.text(`Naam: ${naam}`, 50, 260)
    doc.text(`Adres: ${adres}, ${postcode} ${woonplaats}`, 50, 280)
    doc.text(`E-mail: ${email}`, 50, 300)
    doc.text(`Telefoon: ${telefoon}`, 50, 320)
    
    // Product
    doc.fontSize(14).fillColor('#000').text('Product', 50, 360)
    doc.moveTo(50, 380).lineTo(550, 380).stroke()
    
    doc.fontSize(11).fillColor('#333')
    doc.text(`LiFePO4 Thuisbatterij ${batterij_kwh} kWh`, 50, 400)
    doc.text(`Bruikbare capaciteit: ${batterij_kwh * 0.8} kWh`, 50, 420)
    doc.text(`Garantie: 10 jaar`, 50, 440)
    
    // Prijzen
    doc.fontSize(14).fillColor('#000').text('Prijzen', 50, 480)
    doc.moveTo(50, 500).lineTo(550, 500).stroke()
    
    doc.fontSize(11).fillColor('#333')
    doc.text(`Batterij: € ${batterij_prijs.toLocaleString('nl-NL')}`, 50, 520)
    doc.text(`Installatie: € ${installatie_prijs.toLocaleString('nl-NL')}`, 50, 540)
    doc.fontSize(12).fillColor('#000')
    doc.text(`Totaal: € ${totaal.toLocaleString('nl-NL')}`, 50, 570)
    
    // Financiering
    doc.fontSize(14).fillColor('#000').text('Financiering', 50, 610)
    doc.moveTo(50, 630).lineTo(550, 630).stroke()
    
    doc.fontSize(11).fillColor('#333')
    doc.text(`Warmtefonds lening: € ${warmtefonds_lening.toLocaleString('nl-NL')}`, 50, 650)
    doc.text(`Rente: ${warmtefonds_rente}% | Looptijd: ${warmtefonds_looptijd} jaar`, 50, 670)
    doc.text(`Maandbedrag: € ${maandbedrag}`, 50, 690)
    doc.text(`Btw-teruggave: € ${btw_teruggave.toLocaleString('nl-NL')}`, 50, 710)
    doc.fontSize(12).fillColor('#10b981')
    doc.text(`Netto kosten: € ${netto.toLocaleString('nl-NL')}`, 50, 740)
    doc.fontSize(9).fillColor('#666')
    doc.text(`(Effectief maandbedrag na btw-teruggave: € ${Math.round(netto / (warmtefonds_looptijd * 12))})`, 50, 760)
    
    // Warmtefonds formulier info
    doc.addPage()
    doc.fontSize(18).fillColor('#000').text('Warmtefonds Aanvraagformulier', 50, 50)
    doc.moveTo(50, 75).lineTo(550, 75).stroke()
    
    doc.fontSize(11).fillColor('#333')
    doc.text('Benodigde documenten:', 50, 95)
    doc.text('□ Ingevuld aanvraagformulier (zie bijlage)', 50, 120)
    doc.text('□ Recent aangifte inkomstenbelasting', 50, 140)
    doc.text('□ Kadaster extract', 50, 160)
    doc.text('□ Energielabel (optioneel)', 50, 180)
    
    doc.fontSize(12).fillColor('#000').text('Status: Wacht op toekenning', 50, 220)
    doc.fontSize(10).fillColor('#666').text('Let op: De lening moet zijn toegekend vóór de installatie plaatsvindt.', 50, 245)
    
    // Voorwaarden
    doc.fontSize(11).fillColor('#000').text('Algemene Voorwaarden', 50, 290)
    doc.moveTo(50, 310).lineTo(550, 310).stroke()
    doc.fontSize(9).fillColor('#666')
    doc.text('Deze offerte is 30 dagen geldig. Installatie vindt plaats binnen 4 weken na goedkeuring warmtefonds.', 50, 330, { width: 500 })
    
    // Handtekening
    doc.fontSize(11).fillColor('#000').text('Acceptatie:', 50, 500)
    doc.text(`Naam: ${naam}`, 50, 530)
    doc.text(`Datum: ${new Date().toLocaleDateString('nl-NL')}`, 50, 550)
    doc.text('Handtekening: _________________', 50, 580)
    
    doc.end()
    
    const pdfBuffer = await pdfPromise
    
    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=offerte-${lead_id?.slice(0, 8) || 'xxxx'}.pdf`,
      },
    })
  } catch (error) {
    console.error('PDF generation error:', error)
    return NextResponse.json({ error: 'PDF generation failed' }, { status: 500 })
  }
}
