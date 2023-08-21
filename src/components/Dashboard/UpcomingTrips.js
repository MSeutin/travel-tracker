import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTripContext } from "../../context/TripContext";
import { db, auth } from "../../config/firebase";
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";

export default function UpcomingTrips() {
  // get trips from context
  const { trips, addTripToContext } = useTripContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const tripsRef = collection(db, "users", user.uid, "trips");
    const tripsQuery = query(tripsRef);

    // Set up the snapshot listener
    const unsubscribe = onSnapshot(tripsQuery, (querySnapshot) => {
      const updatedTrips = [];
      querySnapshot.forEach((doc) => {
        updatedTrips.push(doc.data());
      });

      // Filter out existing trips from fetched trips
      const newTrips = updatedTrips.filter((newTrip) =>
        trips.every((existingTrip) => existingTrip.id !== newTrip.id)
      );

      // Add only new trips to the state
      newTrips.forEach((trip) => {
        addTripToContext(trip);
      });

      setLoading(false);
    });

    return () => {
      // Unsubscribe from the listener when component unmounts
      unsubscribe();
    };
  }, [addTripToContext, trips]);


  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Upcoming Trips</h2>
      {trips.length > 0 ? (
        <ul className="flex flex-wrap gap-8">
          {trips.map((trip, index) => (
              <Link
                key={index}
                to={`/dashboard/trip/${trip.id}`}
                className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
              >
                {trip.city}, {trip.country} - {trip.startDate}
              </Link>
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
