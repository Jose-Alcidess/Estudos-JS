function sortear() {
  const nome = document.getElementById('nome').value.trim();

  if (nome === '') {
    alert('Por favor, digite um nome!');
    return;
  }

  const resultado = document.getElementById('resultado');
  resultado.textContent = `🎉 Parabéns, ${nome}! Você foi sorteado!`;
}
