function getWeather() {
    const location = document.getElementById('locationInput').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=46bf28032a2a1b2df2d81e07d979c830&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const weather = data.weather[0].main.toLowerCase();
            let weatherIcon;

            switch (weather) {
                case 'clear':
                    weatherIcon = '<i class="fas fa-sun"></i>';
                    break;
                case 'clouds':
                    weatherIcon = '<i class="fas fa-cloud"></i>';
                    break;
                case 'rain':
                    weatherIcon = '<i class="fas fa-cloud-rain"></i>';
                    break;
                case 'snow':
                    weatherIcon = '<i class="fas fa-snowflake"></i>';
                    break;
                case 'thunderstorm':
                    weatherIcon = '<i class="fas fa-bolt"></i>';
                    break;
                case 'drizzle':
                    weatherIcon = '<i class="fas fa-cloud-showers-heavy"></i>';
                    break;
                default:
                    weatherIcon = '<i class="fas fa-smog"></i>';
            }

            weatherInfo.innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>${weatherIcon} Temperature: ${data.main.temp}°C</p>
                <p>${weatherIcon} Weather: ${data.weather[0].main}</p>
                <p>${weatherIcon} Description: ${data.weather[0].description}</p>
                <p>${weatherIcon} Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        });
}
