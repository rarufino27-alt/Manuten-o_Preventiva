// core/auth.js

// ================== SUPABASE CONFIG ==================
// Substitua pelos dados reais do seu projeto Supabase
const SUPABASE_URL = "https://SEU-PROJETO.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zbnFpaXdjaXR5aWtzbGlrYm93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3MDM5OTgsImV4cCI6MjA4MzI3OTk5OH0.0KyaSuL5At4_Cfa4TOM7kvvkVYv-gmR2sb7vX6VHkaU";
// =====================================================

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

/**
 * Valida se o usuário salvo no dispositivo
 * ainda está ativo no sistema (bloqueio automático)
 */
async function validarUsuarioAtivo(){
  const usuario = JSON.parse(localStorage.getItem("usuarioRF"));

  if(!usuario){
    window.location.href = "cadastro.html";
    return false;
  }

  // 🔐 MOTORISTA: valida SOMENTE local
  if(usuario.tipo === "motorista"){
    return true;
  }

  // 👤 PASSAGEIRO: valida via Supabase
  const { data, error } = await supabaseClient
    .from("usuarios")
    .select("*")
    .eq("telefone", usuario.telefone)
    .eq("ativo", true)
    .single();

  if(error || !data){
    alert("Acesso bloqueado. Entre em contato com o suporte.");
    localStorage.removeItem("usuarioRF");
    window.location.href = "cadastro.html";
    return false;
  }

  return true;
}

