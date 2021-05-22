import React, { useState, useEffect } from 'react';
import {
  MapContainer, TileLayer, ZoomControl,
} from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import Legend from "./Legend";

const attribution = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const defaultMapState = {
  lat: 40.697149,
  lng: -74.2598761,
  zoom: 6,
  minZoom: 2,
  mapStyle: {
    width: '600px',
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 500,
  },
};

const DataPointMap = () => {
  const [isLoaded, setIsLoaded] = useState();
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  /* eslint-disable no-unused-expressions */
  return isLoaded ? (
    <MapContainer
      center={[defaultMapState.lat, defaultMapState.lng]}
      zoom={defaultMapState.zoom}
      style={defaultMapState.mapStyle}
      updateWhenZooming={false}
      updateWhenIdle
      //      preferCanvas={props}
      minZoom={defaultMapState.minZoom}
      zoomControl={false}
      // onClick={}
    >
      <TileLayer attribution={attribution} url={tileUrl} />
      <ZoomControl position="topright" />
    </MapContainer>
  ) : (
    <div>Data is loading...</div>
  );
};

export default DataPointMap;
