import React from 'react';
import { useEffect, useState } from 'react';
import PlaceCard from '../components/PlaceCard';
import PlaceForm from '../components/PlaceForm';
import MapApp from '../components/MapApp';

const Mainpage = () => {
  const [places, setPlaces] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      // the URL has to be the full http://localhost3000/api/places
      const response = await fetch('/api/places');
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setPlaces(json);
      }
    };
    fetchPlaces();
  }, []);
  console.log(places);
  return (
    <div className='main-page'>
      <section className='form-section'>
        <PlaceForm />
      </section>
      <MapApp />
      <div className='places'>
        {console.log(places)}
        {places &&
          places.map((place) => (
            <PlaceCard
              place={place}
              key={place._id}
            />
          ))}
      </div>
    </div>
  );
};

export default Mainpage;
