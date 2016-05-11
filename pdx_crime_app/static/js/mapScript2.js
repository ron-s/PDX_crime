//----Global functions--------------------------------------------------------//
var dbToUse; // Necessary for database selection.

//----Functions---------------------------------------------------------------//
var styleFunction = function(checkboxID) {
    return styles[checkboxID];
};


// var infos = [];
// var lat = features.geometry.coordinates[1];
// var long = features.geometry.coordinates[0];
// var loc = [lat,long];






function initialize() {
  // create a google map and center it on the city of portland

  var myOptions = {
      center: new google.maps.LatLng(45.5200, -122.6819),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP

  };
  var map = new google.maps.Map(document.getElementById("map"),
          myOptions);

  map.data.loadGeoJson( "http://localhost:8000/pdx_crime_app/pdx_crime_app_crimemodeltemplate?format=json&offense=Homicide" );

  setMarkers(map)


  }

function setMarkers(map, loc) {
        // create an array of markers to add to the google map
        for (var i in loc) {
            var obj = loc[i];
            var name = obj.name;
            var lat = features.geometry.coordinates[1];
            var long = features.geometry.coordinates[0];

            console.log(obj)

            latlngset = new google.maps.LatLng(lat, long);
            //define where to set the markers
            var marker = new google.maps.Marker({
                map: map, title: name, position: latlngset
            });
            map.setCenter(marker.getPosition());

            //display the inspection result, inspection score and description of results
            if (obj.results.result_1) {
                inspectionResult = obj.results.result_1.inspection_result
                inspectionScore = obj.results.result_1.inspection_score
                description = obj.results.result_1.description
            } else {

                inspectionResult = "No Result"
                inspectionScore = "None"
                description = "None"
            }


            // content string to place in the infowindow
            var content = '<div class="infowindow"><b><a href="#" onclick="slidePanel(\'' + obj.bus_id + '\');return false;">' + obj.name + '</a></b></div>' + '<div class="infowindow">' + obj.address + '</div>' + '<div class="infowindow">' + 'Inspection Result:  ' + inspectionResult + '</div>' + '<div class="infowindow">' + 'Inspection Score:  ' + inspectionScore + '</div>' + '<div class="infowindow">' + description + '</div>';

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
        }
    }

/*
// Dude this is genuine KS brainpower or something.
function loadGeoJSON(checkboxID) {
  serviceURL = 'http://localhost:8000/pdx_crime_app/';
  database = dbToUse;
  trailer = '?format=json';
  offenseID = '&offense=' + checkboxID;

  var vectorLayer = new ol.layer.Vector({
    name: checkboxID,
    source: new ol.source.Vector({
        projection: 'EPSG:3857',
        url: serviceURL + database + trailer + offenseID,
        format: new ol.format.GeoJSON(),
        }),
    style: styleFunction(checkboxID)
  }); 
  map.addLayer(vectorLayer);
};

function removeLayer(checkboxID) {
  map.removeLayer(vectorLayer);
}

var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
          name: 'main',
          source: new ol.source.Stamen({
              layer: 'toner-lite'
          })
      }),
    ],
    view: new ol.View({
        projection: 'EPSG:3857',
        center: ol.proj.fromLonLat([-122.6819, 45.5200]),
        // KS we are reprojecting from geographic 4326 into web mercator;
        zoom: 12,
    })
});

var element = document.getElementById('popup');

var popup = new ol.Overlay({
  element: element,
  stopEvent: false
});
map.addOverlay(popup);
*/

//----Event Listeners---------------------------------------------------------//

$(document).ready(function() {
  //----Checkbox event listener----//
  $(":checkbox").change(function() {
    $(".loader").fadeOut("slow");
    var $this = $(this);
    var checkID = $this.attr('id');
    if ($this.is(':checked')) {
      loadGeoJSON(checkID);  
    } else {
  // Removes selected layer based on 'name' property
      map.getLayers().forEach(function(layer){
        if (layer.get('name') === checkID)
          layer.setVisible(checkID.checked);
      })
    } 
  });
/*
  // KS popup addition. It's all copypasta, alas.
  map.on('click', function(evt) {
    //----Popover Generator----//
    // copypasta from https://github.com/openlayers/ol3/blob/v3.0.0-gamma.1/examples/icon.js#L65-L84
    var feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feature, layer) {
          return feature;
        });
    if (feature) {
      var geometry = feature.getGeometry();
      var coord = geometry.getCoordinates();
      popup.setPosition(coord);
      $(element).popover({
        'placement': 'top',
        'html': true,
        'content': ('<p>' + feature.get('offense') + '</p>' +
                    '<p>' + feature.get('date') + '</p>' +
                    '<p>' + feature.get('time') + '</p>')
      });
      $(element).popover('show');
    } else {
      $(element).popover('destroy');
    }
  });
  */
  //----Database Selector----//
  $('#dataset').change(function() {
    dbToUse = $(this).val();
    console.log(dbToUse)
    loadGeoJSON(dbToUse);
  });
  
  //----Menu Flyout----//
  $("#menu-toggle").click(function(evt) {
    evt.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
  
 /*
  //----Botched 404 Identifer----//
  window.addEventListener('error', function(evt){
    alert('You must select a dataset from the dropdown!');
  }, true);
  */

  //---Violent Crime Mapper----//
  //KS: TODO: THERE SHOULD BE A LESS HACKY WAY TO DO THIS.
  /*
  $('#violence').click(function() {
    $(".loader").fadeOut("slow");
    $(':checkbox').prop('checked', false);
    $("[id='Aggravated Assault']").prop('checked', true);
    loadGeoJSON('Aggravated Assault');
    $('#Homicide').prop('checked', true);
    loadGeoJSON('Homicide');
    $('#Rape').prop('checked', true);
    loadGeoJSON('Rape')
    $('#Robbery').prop('checked', true);
    loadGeoJSON('Robbery');
  });
  
  //----Clear all selections----/
  //KS: HACK ALERT
  $('#clear').click(function(){
    $(':checkbox').prop('checked', false);
    map.getLayers().forEach(function(layer){
      if (layer.get('name') !== 'main') {
        layer.setVisible(false);
      }
    });
  });*/
});

initialize();

