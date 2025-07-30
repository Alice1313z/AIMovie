import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.https://dhygslctjcfejpvaewig.supabase.co
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoeWdzbGN0amNmZWpwdmFld2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NDEwMTEsImV4cCI6MjA2OTQxNzAxMX0.O4zzYQlOmemc7hWVc8XNSPQbHwF6na6gKdLDe0M2q1A

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
