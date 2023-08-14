import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTripContext } from "../../context/TripContext";

export default function TripCard() {
  //   const { id, destination, startDate, endDate } = trip;
  const { tripId } = useParams();
  const { trips } = useTripContext();
  const [currentTrip, setCurrentTrip] = useState(null);

  useEffect(() => {
    // Find the trip with the matching tripId in the trips array
    const foundTrip = trips.find((trip) => trip.id === parseInt(tripId));

    // Console log to see if the found trip is correct
    console.log("Found Trip:", foundTrip);

    // Update the currentTrip state with the found trip
    setCurrentTrip(foundTrip);
  }, [trips, tripId]);

  // Console log to see if the currentTrip is correct
  console.log("Current Trip:", currentTrip);

  if (!currentTrip) {
    return <div>Loading...</div>;
  }

  const { destination, startDate, endDate } = currentTrip;

  return (
    <div className="border rounded p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{destination}</h3>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      <Link
        to={`/dashboard/trip/${tripId}`}
        className="text-md hover:underline"
      >
        View Details and Edit
      </Link>
    </div>
  );
}
