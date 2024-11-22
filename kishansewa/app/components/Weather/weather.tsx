"use client";
import React, { useEffect, useState } from "react";

const Weather: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );

  useEffect(() => {
    const fetchWeatherData = async (lat: number, lon: number) => {
      try {
        const currentWeatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=cd7153502178fa8c1f605f1335c6065a`
        );
        if (!currentWeatherResponse.ok) {
          throw new Error("Failed to fetch current weather data");
        }
        const currentWeatherData = await currentWeatherResponse.json();
        setCurrentWeather(currentWeatherData);

        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=cd7153502178fa8c1f605f1335c6065a`
        );
        if (!forecastResponse.ok) {
          throw new Error("Failed to fetch weather forecast data");
        }
        const forecastData = await forecastResponse.json();
        setForecastData(forecastData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, lon: longitude });
            fetchWeatherData(latitude, longitude);
          },
          (error) => {
            setError("Failed to get user location");
            setLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser");
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case "Clear":
        return "/icons/wi-sunny.svg";
      case "Clouds":
        return "/icons/wi-cloudy.svg";
      case "Rain":
        return "/icons/wi-rain.svg";
      case "Snow":
        return "/icons/wi-snow.svg";
      case "Thunderstorm":
        return "/icons/wi-thunderstorm.svg";
      case "Drizzle":
        return "/icons/wi-shower.svg";
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        return "/icons/wi-fog.svg";
      default:
        return "/icons/wi-na.svg";
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="p-5 font-sans flex gap-5 ">
      {currentWeather && (
        <div>
          <h2 className="text-xl font-bold mb-2">Current Weather</h2>
          <div className="border flex border-gray-300 rounded-lg p-2 text-center bg-gray-100">
            <div>
              <img
                src={getWeatherIcon(currentWeather.weather[0].main)}
                alt={currentWeather.weather[0].description}
                className="w-h-28 h-28 mx-auto"
              />
            </div>
            <div>
              <p className="my-2">
                <strong>Date:</strong>{" "}
                {new Date(currentWeather.dt * 1000).toLocaleDateString()}
              </p>
              <p className="my-2">
                <strong>Time:</strong>{" "}
                {new Date(currentWeather.dt * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p className="my-2">
                <strong>Temperature:</strong> {currentWeather.main.temp}°C
              </p>
              <p className="my-2">
                <strong>Feels Like:</strong> {currentWeather.main.feels_like}°C
              </p>
              <p className="my-2">
                <strong>Weather:</strong>{" "}
                {currentWeather.weather[0].description}
              </p>
              <p className="my-2">
                <strong>Humidity:</strong> {currentWeather.main.humidity}%
              </p>
              <p className="my-2">
                <strong>Pressure:</strong> {currentWeather.main.pressure} hPa
              </p>
              <p className="my-2">
                <strong>Visibility:</strong> {currentWeather.visibility} meters
              </p>
              <p className="my-2">
                <strong>Wind Speed:</strong> {currentWeather.wind.speed} m/s
              </p>
            </div>
          </div>
        </div>
      )}
      {forecastData && (
        <div>
          <h2 className="text-xl font-bold">3-Day Weather Forecast</h2>
          <div className="border border-gray-300 rounded-lg  text-center bg-gray-100">
            <div className="flex flex-wrap justify-center">
              {forecastData.list
                .filter((forecast: any) => forecast.dt_txt.startsWith(today))
                .slice(0, 3)
                .map((forecast: any, index: number) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg p-5 m-2 w-52 text-center bg-gray-100"
                  >
                    <img
                      src={getWeatherIcon(forecast.weather[0].main)}
                      alt={forecast.weather[0].description}
                      className="w-12 h-12 mx-auto"
                    />
                    <p className="my-2">
                      <strong>Date:</strong>{" "}
                      {new Date(forecast.dt * 1000).toLocaleDateString()}
                    </p>
                    <p className="my-2">
                      <strong>Temperature:</strong> {forecast.main.temp}°C
                    </p>
                    <p className="my-2">
                      <strong>Feels Like:</strong> {forecast.main.feels_like}°C
                    </p>
                    <p className="my-2">
                      <strong>Weather:</strong>{" "}
                      {forecast.weather[0].description}
                    </p>
                    <p className="my-2">
                      <strong>Visibility:</strong> {forecast.visibility} meters
                    </p>
                    <p className="my-2">
                      <strong>Wind Speed:</strong> {forecast.wind.speed} m/s
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
