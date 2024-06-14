// Seleciona o elemento textarea
var campoTexto = document.getElementById('texto');
var contadorPalavras = document.getElementById('contador');

campoTexto.addEventListener('input', function() {
  var texto = campoTexto.value;
  var palavras = texto.split(/\s+/);
  var numPalavras = palavras.length;
  contadorPalavras.textContent = numPalavras;
});