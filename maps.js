function initialize() {

    var mapOptions = {
        center: {
            lat: 51.5,
            lng: 0
        },
        zoom: 6,

        // disables scroll-initiated zooming
        scrollwheel: false,

        // hides other scaling, zooming, and display options
        panControl: false,
        zoomControl: true,
        scaleControl: false,
        streetViewControl: true,
        overviewMapControl: false,

        //display satellite map w high level labels as default
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    var styles = [
  {
    stylers: [
      { hue: "#00eeff" },
      { saturation: -20 }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];


    // defines map object and applies styling to that object
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.setOptions({
        styles: styles
    });

    var markers = [];
    // items added to this list will be added to the navigation map at the top of the site
    markers[0] = new google.maps.Marker({
        position: new google.maps.LatLng(51.749901, -1.259175),
        map: map,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
        },
        title: '1 Brewer Street, Oxford (1893-1897)',
    });
    markers[1] = new google.maps.Marker({
        position: new google.maps.LatLng(52.351227, 0.013675),
        map: map,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
        },
        title: 'Bluntisham Rectory, St. Ives (1897-1916)',
    });
    markers[2] = new google.maps.Marker({
        position: new google.maps.LatLng(51.06938, -1.78394),
        map: map,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
        },
        title: 'Godolphin School, Salisbury (1909-1913)',
    });
    markers[3] = new google.maps.Marker({
        position: new google.maps.LatLng(53.756639, -0.364722),
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
        },
        map: map,
        title: '80 Westbourne Avenue, Hull (1917)',
    });
    markers[4] = new google.maps.Marker({
        position: new google.maps.LatLng(51.759951, -1.2614),
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
        },
        map: map,
        title: 'Somerville College, Oxford (1913-1915)',
    });
    markers[5] = new google.maps.Marker({
        position: new google.maps.LatLng(51.753286, -1.248572),
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
        },
        map: map,
        title: '17 Longwall Street, Oxford (1917-1918)',
    });
    markers[6] = new google.maps.Marker({
        position: new google.maps.LatLng(51.75496, -1.253085),
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
        },
        map: map,
        title: '5 Bath Place, Holywell, Oxford (1918)',
    });
    markers[7] = new google.maps.Marker({
        position: new google.maps.LatLng(48.742203, 0.893986),
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
        },
        map: map,
        title: 'L\'ecole des Roches, Normandy (1918-1920)',
    });
    markers[8] = new google.maps.Marker({
        position: new google.maps.LatLng(51.488315, -0.135697),
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
        },
        map: map,
        title: '36 St. George\'s Square Square, London (1920)',
    });
    markers[9] = new google.maps.Marker({
        position: new google.maps.LatLng(51.525762, -0.118894),
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
        },
        map: map,
        title: '44 Mecklenburgh Square, London (1920-1921)',
    });
    markers[10] = new google.maps.Marker({
        position: new google.maps.LatLng(51.521705, -0.117088),
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
        },
        map: map,
        title: '24 Great James Street, London (1922-1957)',
    });
    markers[11] = new google.maps.Marker({
        position: new google.maps.LatLng(51.800793, 0.641284),
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
        },
        map: map,
        title: '22-24 Newland Street, Witham, Essex (1929-1957)',
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
