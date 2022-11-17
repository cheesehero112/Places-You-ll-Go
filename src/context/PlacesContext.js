import React, { createContext, useReducer } from 'react';

export const PlacesContext = createContext();

export const placeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PLACES':
      return {
        places: action.payload,
      };
    case 'CREATE_PLACE':
      return {
        places: [action.payload, ...state.places],
      };
    case 'DELETE_PLACE':
      return {
        places: state.places.filter((place) => place._id !== action.payload._id),
      };
    case 'ADD_TO_MAP':
      return {
        places: [action.payload, ...state.places],
      };

    default:
      return state;
  }
};

export const PlacesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(placeReducer, { places: null });

  return <PlacesContext.Provider value={{ ...state, dispatch }}>{children}</PlacesContext.Provider>;
};
