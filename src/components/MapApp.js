import React from 'react';
import Map from './Map';

const MapApp = () => {
  const handlePageRefresh = () => {
    window.location.reload(false);
  };
  return (
    <div className='map-app'>
      <h2>See Your Places on a Map</h2>
      <button onClick={handlePageRefresh}>Click to Refresh Map</button>
      <Map />
    </div>
  );
};

export default MapApp;
