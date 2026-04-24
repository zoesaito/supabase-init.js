// This connects your Readymag site to your database
const supabaseUrl = 'https://zhpeszbyhcrbrncsfmhb.supabase.co';
const supabaseKey = 'PASTE_YOUR_LONG_ANON_KEY_HERE';

// This initializes the connection
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

console.log("Archive Database: Connected Successfully.");
