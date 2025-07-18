// script.js
document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.comprar');
  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Produto adicionado ao carrinho!');
    });
  });
});
