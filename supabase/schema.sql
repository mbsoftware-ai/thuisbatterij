-- Database Schema for Battery Platform
-- Run this in Supabase SQL Editor

-- Leads table
CREATE TABLE IF NOT EXISTS leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Step 1: Address
    postcode VARCHAR(7) NOT NULL,
    huisnummer VARCHAR(10) NOT NULL,
    huisletter VARCHAR(5) DEFAULT '',
    huisnummertoevoeging VARCHAR(10) DEFAULT '',
    straat VARCHAR(255),
    woonplaats VARCHAR(255),
    bouwjaar INTEGER,
    woningtype VARCHAR(50),
    oppervlakte INTEGER,
    
    -- Step 2: Solar & Energy
    heeft_zonnepanelen BOOLEAN DEFAULT FALSE,
    jaarproductie_kwh INTEGER DEFAULT 0,
    aantal_panelen INTEGER DEFAULT 0,
    jaarinstallatie INTEGER,
    energieleverancier VARCHAR(100),
    huidig_verbruik_kwh INTEGER DEFAULT 3500,
    
    -- Step 3: Contact
    naam VARCHAR(255),
    email VARCHAR(255),
    telefoon VARCHAR(20),
    
    -- Calculated fields
    salderingsverlies_jaar DECIMAL(10,2),
    aanbevolen_batterij_kwh INTEGER,
    geschatte_besparing_jaar DECIMAL(10,2),
    
    -- Status
    status VARCHAR(50) DEFAULT 'lead', -- lead, qualified, photos_uploaded, audit_complete, offer_sent, warmtefonds_applied, warmtefonds_approved, dispatched, scheduled, installed, completed
    
    -- Metadata
    ip_address VARCHAR(45),
    user_agent TEXT,
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100)
);

-- Audits table (meterkast photos)
CREATE TABLE IF NOT EXISTS audits (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Photos
    photo_meterkast_url TEXT,
    photo_meter_url TEXT,
    photo_opstelplek_url TEXT,
    
    -- Analysis results
    grid_connection_type VARCHAR(20), -- 1-phase, 3-phase
    grid_amperage INTEGER,
    module_space_total INTEGER,
    module_space_free INTEGER,
    module_space_sufficient BOOLEAN,
    location_type VARCHAR(50),
    location_approved BOOLEAN,
    ventilation_adequate BOOLEAN,
    cable_route_distance_meters INTEGER,
    cable_route_approved BOOLEAN,
    rcd_present BOOLEAN,
    main_switch_accessible BOOLEAN,
    
    -- Overall
    overall_approved BOOLEAN DEFAULT FALSE,
    rejection_reason TEXT,
    recommendations JSONB
);

-- Documents table (generated PDFs, forms)
CREATE TABLE IF NOT EXISTS documents (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    document_type VARCHAR(50), -- offer, warmtefonds_application, installation_dossier, btw_declaration
    file_url TEXT,
    file_name VARCHAR(255),
    file_size_bytes INTEGER,
    status VARCHAR(50) DEFAULT 'generated' -- generated, sent, signed, approved
);

-- Installations table (dispatched work orders)
CREATE TABLE IF NOT EXISTS installations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    dispatched_at TIMESTAMP WITH TIME ZONE,
    scheduled_date DATE,
    completed_at TIMESTAMP WITH TIME ZONE,
    
    installer_id UUID,
    installer_reference VARCHAR(100),
    
    battery_capacity_kwh INTEGER,
    grid_connection_type VARCHAR(20),
    
    total_cost DECIMAL(10,2),
    warmtefonds_loan DECIMAL(10,2),
    btw_teruggave DECIMAL(10,2),
    net_cost DECIMAL(10,2),
    
    status VARCHAR(50) DEFAULT 'pending', -- pending, scheduled, in_progress, completed, cancelled
    
    notes TEXT
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_leads_postcode ON leads(postcode);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audits_lead_id ON audits(lead_id);
CREATE INDEX IF NOT EXISTS idx_documents_lead_id ON documents(lead_id);
CREATE INDEX IF NOT EXISTS idx_installations_lead_id ON installations(lead_id);

-- Enable Row Level Security (optional - disable for MVP)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE audits ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE installations ENABLE ROW LEVEL SECURITY;

-- Policies for anon access (MVP only - tighten later)
CREATE POLICY "Allow all for anon" ON leads FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for anon" ON audits FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for anon" ON documents FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for anon" ON installations FOR ALL USING (true) WITH CHECK (true);
