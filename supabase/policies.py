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

statements = [
    # Rls enable
    "ALTER TABLE leads ENABLE ROW LEVEL SECURITY",
    "ALTER TABLE audits ENABLE ROW LEVEL SECURITY",
    "ALTER TABLE documents ENABLE ROW LEVEL SECURITY",
    "ALTER TABLE installations ENABLE ROW LEVEL SECURITY",
    
    # Policies
    'CREATE POLICY "anon_all_leads" ON leads FOR ALL USING (true) WITH CHECK (true)',
    'CREATE POLICY "anon_all_audits" ON audits FOR ALL USING (true) WITH CHECK (true)',
    'CREATE POLICY "anon_all_documents" ON documents FOR ALL USING (true) WITH CHECK (true)',
    'CREATE POLICY "anon_all_installations" ON installations FOR ALL USING (true) WITH CHECK (true)',
    
    # Indexes
    "CREATE INDEX IF NOT EXISTS idx_leads_postcode ON leads(postcode)",
    "CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status)",
    "CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC)",
    "CREATE INDEX IF NOT EXISTS idx_audits_lead_id ON audits(lead_id)",
    "CREATE INDEX IF NOT EXISTS idx_documents_lead_id ON documents(lead_id)",
    "CREATE INDEX IF NOT EXISTS idx_installations_lead_id ON installations(lead_id)",
]

print("🔐 Adding RLS policies and indexes...")
for i, sql in enumerate(statements, 1):
    result = run_sql(sql)
    if "error" in result:
        print(f"❌ {i}: {result['error'][:100]}")
    else:
        print(f"✅ {i}: OK")
print("Done!")
