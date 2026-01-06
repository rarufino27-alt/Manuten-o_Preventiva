<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
/* =========================
   CONFIGURAÇÃO SUPABASE
========================= */
const SUPABASE_URL = "COLE_AQUI_SEU_PROJECT_URL";
const SUPABASE_KEY = "COLE_AQUI_SUA_ANON_PUBLIC_KEY";

const supabase = supabaseJs.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

/* =========================
   USUÁRIOS
========================= */
async function salvarUsuario(dados) {
  const { data, error } = await supabase
    .from("usuarios")
    .insert([dados]);

  if (error) {
    alert("Erro ao salvar cadastro");
    console.error(error);
    return false;
  }
  return true;
}

async function loginUsuario(nome, telefone) {
  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("nome", nome)
    .eq("telefone", telefone)
    .eq("ativo", true)
    .single();

  if (error || !data) {
    return null;
  }
  return data;
}
</script>