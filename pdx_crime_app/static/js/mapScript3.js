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
        });
      }
    });
});