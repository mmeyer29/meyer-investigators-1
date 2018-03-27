var center = {
  lat: 39.7577,
  lng: -105.007
};

var contentString =
  '<div id="content">' +
  '<h1 id="firstHeading" class="firstHeading">Where my dreams went to die</h1>' +
  "</div>";

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 17,
    mapTypeId: "roadmap"
  });
  map.setTilt(0);
  var marker = new google.maps.Marker({
    position: center,
    map: map
  });
  var infoWindow = new google.maps.InfoWindow({
    content: contentString
  });
  marker.addListener('click', function() {
         infoWindow.open(map, marker);
       });
}
