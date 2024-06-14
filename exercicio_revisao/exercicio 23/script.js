function buscarPrevisao() {
    const cidade = document.getElementById('city-input').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=SEU_API_KEY&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperatura = data.main.temp;
            const descricao = data.weather[0].description;
            document.getElementById('result').innerHTML = `A temperatura em ${cidade} é de ${temperatura}°C, ${descricao}.`;
        })
        .catch(error => {
            console.error('Erro ao buscar previsão do tempo:', error);
            document.getElementById('result').innerHTML = 'Não foi possível obter a previsão do tempo para essa cidade.';
        });
}