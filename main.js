const apiKey = "694fe63161bb03b41e279a6ee9a880c2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherIcon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const card = document.querySelector(".card");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        searchBox.value = "";
    }
    else{
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";
    
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "/images/clouds.png";
            card.style.backgroundImage = "linear-gradient(270.3deg, rgba(84,213,228,1) 0.2%, rgba(68,36,165,1) 100%)";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "/images/clear.png";
            card.style.backgroundImage = "linear-gradient(94.3deg, rgba(255, 167, 41, 1) 0%, rgba(255, 86, 1, 1) 100%)";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "/images/rain.png";
            card.style.backgroundImage = "linear-gradient(94.3deg, rgba(26,33,64,1) 10.9%, rgba(81,84,115,1) 87.1%)";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "/images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "/images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

function selectCountry(country) {
    // Llama a la función checkWeather con el nombre del país seleccionado
    checkWeather(country);
}
