import { loadModules } from 'esri-loader';
import React, { useRef, useEffect } from 'react';

const Map = () => {
  const mapEl = useRef(null);

  const fetchPlaces = async () => {
    // the URL has to be the full http://localhost3000/api/places
    const response = await fetch('/api/places');
    const json = await response.json();
    // console.log('json from fetch: ', json[0].city);
    return json;
  };

  // fetch the current DB and grab an array of city & country strings
  useEffect(() => {
    let view;
    const test = ['testtest'];
    const geoLocationsStr = [];
    const geoLocationPoints = [];
    const points = [];
    const fetchPromise = fetchPlaces();
    fetchPromise.then((data) => {
      data.forEach((place) => {
        geoLocationsStr.push(`${place.city}, ${place.country}`);
      });
      // console.log(geoLocationsStr);
      const modules = ['esri/config', 'esri/Map', 'esri/views/MapView', 'esri/rest/locator', 'esri/Graphic'];
      loadModules(modules, {
        css: true,
      }).then(([esriConfig, Map, MapView, locator, Graphic]) => {
        // console.log(geoLocationsStr);
      });
    });

    const modules = ['esri/config', 'esri/Map', 'esri/views/MapView', 'esri/rest/locator', 'esri/Graphic'];
    loadModules(modules, {
      css: true,
    }).then(([esriConfig, Map, MapView, locator, Graphic]) => {
      console.log('from line 48: ', geoLocationsStr);
      // config key
      esriConfig.apiKey = 'AAPK2c087755e01542cfa2c269161346ee0fsdCkHnJ6J8gIm_QfzgayQlOjJVVFGjNkS-s3uKhUnlff-m89pLO2cPSpHtHwXr1O';
      const map = new Map({
        basemap: 'arcgis-navigation',
      });
      view = new MapView({
        map: map,
        center: [139.638031, 35.443707],
        zoom: 1,
        // use the ref as a container
        container: mapEl.current,
      });
      // geo servicing URL
      const geocodingServiceUrl = 'https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer';

      geoLocationsStr.forEach((placeStr) => {
        console.log(placeStr);
        let params = { 'address': { 'address': placeStr } };
        locator.addressToLocations(geocodingServiceUrl, params).then((results) => {
          // console.log('line 75, locator results.0: ', results[0].location.get('latitude'), results[0].location.get('longitude'));

          geoLocationPoints.push({ 'lat': results[0].location.get('latitude'), 'lon': results[0].location.get('longitude') });
          // showResult(results);
          view.graphics.add(
            new Graphic({
              geometry: {
                type: 'point', // autocasts as new Point()
                longitude: results[0].location.get('longitude'),
                latitude: results[0].location.get('latitude'),
              },
              symbol: {
                type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40],
                outline: {
                  // autocasts as new SimpleLineSymbol()
                  color: [255, 255, 255],
                  width: 2,
                },
              },
            })
          );
        });
      });
      console.log('points:', points);
      view.graphics.add([points]);
      console.log('geoLocationPoints: ', geoLocationPoints);
    });
    return () => {
      // close the map view
      if (!!view) {
        view.destroy();
        view = null;
      }
    };
  });
  return (
    <div
      style={{ height: 700, backgroundColor: 'transparent' }}
      ref={mapEl}
    ></div>
  );
};
export default Map;
