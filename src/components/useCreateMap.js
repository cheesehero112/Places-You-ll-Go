import { useEffect } from 'react';
import { loadModules } from 'esri-loader';

const useCreateMap = (mapRef) => {
  useEffect(() => {
    let view;
    const initializeMap = async (mapRef) => {
      // load modules
      const modules = ['esri/Map', 'esri/views/MapView', 'esri/Graphic'];
      // async load modules
      const [Map, MapView, Graphic] = await loadModules(modules);
      // create a map
      const map = new Map({ basemap: 'streets-relief-vector' });
      // initial view
      view = new MapView({
        map: map,
        zoom: 8,
        container: mapRef.current,
        center: [139.638031, 35.443707],
      });
      // First create a point geometry (this is the location of the Titanic)
      const point = {
        type: 'point', // autocasts as new Point()
        longitude: 139.638031,
        latitude: 35.443707,
      };
      // Create a symbol for drawing the point
      const markerSymbol = {
        type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
        color: [226, 119, 40],
        outline: {
          // autocasts as new SimpleLineSymbol()
          color: [255, 255, 255],
          width: 2,
        },
      };
      // Create a graphic and add the geometry and symbol to it
      const pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
      });
      // Add the graphics to the view's graphics layer
      view.graphics.addMany([pointGraphic]);
    };

    initializeMap(mapRef);
    return () => view?.destroy();
  }, [mapRef]);
};

export default useCreateMap;
