async function fetchWeather() {
  try {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = "Seattle"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 
       displayWeather(data); 
       
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
fetchWeather();



function displayWeather(data) {

     const icon = document.createElement('img');
     icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
     document.querySelector('#weather').appendChild(icon);
     
     const temperature = document.querySelector("#weather-temp");
     temperature.textContent = `${data.main.temp}\u00B0 F`;
     
     const description = document.querySelector("#weather-description");
     description.textContent = data.weather[0].main;
               
     }
     
  
  