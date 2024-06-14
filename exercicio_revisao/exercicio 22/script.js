document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    // Impedir o envio do formulário
    event.preventDefault();
    
    // Obter os valores dos campos
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var creditCard = document.getElementById("creditCard").value;
    var expiry = document.getElementById("expiry").value;
    var cvv = document.getElementById("cvv").value;
    
    // Validar se todos os campos estão preenchidos
    if (fullName === '' || email === '' || address === '' || creditCard === '' || expiry === '' || cvv === '') {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
    
    // Validar o formato do endereço de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um endereço de email válido.");
      return false;
    }
    
    // Validar o formato da data de validade (MM/YY)
    var expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!expiryRegex.test(expiry)) {
      alert("Por favor, insira uma data de validade válida (MM/YY).");
      return false;
    }
    
    // Se todas as validações passarem, o formulário pode ser enviado
    alert("Compra finalizada com sucesso!");
    // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor
  });