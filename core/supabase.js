<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
/* ================= SUPABASE CONFIG GLOBAL ================= */

// 🔒 SUPABASE FIXO (RF DRIVER)
const SUPABASE_URL = "https://msnqiiwcityikslikbow.supabase.co";
const SUPABASE_ANON_KEY = "SUA_ANON_KEY_AQUI";

// 🧠 GRUPO FIXO (RF Driver)
const GRUPO_ID_FIXO = "f5b2eec4-f957-4648-8e4e-f5642159dd8c";

// Cliente Supabase
const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

/* ================= HELPERS ================= */

// Retorna grupo atual (fixo por enquanto)
function getGrupoId(){
  return GRUPO_ID_FIXO;
}

// Monta payload padrão de usuário
function montarUsuarioBase(dados){
  return {
    ...dados,
    grupo_id: getGrupoId(),
    ativo: true
  };
}
</script>