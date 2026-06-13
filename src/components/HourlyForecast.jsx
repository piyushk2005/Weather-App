import React from 'react'

function HourlyForecast({ data }) {
  const formatTime = (dtTxt) => {
    const date = new Date(dtTxt)
    const hours = date.getHours()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const display = hours % 12 === 0 ? 12 : hours % 12
    return `${display}:00 ${ampm}`
  }

  return (
    <div className="forecast-section">
      <h3 className="forecast-title">Next 24 Hours</h3>
      <div className="hourly-scroll">
        {data.map((item, i) => (
          <div key={i} className="hourly-card">
            <p className="hourly-time">{formatTime(item.dt_txt)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              className="hourly-icon"
            />
            <p className="hourly-temp">{Math.round(item.main.temp)}°C</p>
            <p className="hourly-desc">{item.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HourlyForecast
