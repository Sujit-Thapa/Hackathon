"use client";
import React, { useEffect, useState } from "react";

const Weather: React.FC = () => {
  const [forecastData, setForecastData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );

  useEffect(() => {
    const fetchForecast = async (lat: number, lon: number) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=cd7153502178fa8c1f605f1335c6065a`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setForecastData(data);
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
            fetchForecast(latitude, longitude);
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
        return "/clear.svg";
      case "Clouds":
        return "/clouds.svg";
      case "Rain":
        return "/rain.svg";
      case "Snow":
        return "/snow.svg";
      case "Thunderstorm":
        return "/thunderstorm.svg";
      case "Drizzle":
        return "/drizzle.svg";
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        return "/mist.svg";
      default:
        return "/default.svg";
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <h1>Today's Weather Forecast (3-hour intervals)</h1>
      {forecastData && (
        <div>
          {forecastData.list
            .filter((forecast: any) => forecast.dt_txt.startsWith(today))
            .map((forecast: any, index: number) => (
              <div key={index}>
                <p>Date: {new Date(forecast.dt * 1000).toLocaleString()}</p>
                <p>Temperature: {forecast.main.temp}°C</p>
                <p>Weather: {forecast.weather[0].description}</p>
                <img
                  src={getWeatherIcon(forecast.weather[0].main)}
                  alt={forecast.weather[0].description}
                  width="50"
                  height="50"
                />
                <p>Humidity: {forecast.main.humidity}%</p>
                <p>Wind Speed: {forecast.wind.speed} m/s</p>
                <hr />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Weather;
