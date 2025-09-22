import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ajvdkcvaecqczcbvwgdn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdmRrY3ZhZWNxY3pjYnZ3Z2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NzI0OTcsImV4cCI6MjA3NDE0ODQ5N30.-zxb7V8y3AvU7p4hD6Y5LqvXYRJDuDDpEleacnR-i0U"; // or service_role key for admin actions
export const supabase = createClient(supabaseUrl, supabaseKey);
