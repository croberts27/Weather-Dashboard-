function runAPI(){
    var apiKey = "53736836ebc94d892bdc0b54c089eeab";
    var city = document.getElementById("searchBox").value;
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + apiKey;

    fetch(queryURL)
        .then(function(response){
            return response.json();
        }) 
        console.log(response)
}
