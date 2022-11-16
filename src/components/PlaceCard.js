import React from 'react';

const PlaceCard = (place) => {
  return (
    <div className='place-card'>
      <h4>
        {place.place.city} - {place.place.country}
      </h4>
      <p>Notes: {place.place.notes}</p>
      <p>Created at: {place.place.createdAt}</p>
    </div>
  );
};

export default PlaceCard;
