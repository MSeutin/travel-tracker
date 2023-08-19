import { useState } from "react";
import ListContainer from "./components/PackingLists/PackingListContainer";
import Header from "./components/Home/Header";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import AddTrip from "./pages/AddTrip";
import Dashboard from "./pages/Dashboard";
import TripCards from "./pages/TripCards";
import Upcoming from "./pages/Upcoming";
import PastTrip from "./pages/PastTrips";
import { AuthContextProvider } from "./context/AuthContext";
import { TripProvider } from "./context/TripContext";
import { PackingListProvider } from "./context/PackingListContext";
import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";

function App() {
  return (
    <AuthContextProvider>
      <TripProvider>
        <PackingListProvider>
          <div className="bg-zinc-800 text-zinc-200 font-mono min-h-screen">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route
                path="/dashboard"
                element={
                  <Protected>
                    <Dashboard />
                  </Protected>
                }
              />
              <Route
                path="/dashboard/add"
                element={
                  <Protected>
                    <AddTrip />
                  </Protected>
                }
              />
              <Route
                path="/dashboard/upcoming"
                element={
                  <Protected>
                    <Upcoming />
                  </Protected>
                }
              />
              <Route
                path="/dashboard/past"
                element={
                  <Protected>
                    <PastTrip />
                  </Protected>
                }
              />
              <Route
                path="/dashboard/trip/:tripId"
                element={
                  <Protected>
                    <TripCards />
                  </Protected>
                }
              />
              <Route
                path="/dashboard/packing-list"
                element={
                  <Protected>
                    <ListContainer />
                  </Protected>
                }
              />
            </Routes>
          </div>
        </PackingListProvider>
      </TripProvider>
    </AuthContextProvider>
  );
}

export default App;
