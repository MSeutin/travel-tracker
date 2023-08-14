import React, { useState } from "react";

export default function AddNewTrip() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle submitting the form data here,
    // such as sending it to a server or updating state.
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
