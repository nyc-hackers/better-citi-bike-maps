google.maps.event.addDomListener(window, 'load', function(){
  var properties = {
    center:new google.maps.LatLng(40.7293866,-73.9275324),
    zoom:10,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), properties);
});
