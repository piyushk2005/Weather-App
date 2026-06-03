import React from 'react'

function WeatherCard({ weather }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`

  return (
    <div className="weather-card">
      <img src={iconUrl} alt="weather icon" className="weather-icon" />

      <h2 className="city">
        {weather.name}, {weather.sys.country}
      </h2>

      <h1 className="temperature">
        {Math.round(weather.main.temp)}°C
      </h1>

      <p className="condition">
        {weather.weather[0].description}
      </p>

      <div className="weather-details">
        <div className="detail-box">
          <span>Humidity</span>
          <strong>{weather.main.humidity}%</strong>
        </div>

        <div className="detail-box">
          <span>Wind</span>
          <strong>{weather.wind.speed} m/s</strong>
        </div>

        <div className="detail-box">
          <span>Feels Like</span>
          <strong>{Math.round(weather.main.feels_like)}°C</strong>
        </div>

        <div className="detail-box">
          <span>Pressure</span>
          <strong>{weather.main.pressure} hPa</strong>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard