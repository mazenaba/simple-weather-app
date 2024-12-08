


var cityInput = document.getElementById('cityInput');
var searchBtn = document.getElementById('searchBtn');
var weatherInfo = document.getElementById('weatherInfo');

searchBtn.addEventListener('click', () => {
    var cityName = cityInput.value;
    var apiKey = 'bc2ef02b6657402c8ac120446240812';
    var apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var city = data.location.name;
            var temperature = data.current.temp_c;
            var description = data.current.condition.text;
            var iconCode = data.current.condition.icon;
            var iconUrl = `https:${iconCode}`; 

            weatherInfo.innerHTML = `
                <h2>${city}</h2>
                <p>${temperature}°C</p>
                <p>${description}</p>
                <img src="${iconUrl}" alt="Weather Icon">
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = 'Error fetching weather data. Please try again.';
        });
});
