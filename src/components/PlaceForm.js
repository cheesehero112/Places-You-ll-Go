import React, { useState } from 'react';
import { loadModules } from 'esri-loader';
import { usePlacesContext } from '../hooks/usePlacesContext';

const PlaceForm = () => {
  const { dispatch } = usePlacesContext();
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  // const [errorField, setErrorField] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const place = { city, country, notes };

    try {
      const response = await fetch('api/places', {
        method: 'POST',
        body: JSON.stringify(place),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // // load modules
      // const modules = ['esri/Map', 'esri/views/MapView', 'esri/Graphic'];
      // // async load modules
      // const [Map, MapView, Graphic] = await loadModules(modules);
      // const geoURL = 'https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer';
      // const params = {
      //   address: {
      //     'address': `${city}, ${country}`,
      //   },
      // };
      // locator.addressToLocations(geoURL, params).then((results) => {
      //   console.log(results[0]);
      // });
      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        // setErrorField(json.errorField);
        // console.log('error field: ', json.errorField);
      }

      if (response.ok) {
        setCity('');
        setCountry('');
        setNotes('');
        setError(null);
        // setErrorField([]);
        console.log('new place added!', json);
        dispatch({
          type: 'CREATE_PLACE',
          payload: json,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className='place-form'
      onSubmit={handleSubmit}
    >
      <section className='where-to-go'>
        <h2>Where do you want to go?</h2>
      </section>
      <section className='city-country'>
        <label>City:</label>
        <input
          type='text'
          placeholder='name of the city (required)'
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <label>Country:</label>
        <input
          type='text'
          placeholder='which country is it in? (required)'
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
      </section>
      <section className='notes-form'>
        <label>Notes:</label>
        <textarea
          type='text'
          placeholder='notes about this place (optional)'
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </section>
      <button className='add-place-btn'>Add a New Place!</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default PlaceForm;
