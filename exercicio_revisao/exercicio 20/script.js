document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const files = document.getElementById('fileInput').files;
    if (files.length === 0) {
        alert('Por favor, selecione pelo menos um arquivo.');
        return;
    }
    alert('Os arquivos foram enviados com sucesso!');
    document.getElementById('fileInput').value = '';
    document.getElementById('preview').innerHTML = '';
});

document.getElementById('fileInput').addEventListener('change', function() {
    const files = this.files;
    const preview = document.getElementById('preview');
    preview.innerHTML = '';

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith('image/')) {
            continue;
        }
        const reader = new FileReader();
        reader.onload = function(event) {
            const imgElement = document.createElement('img');
            imgElement.classList.add('preview-item');
            imgElement.src = event.target.result;
            imgElement.alt = file.name;
            preview.appendChild(imgElement);
        }
        reader.readAsDataURL(file);
    }
});