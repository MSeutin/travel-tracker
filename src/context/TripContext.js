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

  const deleteTrip = (tripId) => {
    setTrips(trips.filter((trip) => trip.id !== tripId));
  };

  const value = {
    trips,
    addNewTrip,
    deleteTrip,
  };

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
}
