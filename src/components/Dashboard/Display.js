import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Display() {
  const cities = [
    { name: "Tokyo", continent: "Asia" },
    { name: "Cairo", continent: "Africa" },
    { name: "New York", continent: "North America" },
    { name: "Sao Paulo", continent: "South America" },
    { name: "London", continent: "Europe" },
    { name: "Sydney", continent: "Australia" },
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
            `http://worldtimeapi.org/api/timezone/${city.timezone}`
          );
          return { city: city.name, time: response.data.datetime };
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
              <p>{cityTime ? cityTime.time : "Loading..."}</p>
              {/* Display currency exchange and weather information here */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
