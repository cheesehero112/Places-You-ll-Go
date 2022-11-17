import React from 'react';
import { usePlacesContext } from '../hooks/usePlacesContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const PlaceCard = (place) => {
  const { dispatch } = usePlacesContext();

  const handleClick = async () => {
    const response = await fetch('/api/places/' + place.place._id, {
      method: 'DELETE',
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({
        type: 'DELETE_PLACE',
        payload: json,
      });
    }
  };
  return (
    <div className='place-card'>
      <div className='place-title'>
        <h4>
          {place.place.city} - {place.place.country}
        </h4>
      </div>
      <div className='place-note'>
        <p>Notes:</p>
        <p>{place.place.notes}</p>
      </div>
      <span className='place-buttons'>
        <button onClick={handleClick}>Delete</button>
      </span>
      <div className='place-timestamp'>
        <p>Created {formatDistanceToNow(new Date(place.place.createdAt), { addSuffix: true })}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
