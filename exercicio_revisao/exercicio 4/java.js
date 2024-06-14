function adicionarLinha() {
    var tabela = document.getElementById("minhaTabela").getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow();
    var celula1 = novaLinha.insertCell(0);
    var celula2 = novaLinha.insertCell(1);
    celula1.innerHTML = "Nova Linha, Celula 1";
    celula2.innerHTML = "Nova Linha, Celula 2";
}