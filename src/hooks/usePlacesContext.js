import { PlacesContext } from '../context/PlacesContext';
import { useContext } from 'react';

export const usePlacesContext = () => {
  const context = useContext(PlacesContext);
  if (!context) {
    throw Error('usePlacesContext must be used inside an PlaceContextProvider');
  }
  return context;
};
