function displayTemperature(response) {
  let temperatureElement = document.querySelector("#location-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#new-location-name");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = `☀️${temperature}°c`;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#place-name-input");
  let city = searchInputElement.value;
  let apiKey = "37e9da10fet0ob8e3fe3769dc4fd8d70";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
  cityElement.innerHTML = city;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
