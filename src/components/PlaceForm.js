import React, { useState } from 'react';

const PlaceForm = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

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
      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        setCity('');
        setCountry('');
        setNotes('');
        setGeoLocation([0, 0]);
        setError(null);
        console.log('new place added!', json);
      }
    } catch (error) {}
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
      <button>Add New Place!</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default PlaceForm;
