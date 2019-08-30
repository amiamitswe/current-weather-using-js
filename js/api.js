function countriesAPI(countryName, scarch_location) {
	//----------- country 
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.open("GET", "https://restcountries-v1.p.rapidapi.com/name/"+countryName);
    xhr.setRequestHeader("x-rapidapi-host", "restcountries-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "22684122cbmsh81e8577c798b534p18eef8jsn15af37713613");

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var data = JSON.parse(this.responseText);
            var countryData = new Country(data[data.length - 1].alpha2Code, scarch_location);

            generateScarchLocation(countryData);
        }
    });
    
    xhr.send(data);
    //-----------
}


function weatherAPI(scarch_location) {
	var http = new XMLHttpRequest();
    var apiKey = '8b45a9c08a6d040b6c24a6ba39205398';
    // scarch_location + ',' + 'bd' 
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + scarch_location + '&units=metric&appid=' + apiKey;

    var method = 'GET';

    http.open(method, url);

    http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(scarch_location, data.sys.country, data.weather[0].description.toUpperCase(), data.sys.sunrise, data.sys.sunset);
            weatherData.temperature = data.main.temp;
            weatherData.lon = data.coord.lon;
            weatherData.lat = data.coord.lat;

            updateWeather(weatherData);
        }

        else if (http.readyState === XMLHttpRequest.DONE) {
            alert('Something Wrong');
        }
    }

    http.send();
}