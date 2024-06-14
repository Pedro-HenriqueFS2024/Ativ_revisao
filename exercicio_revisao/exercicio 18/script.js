var mapa;
function inicializarMapa() {
    var minhaLocalizacao = { lat: -23.5505, lng: -46.6333 };

    mapa = new google.maps.Map(
        document.getElementById('mapa'), { zoom: 4, center: minhaLocalizacao });

    var marcador = new google.maps.Marker({ position: minhaLocalizacao, map: mapa });
}