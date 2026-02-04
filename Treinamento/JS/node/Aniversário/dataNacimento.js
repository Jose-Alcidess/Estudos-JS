//digite o dia do seu aniversário
const diaAniversario = 27;
//digite o mês do seu aniversário
const mesAniversario = 2;
//digite o ano do seu aniversário
const anoAniversario = 2002;

const dataNascimento = new Date(anoAniversario, mesAniversario - 1, diaAniversario);
console.log("Data de Nascimento: " + diaAniversario + "/" + mesAniversario + "/" + anoAniversario);

module.exports = dataNascimento;
