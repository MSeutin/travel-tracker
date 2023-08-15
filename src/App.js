import ListContainer from "./components/ListContainer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import AddTrip from "./pages/AddTrip";
import Dashboard from "./pages/Dashboard";
import TripCard from "./pages/TripCard";
import Upcoming from "./pages/Upcoming";
import PastTrip from "./pages/PastTrips";
import { AuthContextProvider } from "./context/AuthContext";
import { TripProvider } from "./context/TripContext";
import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";

function App() {
  return (
    <AuthContextProvider>
      <TripProvider>
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
            <Route path="/dashboard/past" element={<Protected><PastTrip /></Protected>} />
            <Route
              path="/dashboard/trip/:tripId"
              element={
                <Protected>
                  <TripCard />
                </Protected>
              }
            />
          </Routes>
        </div>
      </TripProvider>
    </AuthContextProvider>
  );
}

export default App;
