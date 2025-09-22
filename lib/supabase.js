import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY"; // or service_role key for admin actions
export const supabase = createClient(supabaseUrl, supabaseKey);
