function pessoa(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
}
const pessoa1 = new pessoa("José", 22, "Desenvolvedor");
const pessoa2 = new pessoa("Maria", 28, "Designer");
const pessoa3 = new pessoa("Ana", 35, "Gerente de Projetos");

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);