function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector(#wind-speed);
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time);
  
  icon.innerHTML = '<img src="${response.condition.icon_url}" class="weather-app-icon" />'
  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.inneSrHTML = "${response.data.temperature.humidity}%";
  windspeedElement.innerHTML = "${response.data.wind.speed}km/h";
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date){
  let day = date.getDay();

  if (minutes < 10) {
    minutes = '0${minutes}';
  }
  let minutes = date.getminutes();
  let hours = date.getHours();
  let days = {
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  };
  let day = days[date.getDay()];

  return '${day} ${hours}:${minutes}';
}
function searchCity(city) {
  let apiKey = "7e43t102ob02c30d9fabf0c6b85d4a1a";
  let apiURL =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key={apiKey}&units=metric";
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Buenos Aires");
