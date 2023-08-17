import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faClock } from "@fortawesome/free-solid-svg-icons"; // Import the clock icon

export default function WorldClocks() {
  const cities = [
    { name: "Tokyo", continent: "Asia", timezone: "Asia/Tokyo" },
    { name: "Cairo", continent: "Africa", timezone: "Africa/Cairo" },
    { name: "New York", continent: "North America", timezone: "America/New_York" },
    { name: "Sao Paulo", continent: "South America", timezone: "America/Sao_Paulo" },
    { name: "London", continent: "Europe", timezone: "Europe/London" },
    { name: "Sydney", continent: "Australia", timezone: "Australia/Sydney" },
  ];

  // You can define your API calls for currency exchange, time, and weather here
  
  const [cityTimes, setCityTimes] = useState([]);

useEffect(() => {
  // Fetch time information for each city
  const fetchCityTimes = async () => {
    const cityTimeData = await Promise.all(
      cities.map(async (city) => {
        try {
          const response = await axios.get(
            `https://worldtimeapi.org/api/timezone/${city.timezone}`
          );
          const datetime = response.data.datetime;
          const [datePart, timePart] = datetime.split("T");
          const [year, month, day] = datePart.split("-").map(Number);
          const [time, _] = timePart.split(".");
          const [hours, minutes, seconds] = time.split(":").map(Number);
          return { city: city.name, time: `${hours}:${minutes}` };
        } catch (error) {
          console.error(`Error fetching time for ${city.name}:`, error);
          return { city: city.name, time: "Time not available" };
        }
      })
    );
    setCityTimes(cityTimeData);
  };

  fetchCityTimes();

  // Update city times every minute
  const intervalId = setInterval(() => {
    fetchCityTimes();
  }, 60000); // 60000 milliseconds = 1 minute

  // Clean up the interval when the component unmounts
  return () => {
    clearInterval(intervalId);
  };
}, []);


  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-2">Featured Cities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cities.map((city) => {
          const cityTime = cityTimes.find((ct) => ct.city === city.name);
          return (
            <div
              key={city.name}
              className="border p-4 rounded-md flex flex-col items-center hover:bg-zinc-500 hover:text-white justify-center text-center"
            >
              <h3 className="text-xl font-semibold">{city.name}</h3>
              <p>
                {cityTime ? (
                  <>
                    <span className=" text-blue-500">
                      {cityTime.time.split(":")[0]}
                    </span>
                    <span className="text-gray-400 animate-pulse">:</span>
                    <span className=" text-red-500">
                      {cityTime.time.split(":")[1]}
                    </span>
                  </>
                ) : (
                  "Loading..."
                )}
              </p>
              {/* Display currency exchange and weather information here */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
