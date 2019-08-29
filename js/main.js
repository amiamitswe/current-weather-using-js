"use strict"

searchButton.addEventListener('click', searchWeather);

function searchWeather() {

    loadingText.style.display = 'block';
    weaterResult.style.display = 'none';

    var cityName = searchCity.value.trim().toUpperCase();
    if (cityName.length === 0) {
        searchCity.value = '';
        return alert('Please give a city name');
    }
    var http = new XMLHttpRequest();
    var apiKey = '8b45a9c08a6d040b6c24a6ba39205398';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;
    var method = 'GET';

    http.open(method, url);

    http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase(), data.sys.sunrise, data.sys.sunset );
            weatherData.temperature = data.main.temp;

            updateWeather(weatherData);
        }

        else if (http.readyState === XMLHttpRequest.DONE) {
            alert('Something Wrong');
        }
    }

    http.send();
}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescripthon.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;

    sunrise.textContent = weatherData.sunrise;
    sunset.textContent = weatherData.sunset;

    loadingText.style.display = 'none';
    weaterResult.style.display = 'block';
}