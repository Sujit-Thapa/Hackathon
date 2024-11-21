export async function fetchWeatherData() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY');
    const data = await response.json();
    return data;
  }
  