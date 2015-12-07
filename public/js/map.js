function initialize() {
    var myLatLng = {lat: 18.4085437, lng: -66.5775729};
    var myLatLng2 = {lat: 18.408752, lng: -66.577586};

    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 14,
        center: myLatLng2
    });


    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    });

    var contentString = "<div style='color: black;'>"
                        + "<h5 style='text-align:center;'>Rótulos Polaco</h5>"
                        + "<tr><th>Teléfono: </th><td><a href='tel:7872318173'>787-231-8173</a></td></tr>"
                        + "</div>"

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });


    google.maps.event.addListener(beachMarker, 'click', function() {
       infowindow.open(map,beachMarker);
    });
    infowindow.open(map,beachMarker);

  $("#googleMap").click(function(){
    if( (navigator.platform.indexOf("iPhone") != -1)
        || (navigator.platform.indexOf("iPod") != -1)
        || (navigator.platform.indexOf("iPad") != -1))
         window.open("maps://maps.google.com/maps?q=18.4085437,-66.5775729");
    else
         window.open("http://maps.google.com/maps?q=18.4085437,-66.5775729");
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
