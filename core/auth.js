// core/auth.js

// ================== SUPABASE CONFIG ==================
// Substitua pelos dados reais do seu projeto Supabase
const SUPABASE_URL = "https://SEU-PROJETO.supabase.co";
const SUPABASE_KEY = "SUA_CHAVE_PUBLICA_ANON";
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
  const usuarioLocal = JSON.parse(localStorage.getItem("usuarioRF"));

  // Não existe usuário no dispositivo
  if(!usuarioLocal){
    window.location.href = "cadastro.html";
    return false;
  }

  let query = supabaseClient
    .from("usuarios")
    .select("id, ativo")
    .eq("ativo", true);

  // Motorista valida por CPF
  if(usuarioLocal.tipo === "motorista"){
    query = query.eq("cpf", usuarioLocal.cpf);
  }
  // Passageiro valida por telefone
  else{
    query = query.eq("telefone", usuarioLocal.telefone);
  }

  const { data, error } = await query.single();

  // Usuário bloqueado, excluído ou inválido
  if(error || !data){
    alert("Acesso bloqueado. Entre em contato com o suporte.");
    localStorage.removeItem("usuarioRF");
    window.location.href = "cadastro.html";
    return false;
  }

  // Usuário válido
  return true;
}
