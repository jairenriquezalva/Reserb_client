import React, { useEffect, useState } from 'react'

import GoogleMap from 'typescript/googlemaps'

const PlacesMap = (props) => {
    const [map,setMap] = useState()
    const mapId = "map";
    props.places.forEach((place,i) => {
        console.log("place"+i)
        let address = { lat: place.provider.address[1], lng: place.provider.address[0]}
        if(map)
        map.setLocationMarker(address,place.provider.businessName,()=>console.log("callback"))
    });
    useEffect(
        ()=>{
            getLocation();
        },
        []
    )

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(initGoogleMaps);
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }
    function initGoogleMaps(position) {
        let location = { lat: position.coords.latitude, lng: position.coords.longitude }
        setMap(new GoogleMap(mapId,location));
    }

    return (
        <div style={{boxShadow: '0 0 2px 1px lightgray', boxSizing: 'border-box'}}>
        <div
            id={mapId} 
            style={{height: props.height, width: props.width, background: 'black'}}>  
        </div>    
        </div>
    )
}

export default PlacesMap;