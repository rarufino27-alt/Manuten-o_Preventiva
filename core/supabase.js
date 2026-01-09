/* ================= SUPABASE CONFIG GLOBAL ================= */

// 🔒 SUPABASE FIXO (RF DRIVER)
const SUPABASE_URL = "https://msnqiiwcityikslikbow.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zbnFpaXdjaXR5aWtzbGlrYm93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3MDM5OTgsImV4cCI6MjA4MzI3OTk5OH0.0KyaSuL5At4_Cfa4TOM7kvvkVYv-gmR2sb7vX6VHkaU";

// 🧠 GRUPO FIXO (RF Driver)
const GRUPO_ID_FIXO = "f5b2eec4-f957-4648-8e4e-f5642159dd8c";

// Cliente Supabase (a lib vem do HTML)
const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

/* ================= HELPERS ================= */

// Retorna grupo atual
function getGrupoId(){
  return GRUPO_ID_FIXO;
}

// Monta payload padrão de usuário
function montarUsuarioBase(dados){
  return {
    ...dados,
    grupo_id: GRUPO_ID_FIXO,
    ativo: true
  };
}
