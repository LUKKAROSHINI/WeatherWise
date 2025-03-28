const apiKey = "623a667f1f2f4324a84113552252703"; // Replace with your WeatherAPI key

function fetchWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weatherInfo").innerHTML = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="Weather Icon">
            `;
        })
        .catch(error => alert("Failed to retrieve weather data."));
}
