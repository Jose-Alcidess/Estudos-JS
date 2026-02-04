const dataNascimento = require('./dataNacimento');

function calcularIdade() {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  console.log(`A idade é: ${idade} anos`);
  return idade;
}

calcularIdade();
