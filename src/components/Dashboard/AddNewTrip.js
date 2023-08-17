import React, { useState, useEffect } from "react";
import { useTripContext } from "../../context/TripContext";
import { db, auth } from "../../config/firebase";
import { collection, addDoc, doc, setDoc, getDoc, getDocs } from "firebase/firestore";

export default function AddNewTrip() {
  const { addNewTrip } = useTripContext();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
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
      city: city,
      country: country,
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
    //   const docRef = await addDoc(tripsCollection, newTrip);
    const docRef = await setDoc(doc(tripsCollection, `${newTrip.id}`), newTrip);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    // Call the addNewTrip function with the new trip data
    addNewTrip(newTrip);

    // Clear the form fields after submission
    setCity("");
    setCountry("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="bg-white rounded p-4 mb-4 text-zinc-800">
      <h2 className="text-lg font-semibold mb-2">Add New Trip</h2>
      <form onSubmit={handleSubmit}>
        {/* CITY INPUT  */}
        <div className="mb-2">
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border rounded-md placeholder:text-red-200"
            required
            placeholder="Enter a City"
          />
        </div>
          {/* COUNTRY INPUT  */}
        <div className="mb-2">
          <label htmlFor="country" className="block text-sm font-medium">
            Country
          </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-2 border rounded-md placeholder:text-red-200"
            required
            placeholder="Enter a Country"
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
            className="w-full p-2 border rounded-md text-red-600"
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
            className="w-full p-2 border rounded-md text-red-600"
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
