document.addEventListener( 'DOMContentLoaded', cityWeather)


function weatherDataFetch(city) {
    var key = '82ada96bdd6be5d8a4d0ea1c7e67749e';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function(data) {
            console.log(data);
        })
.
    catch(function () {

    });
}
function cityWeather (e) {
    weatherDataFetch('Tallinn');
}