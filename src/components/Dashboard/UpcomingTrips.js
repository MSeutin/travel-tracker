import React from "react";
import { Link } from "react-router-dom";
import { useTripContext } from "../../context/TripContext";

export default function UpcomingTrips() {
  const { trips } = useTripContext(); // Get the trips from context

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Upcoming Trips</h2>
      {trips.length > 0 ? (
        <ul className="list-disc pl-6">
          {trips.map((trip, index) => (
            <li key={index}>
              <Link
                to={`/dashboard/trip/${trip.id}`}
                className="hover:underline"
              >
                {trip.destination}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center h-full flex-col gap-10">
          <p className="text-lg text-gray-600">No upcoming trips added yet.</p>
          <Link
            to="/dashboard/add"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors"
          >
            Start Planning
          </Link>
        </div>
      )}
    </div>
  );
}
