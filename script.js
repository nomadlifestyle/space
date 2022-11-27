function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "f3c66f9711efd2d6",
    center: { lat: 48.85, lng: 2.35 },
    zoom: 12,
  });
}

window.initMap = initMap;
