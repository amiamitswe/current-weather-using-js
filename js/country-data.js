"use strict"

function generateScarchLocation(countryData) {
    var newLocation = countryData.cityName + ',' + countryData.cityInCountry;

    weatherAPI(newLocation);
}
