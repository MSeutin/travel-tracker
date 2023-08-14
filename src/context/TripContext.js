// TripContext.js
import React, { createContext, useContext, useState } from "react";

const TripContext = createContext();

export function useTripContext() {
  return useContext(TripContext);
}

export function TripProvider({ children }) {
  const [trips, setTrips] = useState([]);

  const addNewTrip = (newTrip) => {
    setTrips([...trips, newTrip]);
  };

  const value = {
    trips,
    addNewTrip,
  };

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
}
