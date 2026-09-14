#!/usr/bin/env python3
import json
import urllib.request
import urllib.error

import os

API_TOKEN = os.environ.get("SUPABASE_MANAGEMENT_TOKEN", "")

if not API_TOKEN:
    print("ERROR: Set SUPABASE_MANAGEMENT_TOKEN environment variable")
    exit(1)

def run_sql(sql):
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
        return {"error": f"HTTP {e.code}: {e.read().decode('utf-8')}"}
    except Exception as e:
        return {"error": str(e)}

# Add missing columns to leads table
statements = [
    "ALTER TABLE leads ADD COLUMN IF NOT EXISTS huisnummertoevoeging VARCHAR(10) DEFAULT ''",
    "ALTER TABLE leads ADD COLUMN IF NOT EXISTS woningtype VARCHAR(50)",
    "ALTER TABLE leads ADD COLUMN IF NOT EXISTS oppervlakte INTEGER",
    "ALTER TABLE leads ADD COLUMN IF NOT EXISTS jaarinstallatie INTEGER",
    "ALTER TABLE leads ADD COLUMN IF NOT EXISTS aantal_panelen INTEGER DEFAULT 0",
    "ALTER TABLE leads ADD COLUMN IF NOT EXISTS ip_address VARCHAR(45)",
    "ALTER TABLE leads ADD COLUMN IF NOT EXISTS user_agent TEXT",
    "ALTER TABLE leads ADD COLUMN IF NOT EXISTS utm_source VARCHAR(100)",
    "ALTER TABLE leads ADD COLUMN IF NOT EXISTS utm_medium VARCHAR(100)",
    "ALTER TABLE leads ADD COLUMN IF NOT EXISTS utm_campaign VARCHAR(100)",
]

print("🔧 Adding missing columns...")
for i, sql in enumerate(statements, 1):
    result = run_sql(sql)
    if "error" in result:
        print(f"❌ {i}: {result['error'][:100]}")
    else:
        print(f"✅ {i}: OK")
print("Done!")
