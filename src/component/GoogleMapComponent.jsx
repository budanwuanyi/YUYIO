// GoogleMapComponent.js
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useState, useEffect } from "react";

const GoogleMapComponent = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%"
  };
  
  const [center, setCenter] = useState({
    lat: 41.3851, lng: 2.1734
  });
  
  const options = {
    disableDefaultUI: true,
    mapId: 'b90dd82ed89b62cd'
  };
  
   // 获取用户的地理位置
   useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({

          
        });
      });
    }
  }, []);


  return (
    <div>
     <LoadScript
       googleMapsApiKey='AIzaSyBYtR_4-IbTpyJdowecuh3qGu0Xu4xDxj4'>
         <GoogleMap
           mapContainerStyle={mapStyles}
           zoom={10}
           center={center}
           options={options}
           >
           <Marker key="marker_1" position={center}/>
         </GoogleMap>
      </LoadScript>
      </div>
  )
}

export default GoogleMapComponent;
