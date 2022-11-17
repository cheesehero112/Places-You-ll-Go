import { useEffect } from 'react';
import { loadModules } from 'esri-loader';

const useCreateMap = (mapRef) => {
  useEffect(() => {
    let view;
    const initializeMap = async (mapRef) => {
      const modules = ['esri/Map', 'esri/views/MapView'];
      const [Map, MapView] = await loadModules(modules);
      const map = new Map({ basemap: 'streets-relief-vector' });
      view = new MapView({
        map: map,
        zoom: 8,
        container: mapRef.current,
        center: [139.638031, 35.443707],
      });
    };
    initializeMap(mapRef);
    return () => view?.destroy();
  }, [mapRef]);
};

export default useCreateMap;
