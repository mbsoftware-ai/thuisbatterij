#!/usr/bin/env python3
import json
import urllib.request
import urllib.error

SUPABASE_URL = "https://uopmiazwczvalksodnhg.supabase.co"
import os

API_TOKEN = os.environ.get("SUPABASE_MANAGEMENT_TOKEN", "")

if not API_TOKEN:
    print("ERROR: Set SUPABASE_MANAGEMENT_TOKEN environment variable")
    exit(1)

def run_sql(sql):
    """Execute SQL via Supabase Management API"""
    url = f"https://api.supabase.com/v1/projects/uopmiazwczvalksodnhg/database/query"
    headers = {
        "Authorization": f"Bearer {API_TOKEN}",
        "Content-Type": "application/json"
    }
    data = json.dumps({"query": sql}).encode('utf-8')
    
    req = urllib.request.Request(url, data=data, headers=headers, method='POST')
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        body = e.read().decode('utf-8')
        return {"error": f"HTTP {e.code}: {body}"}
    except Exception as e:
        return {"error": str(e)}

# SQL statements to execute
statements = [
    """CREATE TABLE IF NOT EXISTS leads (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        postcode VARCHAR(7) NOT NULL,
        huisnummer VARCHAR(10) NOT NULL,
        huisletter VARCHAR(5) DEFAULT '',
        straat VARCHAR(255),
        woonplaats VARCHAR(255),
        bouwjaar INTEGER,
        heeft_zonnepanelen BOOLEAN DEFAULT FALSE,
        jaarproductie_kwh INTEGER DEFAULT 0,
        energieleverancier VARCHAR(100),
        huidig_verbruik_kwh INTEGER DEFAULT 3500,
        naam VARCHAR(255),
        email VARCHAR(255),
        telefoon VARCHAR(20),
        salderingsverlies_jaar DECIMAL(10,2),
        aanbevolen_batterij_kwh INTEGER,
        geschatte_besparing_jaar DECIMAL(10,2),
        status VARCHAR(50) DEFAULT 'lead'
    )""",
    
    """CREATE TABLE IF NOT EXISTS audits (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        photo_meterkast_url TEXT,
        photo_meter_url TEXT,
        photo_opstelplek_url TEXT,
        grid_connection_type VARCHAR(20),
        grid_amperage INTEGER,
        module_space_total INTEGER,
        module_space_free INTEGER,
        module_space_sufficient BOOLEAN,
        location_type VARCHAR(50),
        location_approved BOOLEAN,
        overall_approved BOOLEAN DEFAULT FALSE,
        rejection_reason TEXT,
        recommendations JSONB
    )""",
    
    """CREATE TABLE IF NOT EXISTS documents (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        document_type VARCHAR(50),
        file_url TEXT,
        file_name VARCHAR(255),
        status VARCHAR(50) DEFAULT 'generated'
    )""",
    
    """CREATE TABLE IF NOT EXISTS installations (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        dispatched_at TIMESTAMP WITH TIME ZONE,
        scheduled_date DATE,
        completed_at TIMESTAMP WITH TIME ZONE,
        installer_reference VARCHAR(100),
        battery_capacity_kwh INTEGER,
        grid_connection_type VARCHAR(20),
        total_cost DECIMAL(10,2),
        warmtefonds_loan DECIMAL(10,2),
        btw_teruggave DECIMAL(10,2),
        net_cost DECIMAL(10,2),
        status VARCHAR(50) DEFAULT 'pending',
        notes TEXT
    )""",
]

print("🚀 Deploying database schema...")
for i, sql in enumerate(statements, 1):
    result = run_sql(sql)
    if "error" in result:
        print(f"❌ Statement {i} failed: {result['error']}")
    else:
        print(f"✅ Statement {i} succeeded: {result}")

print("\nDone!")
