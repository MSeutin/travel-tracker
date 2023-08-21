// TripContext.js
import React, { createContext, useContext, useState } from "react";

const TripContext = createContext();

export function useTripContext() {
  return useContext(TripContext);
}

export function TripProvider({ children }) {
  const [trips, setTrips] = useState([]);

  const addTripToContext= (newTrip) => {
    setTrips((prevTrips) => [...prevTrips, newTrip]);
  };

  const deleteTrip = (tripId) => {
    setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== tripId));

  };

  const value = {
    trips,
    addTripToContext,
    deleteTrip,
  };

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
}
