import React, { useState, useEffect } from "react";
import { useTripContext } from "../../context/TripContext";
import { db, auth } from "../../config/firebase";
import { collection, addDoc, doc, setDoc, getDoc, getDocs } from "firebase/firestore";

export default function AddNewTrip() {
  const { addNewTrip } = useTripContext();
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();

    // get the currently logged in user
    const user = auth.currentUser;

    // if no user is logged in
    if (!user) return;

    // Create a new trip object with the form data
    const newTrip = {
      id: Date.now(),
      destination,
      startDate,
      endDate,
    };

    // Reference to the "users" collection
    const usersCollection = collection(db, "users");

    // Reference to the "trips" subcollection under the user's document
    const userRef = doc(usersCollection, user.uid);
    const tripsCollection = collection(userRef, "trips");

    // Add the new trip to the "trips" collection
    try {
      const docRef = await addDoc(tripsCollection, newTrip);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    // Call the addNewTrip function with the new trip data
    addNewTrip(newTrip);

    // Clear the form fields after submission
    setDestination("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="bg-white rounded p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Add New Trip</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="destination" className="block text-sm font-medium">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="startDate" className="block text-sm font-medium">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-sm font-medium">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-zinc-500 text-white py-2 px-4 rounded-md hover:bg-zinc-600"
        >
          Add Trip
        </button>
      </form>
    </div>
  );
}
