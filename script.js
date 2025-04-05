//      https://openweathermap.org/

const API_KEY = "5bbad6486ea33c642146f45fcd041e1d";
const locationInput = document.getElementById("locationInput");
const getGerichteButton = document.getElementById("getGerichteButton");
const gerichteContainer = document.getElementById("gerichteContainer");


















let weatherData;

getGerichteButton.onclick = () => {
  const cityName = locationInput.value.trim();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((weather) => {
      console.log(weather);
      displayWeather(weather);
    });

  locationInput.value = "";
};

function displayWeather({
  name,
  main: { temp },
  weather: [{ description, icon }],
  wind: { speed: speedOfWind },
  sys: { sunrise, sunset },
}) {
  const sunriseTime = new Date(sunrise * 1000); //  Timestamp * 1000 => in Sekunden
  const sunsetTime = new Date(sunset * 1000); //  Timestamp * 1000 => in Sekunden
  console.log(sunriseTime);
  gerichteContainer.innerHTML = `
        <div>
          <h2>${name}</h2>
          <img src="https://openweathermap.org/img/wn/${icon}.png" alt="icon" />
        </div>
        <div>
          <p>Temperatur: ${temp} °C</p>
          <p>Description: ${description}</p>
          <p>speed of Wind: ${speedOfWind} m/s</p>
          <p>Sunrise: ${sunriseTime.getHours()}:${sunriseTime.getMinutes()}:${sunriseTime.getSeconds()} </p>
          <p>Sunset: ${sunsetTime.getHours()}:${sunsetTime.getMinutes()}:${sunsetTime.getSeconds()}</p>
        </div>
      `;
    gerichteContainer.classList.add("weatherContainer");
}

