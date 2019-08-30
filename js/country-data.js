

function generateScarchLocation(countryData) {
    var newLocation =  countryData.cityName + ',' + countryData.cityInCountry;
    

    console.log(newLocation);
        weatherAPI(newLocation);
}