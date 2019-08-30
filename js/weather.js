"use strict"

function Weather(cityName, cityInCountry, description, sunrise, sunset) {
    this.cityName = cityName;
    this.cityInCountry = cityInCountry;
    this.description = description;
    this.sunrise = Sun_rise_set(sunrise);
    this.sunset = Sun_rise_set(sunset);

    this._cTime = '';
    this._temperature = '';
    this._lon = '';
    this._lat = '';
    this._lon_lat = '';

    function Sun_rise_set(sun_rise_set) {
        var msecond = sun_rise_set;
        var time = new Date(msecond * 1000).toLocaleTimeString();
    
        return time;
    }
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function() {
        return this._temperature;
    },
    set: function(value) {
        this._temperature = value.toFixed(2)+ ' ℃';

        // (value * 1.8 + 32).toFixed(2) + 'F.'
    }
});

Object.defineProperty(Weather.prototype, 'lon', {
    get: function() {
        return this._lon;
    },
    set: function(lon) {
        this._lon = lon;
    }
});

Object.defineProperty(Weather.prototype, 'lat', {
    get: function() {
        return this._lat;
    },
    set: function(lat) {
        this._lat = lat;
    }
});


Object.defineProperty(Weather.prototype, 'lon_lat', {
    get: function() {
        return this._lon_lat = 'Lon '+this._lon + ' ― Lat '+this._lat;
    },
    set: function(lataa) {
        this._lat = lataa;
    }
});

Object.defineProperty(Weather.prototype, 'currentTime', {
    get: function() { 
        return this._cTime =new Date().toLocaleTimeString();
    },
    set: function(ddd) {
        this._cTime = ddd;
    }
});
//---------------------------------------------------------------------------------------------
// country data

function Country(cityInCountry,cityName) {
    this.cityInCountry = cityInCountry;
    this.cityName= cityName;
}

