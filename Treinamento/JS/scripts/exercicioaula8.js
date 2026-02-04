const nome = "José";
const sobrenome = "Pinheiro";
const nascimento = 2002;
const idade = 2024 - nascimento;
const peso = 83;
const altura = 1.75;
let imc;
imc = peso / (altura * altura);
console.log(nome + " " + sobrenome + " tem " + idade + " anos e seu IMC é " + imc);