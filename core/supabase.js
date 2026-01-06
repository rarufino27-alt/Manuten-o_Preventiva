<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
/* =========================
   CONFIGURAÇÃO SUPABASE
========================= */
const SUPABASE_URL = "https://msnqiiwcityikslikbow.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zbnFpaXdjaXR5aWtzbGlrYm93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3MDM5OTgsImV4cCI6MjA4MzI3OTk5OH0.0KyaSuL5At4_Cfa4TOM7kvvkVYv-gmR2sb7vX6VHkaU";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

/* =========================
   FUNÇÕES DE USUÁRIO
========================= */

/**
 * Salvar novo usuário
 * dados = {
 *   tipo: "motorista" | "passageiro",
 *   nome: "",
 *   telefone: "",
 *   placa?: "",
 *   modelo?: ""
 * }
 */
async function salvarUsuario(dados) {
  const { error } = await supabaseClient
    .from("usuarios")
    .insert([{
      ...dados,
      ativo: true
    }]);

  if (error) {
    console.error("Erro ao salvar usuário:", error);
    return { ok: false, erro: error.message };
  }

  return { ok: true };
}

/**
 * Login por telefone
 */
async function buscarUsuarioPorTelefone(telefone) {
  const { data, error } = await supabaseClient
    .from("usuarios")
    .select("*")
    .eq("telefone", telefone)
    .eq("ativo", true)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

/**
 * Bloqueio futuro (admin)
 */
async function bloquearUsuario(id) {
  const { error } = await supabaseClient
    .from("usuarios")
    .update({ ativo: false })
    .eq("id", id);

  return !error;
}
</script>
