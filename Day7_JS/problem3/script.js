const resultDiv = document.getElementById("result");

// Function to get coordinates from city name
const getCoordinates = (city) => {
    const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;

    return fetch(geoURL)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            if (!data.results) {
                throw new Error("Invalid city name");
            }

            const { latitude, longitude, name, country } = data.results[0];
            return { latitude, longitude, name, country };
        });
};


// ===============================
// ✅ PROMISE VERSION
// ===============================
const getWeatherPromise = () => {

    const city = document.getElementById("city").value;

    resultDiv.innerHTML = "Loading...";

    getCoordinates(city)
        .then(location => {

            const weatherURL =
                `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true`;

            return fetch(weatherURL)
                .then(res => res.json())
                .then(weatherData => ({ location, weatherData }));
        })
        .then(({ location, weatherData }) => {

            const weather = weatherData.current_weather;

            resultDiv.innerHTML = `
                <h3>${location.name}, ${location.country}</h3>
                <p>🌡 Temperature: ${weather.temperature}°C</p>
                <p>💨 Wind Speed: ${weather.windspeed} km/h</p>
                <p>🧭 Wind Direction: ${weather.winddirection}°</p>
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
};


// ===============================
// ✅ ASYNC / AWAIT VERSION
// ===============================
const getWeatherAsync = async () => {

    try {
        const city = document.getElementById("city").value;
        resultDiv.innerHTML = "Loading...";

        const location = await getCoordinates(city);

        const weatherURL =
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true`;

        const response = await fetch(weatherURL);

        if (!response.ok) {
            throw new Error("Weather data fetch failed");
        }

        const data = await response.json();
        const weather = data.current_weather;

        resultDiv.innerHTML = `
            <h3>${location.name}, ${location.country}</h3>
            <p>🌡 Temperature: ${weather.temperature}°C</p>
            <p>💨 Wind Speed: ${weather.windspeed} km/h</p>
            <p>🧭 Wind Direction: ${weather.winddirection}°</p>
        `;

    } catch (error) {
        resultDiv.innerHTML =
            `<p style="color:red;">${error.message}</p>`;
    }
};