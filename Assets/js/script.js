function searchWeather(event) {
  event.preventDefault();

  var apiKey = "53736836ebc94d892bdc0b54c089eeab";
  var city = document.getElementById("searchBox").value;
  var queryURL =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=5&appid=" +
    apiKey;

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data); // Log the weather data to the console

      var currentWeatherElement = document.getElementById("currentWeather");
      currentWeatherElement.innerHTML =
        "Temperature: " + data[0].temperature + "°C";

      var forecastContainer = document.getElementById("forecastContainer");
      forecastContainer.innerHTML = "";

      for (var i = 1; i <= 5; i++) {
        var forecastElement = document.createElement("div");
        forecastElement.classList.add("col");
        forecastElement.textContent = "Day " + i;

        forecastContainer.appendChild(forecastElement);
      }
    });
}
