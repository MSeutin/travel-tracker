import { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext'
import { DashboardNav, UpcomingTrips, WorldClocks } from '../components/Dashboard';
import { useTripContext } from '../context/TripContext';


export default function Dashboard() {
  const { user, logOut } = UserAuth();
  const { trips, addTripToContext, deleteTrip } = useTripContext();

  return (
    <div className="flex">
      {/* Left Navigation Column */}
      <div className="w-1/8 bg-gray-800 text-white">
        <DashboardNav />
      </div>

      {/* Content Column */}
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-6">
          Welcome, {user?.displayName}
        </h1>
        {/* Your content goes here */}
        <WorldClocks />
        <UpcomingTrips />
      </div>
    </div>
  );
}