// const weatherQuery = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;
const weatherQuery = `https://api.openweathermap.org/data/2.5/weather?zip=33755&appid=3d208d14277c4e995611ed3c50000ec9&units=imperial`;

//Gets the weather data from the OpenWeatherMap API
const getWeatherData = async () => {
  const res = await fetch(weatherQuery);
  try {
    const data = await res.json();
    var temp = data.main.temp;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  } finally {
    return temp;
    console.log(temp);
  }
};

async function getWeather() {
  const temp = await getWeatherData();
  console.log(temp);
  const resultNode = document.getElementById("results");
  resultNode.innerHTML = `The temperature is ${temp}`;
}

function logToConsole() {
  //   console.log("logging to console");
  alert("logging to console");
  console.log("logging to console");
}

export { logToConsole, getWeather };
