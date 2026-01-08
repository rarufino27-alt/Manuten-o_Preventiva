/**
 * CENTRAL DE ADMINS AUTORIZADOS
 * Acesso total ao painel administrativo
 * Cadastro manual (igual motorista)
 */

const Admins = [
  {
    usuario: "Rafael165",
    senha: "rf145355",
    nome: "Rafael Felipe",
    ativo: true
  }
];

/**
 * Busca admin válido
 * Retorna dados mínimos para sessão
 */
function buscarAdmin(usuario, senha){
  const admin = Admins.find(a =>
    a.usuario === usuario &&
    a.senha === senha &&
    a.ativo === true
  );

  if(!admin) return null;

  return {
    tipo: "admin",
    nome: admin.nome,
    usuario: admin.usuario
  };
}

/**
 * Verifica se admin está logado
 */
function adminLogado(){
  const admin = JSON.parse(localStorage.getItem("adminRF"));
  return admin && admin.tipo === "admin";
}

/**
 * Logout admin
 */
function logoutAdmin(){
  localStorage.removeItem("adminRF");
  window.location.href = "admin-login.html";
}
