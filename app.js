let longitude;
let latitude;
let JohnDoe = "<h6><img src = \"Assets/BigD.JPG\" width = \"110px\" style = \"transform:rotate(90deg); float: right;\"></h6><h6>Darryl Wu<br>Skills: Nice guy <br>FREE<br>Tel: 617 294 7592<br>Email: darryl.wu301@gmail.com<br><br><a href=\"ViewPendingService.html\"><button onclick = \"sendEmail()\">Request Service</button></a></h6>"
let JohnSmith = "<h6><img src = \"Assets/pic4.png\"></h6><h6>John Smith<br>Skills: Garden Engineer - $50/hr<br>Tel: 465 897 1209<br>Email: jsmith@gardenhoe.com<br><br><a href=\"ViewPendingService.html\"><button>Request Service</button></a></h6>"
let NickFury = "<h6><img src = \"Assets/pic6.png\"></h6><h6>Nick Fury<br>Skills: Plumber - $22/hr<br>Tel: 325 224 7894<br>Email: nfury@live.com<br><br><a href=\"ViewPendingService.html\"><button>Request Service</button></a></h6>"
let BobJones = "<h6><img src = \"Assets/pic8.png\" height=\"90\" width=\"90\"></h6><h6>Bob Jones<br>Skills: Physics <br>Tutor - $18/hr<br>Tel: 894 238 9230<br>Email: bojo@yahoo.com<br><br><a href=\"ViewPendingService.html\"><button>Request Service</button></a></h6>"
let KathyTran = "<h6><img src = \"Assets/pic2.png\"></h6><h6>Kathy Tran<br>Skills: Chemistry <br>Tutor - $25/hr<br>Tel: 342 812 7538<br>Email: Katran@gmail.com<br><br><a href=\"ViewPendingService.html\"><button>Request Service</button></a></h6>"
let AlexNguyen = "<h6><img src = \"Assets/pic6.png\"></h6><h6>Alex Nguyen<br>Skills: Linear Algebra <br>Tutor - $20/hr<br>Tel: 894 237 2389<br>Email: alexnguyen@hotmail.com<br><br><a href=\"ViewPendingService.html\"><button>Request Service</button></a></h6>"
let OldMcdonald = "<h6><img src = \"Assets/pic7.png\"></h6><h6>Old McDonald<br>Skills: Electrican - $40/hr<br>Tel: 216 395 9880<br>Email: omcdonald@gmail.com<br><br><a href=\"ViewPendingService.html\"><button>Request Service</button></a></h6>"
let KevinMatthew = "<h6><img src = \"Assets/pic8.png\" height=\"90\" width=\"90\"></h6><h6>Kevin Matthew<br>Skills: Painter - $25/hr<br>Tel: 932 752 2918<br>Email: kevmatt@live.com<br><br><a href=\"ViewPendingService.html\"><button>Request Service</button></a></h6>"
let LukeMatthew = "<h6><img src = \"Assets/pic3.png\"></h6><h6>Luke Matthew<br>Skills: Pool Cleaner - $18/hr<br>Tel: 912 834 7313<br>Email: lukem@yahoo.com<br><br><a href=\"ViewPendingService.html\"><button>Request Service</button></a></h6>"
let GiJoe = "<h6><img src = \"Assets/pic4.png\"></h6><h6>GI Joe<br>Skills: Landscaper - $30/hr<br>Tel: 429 149 7538<br>Email: gijoe@outlook.com<br><br><a href=\"ViewPendingService.html\"><button>Request Service</button></a></h6>"
let HeroldWong = "<h6><img src = \"Assets/pic6.png\"></h6><h6>Herold Wong<br>Skills: Rooftop Maintainance - $35/hr<br>Tel: 842 901 9841<br>Email: hwong@gmail.com<br><br><a href=\"ViewPendingService.html\"><button>Request Service</button></a></h6>"
let TylerZhang = "<h6><img src = \"Assets/pic8.png\" height=\"90\" width=\"90\"></h6><h6>Tyler Zhang<br>Skills: Furtniture Installer - $15/hr<br>Tel: 941 851 9159<br>Email: tyzhang@outlook.com<br><br><a href=\"ViewPendingService.html\"><button>Request Service</button></a></h6>"

function sendEmail(){
    console.log("executed")
    window.open("mailTo:darryl.wu301@gmail.com")
}

window.addEventListener('load', () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            console.log(latitude, longitude)
            map = L.map('mapDiv').setView([latitude, longitude], 5);
            
            var marker = L.marker([latitude, longitude]).addTo(map);
            marker.bindPopup(JohnDoe).openPopup();

            var marker2 = L.marker([latitude+0.001, longitude+0.001]).addTo(map);
            marker2.bindPopup(JohnSmith).openPopup();

            var marker3 = L.marker([latitude-0.001, longitude-0.02]).addTo(map);
            marker3.bindPopup(NickFury).openPopup();

            var marker4 = L.marker([latitude+0.0003, longitude+0.01]).addTo(map);
            marker4.bindPopup(BobJones).openPopup();

            var marker5 = L.marker([latitude-0.007, longitude+0.0002]).addTo(map);
            marker5.bindPopup(KathyTran).openPopup();

            var marker6 = L.marker([latitude+0.001, longitude-0.01]).addTo(map);
            marker6.bindPopup(AlexNguyen).openPopup();

            var marker7 = L.marker([latitude-0.005, longitude+0.0005]).addTo(map);
            marker7.bindPopup(OldMcdonald).openPopup();

            var marker8 = L.marker([latitude+0.01, longitude-0.02]).addTo(map);
            marker8.bindPopup(KevinMatthew).openPopup();

            var marker9 = L.marker([latitude-0.01, longitude+0.01]).addTo(map);
            marker9.bindPopup(LukeMatthew).openPopup();

            var marker10 = L.marker([latitude+0.005, longitude-0.005]).addTo(map);
            marker10.bindPopup(GiJoe).openPopup();

            var marker11 = L.marker([latitude-0.005, longitude-0.01]).addTo(map);
            marker11.bindPopup(HeroldWong).openPopup();

            var marker12 = L.marker([latitude-0.007, longitude-0.015]).addTo(map);
            marker12.bindPopup(TylerZhang).openPopup();

            initMap(latitude, longitude);
        })
    }
}) 

function callPersonOne() {
    var marker = L.marker([latitude-0.002, longitude+0.002]).addTo(map);
    marker.bindPopup(JohnDoe).openPopup();
}
function callPersonTwo() {
    var marker2 = L.marker([latitude+0.001, longitude+0.001]).addTo(map);
    marker2.bindPopup(JohnSmith).openPopup();
}

function callPersonThree() {
    var marker3 = L.marker([latitude-0.001, longitude-0.02]).addTo(map);
    marker3.bindPopup(NickFury).openPopup();
}
function callPersonFour() {
    var marker4 = L.marker([latitude+0.0003, longitude+0.01]).addTo(map);
    marker4.bindPopup(BobJones).openPopup();
}
function callPersonFive() {
    var marker5 = L.marker([latitude-0.007, longitude+0.0002]).addTo(map);
    marker5.bindPopup(KathyTran).openPopup();
}
function callPersonSix() {
    var marker6 = L.marker([latitude+0.001, longitude-0.01]).addTo(map);
    marker6.bindPopup(AlexNguyen).openPopup();
}
function callPersonSeven() {
    var marker7 = L.marker([latitude-0.005, longitude+0.0005]).addTo(map);
    marker7.bindPopup(OldMcdonald).openPopup();
}
function callPersonEight() {
    var marker8 = L.marker([latitude+0.01, longitude-0.02]).addTo(map);
    marker8.bindPopup(KevinMatthew).openPopup();
}
function callPersonNine() {
     var marker9 = L.marker([latitude-0.01, longitude+0.01]).addTo(map);
    marker9.bindPopup(LukeMatthew).openPopup();
}
function callPersonTen() {    
    var marker10 = L.marker([latitude+0.005, longitude-0.005]).addTo(map);
    marker10.bindPopup(GiJoe).openPopup();
}
function callPersonEleven(){
var marker11 = L.marker([latitude-0.005, longitude-0.01]).addTo(map);
    marker11.bindPopup(HeroldWong).openPopup();
}
function callPersonTwelve(){
var marker12 = L.marker([latitude-0.007, longitude-0.015]).addTo(map);
    marker12.bindPopup(TylerZhang).openPopup();
}





function initMap(mLat, mLong){
    // initialize map
    map.setView([mLat, mLong], 15);
    // set map tiles source
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        maxZoom: 18,
    }).addTo(map);
    // add marker to the map
}
