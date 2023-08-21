import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTripContext } from "../context/TripContext";
import { db, auth } from "../config/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import DashboardNav from "../components/Dashboard/DashboardNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faSun,
  faCoins,
  faCartFlatbedSuitcase,
  faSackDollar,
  faImage,
  faClipboard,
  faPassport,
  faCalendarDays,
  faHandHolding,
  faFaceSmileWink,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/TripCards/Card";
import { ViewPackingList, EditPackingList } from "../components/PackingLists";
import axios from "axios";

// TRIP CARDS COMPONENT
export default function TripCards() {
  const { tripId } = useParams();
  const { trips, addTripToContext, deleteTrip } = useTripContext();
  const [currentTrip, setCurrentTrip] = useState(null);
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);

  // forecast dummy data - will use api soon
  const weatherForecast = [
    { day: "Monday", icon: "☀️", temperature: "25°C" },
    { day: "Tuesday", icon: "⛅️", temperature: "23°C" },
    { day: "Wednesday", icon: "🌦️", temperature: "20°C" },
    { day: "Thursday", icon: "🌧️", temperature: "18°C" },
    { day: "Friday", icon: "🌦️", temperature: "22°C" },
    { day: "Saturday", icon: "☀️", temperature: "24°C" },
    { day: "Sunday", icon: "⛅️", temperature: "23°C" },
  ];

  let navigate = useNavigate();

  // Function to delete the trip from the database
  const deleteTripFromDatabase = async (tripId) => {
    const user = auth.currentUser;
    if (!user) return;
    const tripRef = doc(db, `users/${user.uid}/trips/${tripId}`);
    try {
      await deleteDoc(tripRef);
    } catch (error) {
      console.error("Error deleting trip from database:", error);
    }
  };

  // Function to delete the trip locally
  const deleteTripLocally = (tripId) => {
    // Delete the trip locally
    deleteTrip(tripId);
  };

  // handle delete button
  const handleDeleteTrip = async (tripId) => {
    try {
      // Delete the trip from the database
      await deleteTripFromDatabase(tripId);

      // Delete the trip locally
      deleteTripLocally(tripId);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
  };

  // WEATHER FETCHING CODE
  const fetchWeather = async () => {
    // fecth weather logic
    try {
      // Implement weather API call using axios or another library
      // Update the 'weather' state with fetched data
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  // TIME FETCHING CODE
  const fetchTime = async () => {
    // fecth time logic
    try {
      if (currentTrip) {
        // Implement time API call using axios or another library
        // Update the 'time' state with fetched data
        // api key
        const API_KEY = process.env.REACT_APP_IPGEOLOCATION_API_KEY;
        const lat = currentTrip.latitude;
        const lon = currentTrip.longitude;
        const url = `https://api.ipgeolocation.io/timezone?apiKey=${API_KEY}&lat=${lat}&long=${lon}`;
        const response = await axios.get(url, {
          headers: {
            Accept: "application/json", // Set the 'accept' header to JSON
          },
        });
        const timeArray = response.data.time_24.split(":");
        const hours = timeArray[0];
        const minutes = timeArray[1];
        setHours(hours);
        setMinutes(minutes);
      }
    } catch (error) {
      console.error("Error fetching time:", error);
    }
  };

  useEffect(() => {
    // Find the trip with the matching tripId in the trips array
    const foundTrip = trips.find((trip) => trip.id === parseInt(tripId));

    // Update the currentTrip state with the found trip
    setCurrentTrip(foundTrip);

    // Update the currentTrip state with the found trip
    if (foundTrip) {
      fetchTime();
      // Update time every 60 seconds
      const updateTimeInterval = setInterval(fetchTime, 60000);

      // Clean up interval when component unmounts or trip changes
      return () => {
        clearInterval(updateTimeInterval);
      };
    }
  }, [currentTrip, trips, tripId]);

  if (!currentTrip) {
    return <div>Loading...</div>;
  }

  const { city, country, startDate, endDate } =
    currentTrip;

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
              {city}, {country}
              <button
                className="text-red-800 hover:text-red-600 ml-3"
                onClick={() => handleDeleteTrip(currentTrip.id)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </h3>
            {/* Local Time */}
            <span className="text-xl font-bold text-white bg-indigo-600 p-2 rounded-md ml-5">
              {hours}<span className="animate-pulse">:</span>{minutes}
            </span>
          </div>
          {/* Dates */}
          <div className="text-zinc-400">
            <p className="flex gap-10">
              <span>
                Start Date: <span className="text-zinc-300">{startDate}</span>
              </span>
              <span>
                End Date: <span className="text-zinc-300">{endDate}</span>
              </span>
            </p>
          </div>
        </div>

        {/* FEATURES */}
        {/* ROW 1 */}
        <div className="w-full px-2 mb-4 flex gap-2">
          {/* Weather Information */}
          <Card
            title="Weather Information"
            description="Stay informed about the weather during your trip"
            icon={faSun}
            iconColor={"f5f83a"}
            weatherForecast={weatherForecast}
          />

          {/* Currency Exchange Information */}
          <Card
            title="Currency Information"
            description="Stay informed about currency exchange during your trip"
            icon={faCoins}
            iconColor={"22511f"}
            bgColor={"bg-red-200"}
            textColor={"text-red-600"}
          />
        </div>

        {/* ROW 2 */}
        <div className="w-full px-2 mb-4 flex gap-2">
          {/* Packing List */}
          <Card
            title="Packing List"
            description="Stay informed about the packing list during your trip"
            icon={faCartFlatbedSuitcase}
            iconColor={"420a0a"}
            viewContent={<ViewPackingList />}
            editContent={<EditPackingList />}
          />

          {/* Budgeting */}
          <Card
            title="Budgeting"
            description="Stay informed about the budget during your trip"
            icon={faSackDollar}
            iconColor={"42bc32"}
            bgColor={"bg-red-200"}
            textColor={"text-red-600"}
          />
        </div>

        {/* ROW 3 */}
        <div className="w-full px-2 mb-4 flex gap-2">
          {/* Upload Photos */}
          <Card
            title="Upload Photos"
            description="Stay informed about the photos during your trip"
            icon={faImage}
            iconColor={"7d24c6"}
          />

          {/* Notes */}
          <Card
            title="Notes"
            description="Keep your notes during your trip"
            icon={faClipboard}
            iconColor={"222222"}
            bgColor={"bg-red-200"}
            textColor={"text-red-600"}
          />
        </div>

        {/* ROW 4 */}
        <div className="w-full px-2 mb-4 flex gap-2">
          {/* Travel Documents */}
          <Card
            title="Travel Documents"
            description="Keep copies of your travel documents"
            icon={faPassport}
            iconColor={"136aa0"}
          />

          {/* Itineraries */}
          <Card
            title="Itineraries"
            description="Keep your itineraries during your trip"
            icon={faCalendarDays}
            iconColor={"f2f2f2"}
            bgColor={"bg-red-200"}
            textColor={"text-red-600"}
          />
        </div>

        {/* ROW 5 */}
        <div className="w-full px-2 mb-4 flex gap-2">
          {/* Crowd Sourced */}
          <Card
            title="User's Favorites"
            description="Find what locals recommend (crowd sourced)"
            icon={faHandHolding}
            iconColor={"511f50"}
          />

          {/* Friends */}
          <Card
            title="Friends"
            description="Find friends during your trip"
            icon={faFaceSmileWink}
            iconColor={"921c3f"}
            bgColor={"bg-red-200"}
            textColor={"text-red-600"}
          />
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
