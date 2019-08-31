"use strict"

searchButton.addEventListener('click', searchWeather);

function searchWeather() {

    loadingText.style.display = 'block';
    weaterResult.style.display = 'none';
    error_image.style.display = 'none';

    var cityName = searchCity.value.trim().toUpperCase();
    var countryName = searchCountry.value.trim().toUpperCase();

    if (cityName.length === 0) {
        searchCity.value = '';
        loadingText.style.display = 'none';
        alertMsg = 'Please give a city name';
        return alertMessag(alertMsg);
    }

    if (countryName.length !== 0) {

        countriesAPI(countryName, cityName);
        return;
    }

    weatherAPI(cityName);
}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    cityInCountry.textContent = weatherData.cityInCountry;
    weatherDescripthon.textContent = weatherData.description;

    weatherTemperature.textContent = weatherData.temperature;
    cFlag.innerHTML = "<img src=\"https://www.countryflags.io/" + weatherData.cityInCountry + "/flat/64.png\" >";
    currentTime.textContent = weatherData.currentTime;

    temp_rence.textContent = weatherData.lon_lat;

    sunrise.textContent = weatherData.sunrise;
    sunset.textContent = weatherData.sunset;

    loadingText.style.display = 'none';
    error_image.style.display = 'none';
    weaterResult.style.display = 'block';
}

