
/* ==========================================================================
	Asynchronous Loading Google Maps
============================================================================= */
function loadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
	document.body.appendChild(script);
}
window.onload = loadScript;

/* ==========================================================================
	Google Maps SETTING's
============================================================================= */
/*
 * define the coordinates of your company
 */

lat = 28.632246;
lng = 77.120986; 

var map;
var MY_MAPTYPE_ID = 'custom_style';
 
function initialize() {

	  var featureOpts = [
		 {
		stylers: [
			{ saturation: -300 }
			
		]
	},{
		featureType: 'road',
		elementType: 'geometry',
		stylers: [
			{ hue: "#16a085" },
			{ visibility: 'simplified' }
		]
	},{
		featureType: 'road',
		elementType: 'labels',
		stylers: [
			{ visibility: 'off' }
		]
	}
			];
  
  var myLatlng = new google.maps.LatLng(lat,lng);
  var mapOptions = {
    zoom: 16,
    scrollwheel: false,
    mapTypeControl:false,
    streetViewControl:false,
    center: myLatlng,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
  };
  
  var map = new google.maps.Map(document.getElementById('clav_maps'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
  	icon: "img/marker.png",
      map: map
  });
  
  var styledMapOptions = {
		    name: 'Custom Style'
		  };
  
	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions); 
	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	google.maps.event.addDomListener(window, 'load', initialize);
}



/*-----------------------------------------------------------------*/
