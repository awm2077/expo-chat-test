import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nnlrultehibjzttfzmes.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ubHJ1bHRlaGlianp0dGZ6bWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMzc1NzAsImV4cCI6MjA2MDgxMzU3MH0.bNxXENOo2y4SCC15TFRC_lZGTK-RU7XpPAc6fD2bQww";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
