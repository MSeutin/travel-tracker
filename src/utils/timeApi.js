import axios from 'axios';

export const fetchTime = async (lat, lon) => {
    // fetch time logic
    try {
        // Implement time API call using axios or another library
        const API_KEY = process.env.REACT_APP_IPGEOLOCATION_API_KEY;
        const url = `https://api.ipgeolocation.io/timezone?apiKey=${API_KEY}&lat=${lat}&long=${lon}`;
        const response = await axios.get(url, {
          headers: {
            Accept: "application/json", // Set the 'accept' header to JSON
          },
        });
        const timeArray = response.data.time_24.split(":");
        const hours = timeArray[0];
        const minutes = timeArray[1];
        return { hours, minutes };

    } catch (error) {
        console.error("Error fetching time:", error);
        // return default values
        return { hours: "--", minutes: "--" };
    }
}