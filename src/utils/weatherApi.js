import axios from "axios";

export const fetchWeather = async (lat, lon) => {
  try {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/forecast.json?q=${lat},${lon}&days=3&key=${API_KEY}`;
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json", // Set the 'accept' header to JSON
      },
    });
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
        const forecastDays = response.data.forecast.forecastday;

     const weatherInfo = forecastDays.map((dayData) => {
      const dateString = dayData.date;
      const dateParts = dateString.split("-");
      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1;
      const day = parseInt(dateParts[2], 10);
      const specificDate = new Date(year, month, day);
      // below is what is returning
      const dayOfTheWeek = weekday[specificDate.getDay()];
      const avgTemp = dayData.day.avgtemp_f;
      const condition = dayData.day.condition.text;
      const iconUrl = dayData.day.condition.icon;

      return { dayOfTheWeek, avgTemp, condition, iconUrl };
    });

    return weatherInfo;

  } catch (error) {
    console.error("Error fetching weather:", error);
    // Return placeholder values in case of an error
    const placeholderWeatherInfo = [
      { dayOfTheWeek: "Error", avgTemp: "N/A", condition: "N/A", iconUrl: "" },
      { dayOfTheWeek: "Error", avgTemp: "N/A", condition: "N/A", iconUrl: "" },
      { dayOfTheWeek: "Error", avgTemp: "N/A", condition: "N/A", iconUrl: "" },
    ];

    return placeholderWeatherInfo;
  }
};
