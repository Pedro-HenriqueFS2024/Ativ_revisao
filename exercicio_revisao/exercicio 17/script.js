 // Verificar se já há um estado de login armazenado
 window.onload = function() {
    if (localStorage.getItem('loggedIn') === 'true') {
        // Redirecionar para a página de dashboard ou qualquer outra página autorizada
        window.location.href = 'dashboard.html';
    }
};

// Adicionar um evento de "submit" ao formulário
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter os valores de usuário e senha do formulário
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validar o usuário e senha (adicionar suas próprias condições de validação aqui)
    if (username === 'usuario' && password === 'senha') {
        // Se for válido, armazenar o estado de login no Local Storage
        localStorage.setItem('loggedIn', 'true');
        // Redirecionar para a página de dashboard ou qualquer outra página autorizada
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuário ou senha inválidos. Por favor, tente novamente.');
    }
});