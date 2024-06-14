document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Obter os arquivos selecionados
    const files = document.getElementById('fileInput').files;

    // Limpar a área de visualização
    document.getElementById('preview').innerHTML = '';

    // Loop pelos arquivos selecionados
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        // Ler o arquivo como URL de dados
        reader.readAsDataURL(file);

        // Quando a leitura estiver concluída, adicionar a visualização
        reader.onload = function() {
            const preview = document.createElement('div');
            preview.className = 'preview-item';

            // Verificar se o arquivo é uma imagem
            if (file.type.match('image.*')) {
                const img = document.createElement('img');
                img.src = reader.result;
                preview.appendChild(img);
            } else {
                const text = document.createElement('p');
                text.textContent = file.name;
                preview.appendChild(text);
            }

            document.getElementById('preview').appendChild(preview);
        };
    }
});