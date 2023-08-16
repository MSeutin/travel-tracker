import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTripContext } from "../context/TripContext";
import DashboardNav from "../components/Dashboard/DashboardNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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


  // RETURN
  return (
    <div className="flex">
      {/* LEFT NAV COLUMN */}
      <div className="w-1/8 bg-gray-800 text-white">
        <DashboardNav />
      </div>

      {/* CONTENT COLUMN */}
      <div className="flex-grow border rounded p-6 mb-4">
        {/* Title Line  */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {/* Destination */}
            <h3 className="text-2xl font-semibold">
              {destination}
              <button className="text-red-800 hover:text-red-600 ml-3">
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </h3>
            {/* Local Time */}
            <span className="text-zinc-400 ml-5">
              {new Date().toLocaleTimeString()}
            </span>
          </div>
          {/* Dates */}
          <div className="text-zinc-400">
            <p className="flex gap-10">
              <p>
                Start Date: <span className="text-zinc-300">{startDate}</span>
              </p>
              <p>
                End Date: <span className="text-zinc-300">{endDate}</span>
              </p>
            </p>
          </div>
        </div>

        {/* FEATURES */}
        {/* ROW 1 */}
        <div className="w-full px-2 mb-4 flex gap-2">
          {/* Weather Information */}
          <div className="w-1/2">
            <div className="bg-blue-200 rounded-md p-2 mb-2">
              <p className="text-blue-600 font-semibold">Weather Information</p>
              <p className="text-sm text-zinc-600">
                Stay informed about the weather during your trip.
              </p>
            </div>
          </div>

          {/* Currency Exchange Information */}
          <div className="w-1/2">
            <div className="bg-red-200 rounded-md p-2 mb-2">
              <p className="text-red-600 font-semibold">Currency Information</p>
              <p className="text-sm text-zinc-600">
                Stay informed about currency exchange during your trip.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="w-full px-2 mb-4 flex gap-2">
          {/* Packing List */}
          <div className="w-1/2">
            <div className="bg-blue-200 rounded-md p-2 mb-2">
              <p className="text-blue-600 font-semibold">Packing List</p>
              <p className="text-sm text-zinc-600">
                Stay informed about the packing list during your trip.
              </p>
            </div>
          </div>

          {/* Budgeting */}
          <div className="w-1/2">
            <div className="bg-red-200 rounded-md p-2 mb-2">
              <p className="text-red-600 font-semibold">Budget Information</p>
              <p className="text-sm text-zinc-600">
                Stay informed about the budget during your trip.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="w-full px-2 mb-4 flex gap-2">
          {/* Upload Photos */}
          <div className="w-1/2">
            <div className="bg-blue-200 rounded-md p-2 mb-2">
              <p className="text-blue-600 font-semibold">Upload Photos</p>
              <p className="text-sm text-zinc-600">
                Stay informed about the photos during your trip.
              </p>
            </div>
          </div>

          {/* Notes */}
          <div className="w-1/2">
            <div className="bg-red-200 rounded-md p-2 mb-2">
              <p className="text-red-600 font-semibold">Notes</p>
              <p className="text-sm text-zinc-600">
                Stay informed about the notes during your trip.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 4 */}
        <div className="w-full px-2 mb-4 flex gap-2">
          {/* Travel Documents */}
          <div className="w-1/2">
            <div className="bg-blue-200 rounded-md p-2 mb-2">
              <p className="text-blue-600 font-semibold">Travel Documents</p>
              <p className="text-sm text-zinc-600">
                Stay informed about the travel documents during your trip.
              </p>
            </div>
          </div>

          {/* Itineraries */}
          <div className="w-1/2">
            <div className="bg-red-200 rounded-md p-2 mb-2">
              <p className="text-red-600 font-semibold">Itineraries</p>
              <p className="text-sm text-zinc-600">
                Stay informed about the itineraries during your trip.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 5 */}
        <div className="w-full px-2 mb-4 flex gap-2">
          {/* Places to Visit */}
          <div className="w-1/2">
            <div className="bg-blue-200 rounded-md p-2 mb-2">
              <p className="text-blue-600 font-semibold">Places to Visit</p>
              <p className="text-sm text-zinc-600">
                Stay informed about the places to visit during your trip.
              </p>
            </div>
          </div>

          {/* Friends */}
          <div className="w-1/2">
            <div className="bg-red-200 rounded-md p-2 mb-2">
              <p className="text-red-600 font-semibold">Friends</p>
              <p className="text-sm text-zinc-600">
                Stay informed about the friends during your trip.
              </p>
            </div>
          </div>
        </div>

        {/* View Details Link */}
        <Link
          to={`/dashboard/trip/${tripId}`}
          className="text-md hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
