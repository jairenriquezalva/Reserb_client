declare global {
  var initMap: any;
}

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