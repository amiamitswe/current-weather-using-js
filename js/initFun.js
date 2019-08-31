"use strict"

function alertMessag(alertMsg) {
    modal.style.display = "block"; 
    document.querySelector('#model_body_text').textContent = alertMsg;
}

function Sun_rise_set(sun_rise_set) {
    var msecond = sun_rise_set;
    var time = new Date(msecond * 1000).toLocaleTimeString();

    return time;
}
