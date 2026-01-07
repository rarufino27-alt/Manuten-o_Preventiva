// core/motoristas.js

/**
 * CENTRAL DE MOTORISTAS AUTORIZADOS
 * Login exclusivo por CPF
 * CPF nunca é exibido completo
 */

const Motoristas = [
  {
    cpf: "09467479460", // CPF REAL (somente números)
    nome: "Rafael Felipe",
    modelo: "Nissan Versa-Branco",
    placa: "PYR-8A16",
    ativo: true
  },
  {
    cpf: "98765432100",
    nome: "Maria Oliveira",
    modelo: "Honda Civic",
    placa: "XYZ9K88",
    ativo: false
  }
];

/**
 * Remove tudo que não for número
 */
function normalizarCPF(cpf){
  return (cpf || "").replace(/\D/g, "");
}

/**
 * Mascara CPF exibindo apenas os 3 primeiros dígitos
 * Ex: 123********
 */
function mascararCPF(cpf){
  const limpo = normalizarCPF(cpf);
  if(limpo.length < 3) return "***";
  return limpo.substring(0,3) + "********";
}

/**
 * Valida se o CPF existe e está ativo
 * Retorna dados do motorista ou null
 */
function buscarMotoristaPorCPF(cpfInformado){
  const cpf = normalizarCPF(cpfInformado);

  if(cpf.length !== 11) return null;

  const motorista = Motoristas.find(m =>
    m.cpf === cpf && m.ativo === true
  );

  if(!motorista) return null;

  return {
    tipo: "motorista",
    nome: motorista.nome,
    modelo: motorista.modelo,
    placa: motorista.placa,
    cpfMascarado: mascararCPF(motorista.cpf)
  };
}

/**
 * Verifica se existe motorista logado
 */
function motoristaLogado(){
  const usuario = JSON.parse(localStorage.getItem("usuarioRF"));
  return usuario && usuario.tipo === "motorista";
}

/**
 * Logout do motorista
 */
function logoutMotorista(){
  localStorage.removeItem("usuarioRF");
  window.location.href = "login-motorista.html";
}
