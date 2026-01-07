// core/auth.js

const SUPABASE_URL = "SUA_URL";
const SUPABASE_KEY = "SUA_CHAVE";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

/**
 * Valida se o usuário salvo no dispositivo
 * ainda está ativo no sistema
 */
async function validarUsuarioAtivo(){
  const usuarioLocal = JSON.parse(localStorage.getItem("usuarioRF"));

  if(!usuarioLocal){
    window.location.href = "cadastro.html";
    return;
  }

  let query = supabaseClient.from("usuarios").select("*").eq("ativo", true);

  if(usuarioLocal.tipo === "motorista"){
    query = query.eq("cpf", usuarioLocal.cpf);
  }else{
    query = query.eq("telefone", usuarioLocal.telefone);
  }

  const { data, error } = await query.single();

  if(error || !data){
    alert("Acesso bloqueado. Entre em contato com o suporte.");
    localStorage.removeItem("usuarioRF");
    window.location.href = "cadastro.html";
    return;
  }

  // tudo certo, usuário válido
  return true;
}
