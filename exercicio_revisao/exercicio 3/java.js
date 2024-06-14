function destacarItem(elemento) {
    const itens = document.querySelectorAll('#minhaLista li');
    itens.forEach(item => item.classList.remove('highlight'));
    elemento.classList.add('highlight');
}