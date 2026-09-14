import { NextRequest, NextResponse } from 'next/server'

// In production, this would use vision AI to analyze photos
// For now, it returns a structured audit based on manual input
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { lead_id, photos, manual_assessment } = data

    // Mock audit result (in production: call vision_analyze tool)
    const audit = {
      audit_id: crypto.randomUUID(),
      lead_id,
      timestamp: new Date().toISOString(),
      grid_connection: {
        type: manual_assessment?.grid_connection || '3-phase',
        amperage: manual_assessment?.grid_amperage || 25,
        compatible: true,
      },
      module_space: {
        total_positions: 24,
        free_positions: manual_assessment?.free_positions || 8,
        sufficient: (manual_assessment?.free_positions || 8) >= 4,
        required: 4,
      },
      location: {
        type: manual_assessment?.location_type || 'garage',
        approved: !['hallway', 'bedroom', 'basement'].includes(
          manual_assessment?.location_type || 'garage'
        ),
        reason: 'Geschikte locatie voor installatie',
        ventilation_adequate: true,
      },
      cable_route: {
        distance_meters: manual_assessment?.cable_distance || 5,
        crosses_escape_route: false,
        approved: true,
      },
      fire_safety: {
        rcd_present: true,
        accessible_main_switch: true,
        clear_labeling: true,
        approved: true,
      },
      overall_approved: true,
      recommendations: [
        'Installatie kan direct worden gepland',
        'Geen aanpassingen aan meterkast nodig',
      ],
      required_actions: [],
    }

    return NextResponse.json(audit)
  } catch (error) {
    return NextResponse.json({ error: 'Audit failed' }, { status: 500 })
  }
}
