function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 28.670724045253454, lng: 77.43079366232121};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ghaziabad, India' // Title Location
    });
}