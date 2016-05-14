$(window).load(function() {
    // Construct the catalog query string
    var url = 'http://localhost:8000/pdx_crime_app/pdx_crime_app_crimemodeltemplate?format=json&offense=Homicide';
    
    // Intialize our map
    var center = new google.maps.LatLng(45.5200, -122.6819);
    var mapOptions = {
      zoom: 8,
      center: center
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    

    
    // Retrieve our data and plot it
    $.getJSON(url, function(data) {
          var features = data.features;
          //var features = data["features"]
          $.each(data, function(i, entry) {
              //console.log(i, entry);
              //if (i === "features") {
              console.log(features[0].properties.xcoordi);
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(features[0].properties.xcoordi,
                                                     features[0].properties.ycoordi),
                    map: map,
                    //title: offense   

                });
                console.log(marker);

          });
    }); 
});