"use strict"

function Weather(cityName, description, sunrise, sunset) {
    this.cityName = cityName;
    this.description = description;
    this.sunrise = Sunrise(sunrise);
    this.sunset = Sunset(sunset);

    this._temperature = '';
    this._temp_rence = '';
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function() {
        return this._temperature;
    },
    set: function(value) {
        this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';
    }
})

function Sunrise(sunrise) {
    var time = new Date();
    var hour = time.getHours(sunrise);
    var minute = time.getMinutes(sunrise);
    var second = time.getSeconds(sunrise);

    return hour +' : ' +minute+' : '+second;
}

function Sunset(sunset) {
    var time = new Date();
    var hour = time.getHours(sunset);
    var minute = time.getMinutes(sunset);
    var second = time.getSeconds(sunset);

    return hour +' : ' +minute+' : '+second;
}