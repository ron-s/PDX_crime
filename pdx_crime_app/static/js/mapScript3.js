$(window).load(function() {
    // Construct the catalog query string
    var url = 'http://localhost:8000/pdx_crime_app/pdx_crime_app_crimemodeltemplate?format=json&offense=Homicide';
    
    // Intialize our map
    var center = new google.maps.LatLng(45.5200, -122.6819);
    var mapOptions = {
      zoom: 12,
      center: center
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var infos = [];


  $.ajax({
      url: "http://localhost:8000/pdx_crime_app/pdx_crime_app_crimemodeltemplate?format=json&offense=Homicide",
      type: 'GET',
      headers : {Accept: 'application/json'},
      dataType: 'json',
      success:function(data) {
          data.features.forEach(function (obj) {
          var marker = new google.maps.Marker({
              position: new google.maps.LatLng(obj.properties.ycoordi, obj.properties.xcoordi),
              map: map,
              title: "offense"
              });
          var content = '<div class="infowindow"><b>' + obj.properties.offense + '</b></div>' + '<div class="infowindow">' + obj.properties.date + '</div>' + '<div class="infowindow">' + obj.properties.time + '</div>' + '<div class="infowindow">' + obj.properties.neighborhd + '</div>';

            var infowindow = new google.maps.InfoWindow();
            // add a click event listener when the user clicks on a marker to display the infowindow
            google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
                return function () {
                    // close the previous info-window
                    closeInfos();
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                    // keep the handle, in order to close it on next click event
                    infos[0] = infowindow;
                };
            })(marker, content, infowindow));
        });
    }
        });





    function closeInfos() {
        if (infos.length > 0) {
            // detach the info-window from the marker ... undocumented in the API docs
            infos[0].set("marker", null);
            // and close it
            infos[0].close();
            // blank the array
            infos.length = 0;
        }
    }
});