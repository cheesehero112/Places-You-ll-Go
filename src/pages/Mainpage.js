import React from 'react';
import { useEffect, useState } from 'react';
import PlaceCard from '../components/PlaceCard';
import PlaceForm from '../components/PlaceForm';
import MapApp from '../components/MapApp';
import { usePlacesContext } from '../hooks/usePlacesContext';

const Mainpage = () => {
  const { places, dispatch } = usePlacesContext();

  useEffect(() => {
    const fetchPlaces = async () => {
      // the URL has to be the full http://localhost3000/api/places
      const response = await fetch('/api/places');
      const json = await response.json();
      // console.log('json from fetch: ', json);

      if (response.ok) {
        dispatch({
          type: 'SET_PLACES',
          payload: json,
        });
      }
    };
    fetchPlaces();
  }, []);

  // console.log('json from fetch: ', json);

  return (
    <div className='main-page'>
      <section className='form-section'>
        <PlaceForm />
      </section>
      <div className='places'>
        {places &&
          places.map((place) => (
            <PlaceCard
              place={place}
              key={place._id}
            />
          ))}
      </div>
      <MapApp />
    </div>
  );
};

export default Mainpage;
