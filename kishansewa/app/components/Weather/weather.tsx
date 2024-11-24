"use client";
import React, { useEffect, useState } from "react";
import styles from "./weather.module.css";
const Weather: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async (lat: number, lon: number) => {
      try {
        const currentWeatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        );
        if (!currentWeatherResponse.ok) {
          throw new Error("Failed to fetch current weather data");
        }
        const currentWeatherData = await currentWeatherResponse.json();
        setCurrentWeather(currentWeatherData);

        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
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
        return "/icons/wi-day-sunny.svg";
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
        return "/icons/wi-day-sunny.svg";
    }
  };

  // Filter forecast data to get one entry per day at 12:00 PM

  return (
    <div
      className=" font-sans rounded-md w-[45%] "
      style={{
        backgroundImage:
          "url('/stock-photo-summer-background-wonderful-sunny-sky.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 3-Day Weather Forecast Section */}
      {forecastData && (
        <div className="border border-gray-300 rounded-lg   bg-white bg-opacity-20 backdrop-blur-md shadow-lg">
          <div>
            <div className="flex flex-wrap gap-3 justify-center">
              {forecastData.list
                .slice(0, 3)
                .map((forecast: any, index: number) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg p-1 my-3 w-52 text-center bg-white bg-opacity-20 backdrop-blur-md shadow-md"
                  >
                    <img
                      src={getWeatherIcon(forecast.weather[0].main)}
                      alt={forecast.weather[0].description}
                      className="w-12 h-12 mx-auto"
                    />
                    <p className="my-1 text-xl">
                      <strong>
                        {new Date(forecast.dt * 1000).toLocaleDateString([], {
                          weekday: "short",
                        })}
                      </strong>{" "}
                    </p>
                    <p className="my-1">Temperature: {forecast.main.temp}°C</p>
                    <p className="my-1">
                      Feels Like: {forecast.main.feels_like}°C
                    </p>
                    <p className="my-1">
                      Weather: {forecast.weather[0].description}
                    </p>
                    <p className="my-1">Humidity: {forecast.main.humidity}%</p>

                    <p className="my-1">
                      Wind Speed: {forecast.wind.speed} m/s
                    </p>
                  </div>
                ))}
            </div>
          </div>
          {/* Current Weather Section */}
          {currentWeather && (
            <div className=" rounded-lg p-2 flex bg-white bg-opacity-20 backdrop-blur-md ">
              <div>
                <h2 className="text-xl font-bold">
                  {" "}
                  <p>
                    {new Date(currentWeather.dt * 1000).toLocaleDateString([], {
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    {new Date(currentWeather.dt * 1000).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </h2>
                <img
                  src={getWeatherIcon(currentWeather.weather[0].main)}
                  alt={currentWeather.weather[0].description}
                  className="w-h-36 h-36 "
                />
              </div>

              <div className="my-2 text-5xl flex flex-col items-center justify-center">
                {currentWeather.main.temp}°C
                <p className="my-2 text-lg">
                  {" "}
                  {currentWeather.weather[0].description}
                </p>
              </div>
              <div className="flex  flex-col my-5 gap-2 ml-9 text-left ">
                <p>
                  Feels Like: {currentWeather.main.feels_like}
                  °C
                </p>
                <p>Humidity: {currentWeather.main.humidity}%</p>
                <p>Pressure: {currentWeather.main.pressure} hPa</p>
              </div>
              <div className="flex my-5 flex-col  gap-2 ml-9   text-left ">
                <p>Visibility: {currentWeather.visibility} meters</p>
                <p>Wind Speed: {currentWeather.wind.speed} m/s</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;
