import { useState, useEffect } from "react";
import Card from "./Card";
import { fetchWeather, weatherData } from "../../utils/weatherApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function WeatherCard({currentTrip}) {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const getWeather = async () => {
      const response = await fetchWeather(
        currentTrip.latitude,
        currentTrip.longitude
      );
      setWeather(response);
    };
    getWeather();
  }, [currentTrip.latitude, currentTrip.longitude]);

  // Weather forecast content JSX
  const weatherForecastContent = (
    <div className="mt-4">
      <p className="text-sm font-semibold text-orange-700">Weather Forecast</p>
      <div className="flex justify-around gap-2 overflow-x-scroll">
        {weather &&
          weather.map((dayForecast, index) => (
            <div
              key={index}
              className="flex flex-col flex-grow gap-1 items-center bg-gray-200 p-2 rounded-md text-zinc-700"
            >
              <div className="text-sm font-semibold ">
                {dayForecast.dayOfTheWeek}
              </div>
              <div className="text-sm">{dayForecast.condition}</div>
              <img
                src={dayForecast.iconUrl} // Use the iconUrl for the weather icon
                alt={`Weather icon for ${dayForecast.condition}`}
                className="h-6 w-6"
              />
              <div className="text-sm">{dayForecast.avgTemp}°F</div>
            </div>
          ))}
      </div>
    </div>
  );

    return (
      <Card
        title="Weather Information"
        description="Stay informed about the weather during your trip"
        icon={faSun}
        iconColor={"f5f83a"}
        weatherForecastContent={weatherForecastContent}
      />
    );
}
