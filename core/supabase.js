/* ===============================
   SUPABASE CENTRAL CONFIG
   RF DRIVER / MULTI-GRUPOS
================================ */

const SUPABASE_URL = "https://msnqiiwcityikslikbow.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zbnFpaXdjaXR5aWtzbGlrYm93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3MDM5OTgsImV4cCI6MjA4MzI3OTk5OH0.0KyaSuL5At4_Cfa4TOM7kvvkVYv-gmR2sb7vX6VHkaU"; // use a anon pública

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

/* ===============================
   GRUPO ATUAL (PADRÃO)
   RF DRIVER
================================ */

const GRUPO_ATUAL = "rf_driver";

/* ===============================
   EXPORT GLOBAL
================================ */
window.supabaseClient = supabaseClient;
window.GRUPO_ATUAL = GRUPO_ATUAL;
