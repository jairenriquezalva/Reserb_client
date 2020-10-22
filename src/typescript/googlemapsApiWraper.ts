declare global {
  var initMap: any;
}

const googleMapsStyles : google.maps.MapTypeStyle[] = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]

class Api {

  ready: boolean;
  mapsQueue: Array<Map>;

  constructor(){
    this.ready = false;
    this.mapsQueue = [];
    this.init();
  }

  init(){
    let script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&callback=initMap`;
    script.defer = true;
    document.head.appendChild(script);
    window.initMap = ()=>{
      console.log("google maps api loaded.");
      this.ready = true;
      this.mapsQueue.forEach(map => {
        map.initMap()
      });
    };
  }

  Subscribe(map: Map){
    if(this.ready == true)
      map.initMap();
    else
      this.mapsQueue.push(map);
  }
}

let api = new Api();

class Map {
  ready: boolean = false;
  mapQueue: Array<any> = [];
  mapElementId: string;
  map: google.maps.Map|undefined;
  initialLocation: google.maps.LatLng;

  constructor(mapElementId: string, initialLocation: google.maps.LatLng){
    this.mapElementId = mapElementId;
    this.map = undefined;
    this.initialLocation = initialLocation;
    api.Subscribe(this);
  }

  initMap(){
    let elemento = document.getElementById(this.mapElementId);
    this.map = new google.maps.Map(elemento as HTMLElement, {
      center: this.initialLocation,
      zoom: 12,
      styles: googleMapsStyles,
    });
    let markerOptions = {
      position: this.initialLocation,
      map: this.map,
      title: "Posicion actual!",
    }
    new google.maps.Marker(markerOptions);
    this.ready = true;
    this.mapQueue.forEach(action=>action());
  }

  setLocationMarker(location: google.maps.LatLng, title: string, callback: any){
    let action = ()=>{
      const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
      let markerOptions = {
        position: location,
        map: this.map,
        title: title,
        icon: image
      }
      let marker = new google.maps.Marker(markerOptions);
      marker.addListener('click',callback);
    }
    if(this.ready){
      action();
    }else{
      this.mapQueue.push(action)
    }
  }
}


export default Map;