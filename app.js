let longitude;
let latitude;

window.addEventListener('load', () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            console.log(latitude, longitude)
            map = L.map('mapDiv').setView([latitude, longitude], 5);
            marker = L.marker([latitude, longitude]).addTo(map);
            initMap(latitude, longitude);
        })
    }
}) 


function initMap(mLat, mLong){
    // initialize map
    map.setView([mLat, mLong], 15);
    // set map tiles source
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        maxZoom: 18,
    }).addTo(map);
    // add marker to the map
    marker.setLatLng([mLat, mLong]).update();
}
