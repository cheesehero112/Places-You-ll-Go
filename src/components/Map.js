import React, { useRef } from 'react';
import useCreateMap from './useCreateMap';

const Map = () => {
  const mapRef = useRef(null);
  useCreateMap(mapRef);
  return (
    <div
      className='map-view'
      ref={mapRef}
    ></div>
  );
};
export default Map;
