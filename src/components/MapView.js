import React from 'react';
// import { Map, Scene, WebMap, WebScene } from '@esri/react-arcgis';

const MapView = () => {
  const mapProps = { basemap: 'topo' };
  const viewProps = {
    center: [-122.4443, 47.2529],
    zoom: 6,
  };
  return (
    <div>
      <Map
        mapProps={mapProps}
        viewProps={viewProps}
      />
    </div>
  );
};

export default MapView;
