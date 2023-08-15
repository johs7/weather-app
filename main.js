const apiKey = "694fe63161bb03b41e279a6ee9a880c2";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";
}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
