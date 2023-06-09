function runAPI() {
    var apiKey = "53736836ebc94d892bdc0b54c089eeab";
    var city = document.getElementById("searchBox").value;
    var queryURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + apiKey;

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data); // Log the weather data to the console

            var currentWeatherElement = document.getElementById("currentWeather");
            currentWeatherElement.innerHTML = "Temperature: " + data[0].temperature + "°C";

            var day1Element = document.getElementById("day1");
            day1Element.textContent = "Monday";

            var day2Element = document.getElementById("day2");
            day2Element.textContent = "Tuesday";

            var day3Element = document.getElementById("day3");
            day3Element.textContent = "Wednesday";

            var day4Element = document.getElementById("day4");
            day4Element.textContent = "Thursday";

            var day5Element = document.getElementById("day5");
            day5Element.textContent = "Friday";
        });
}
