import React from 'react'

function DailyForecast({ data }) {
  const formatDay = (dtTxt) => {
    const date = new Date(dtTxt)
    const today = new Date()
    const isToday = date.toDateString() === today.toDateString()
    if (isToday) return 'Today'
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  }

  return (
    <div className="forecast-section">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="daily-list">
        {data.map((item, i) => (
          <div key={i} className="daily-card">
            <p className="daily-day">{formatDay(item.dt_txt)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              className="daily-icon"
            />
            <p className="daily-desc">{item.weather[0].description}</p>
            <div className="daily-temps">
              <span className="temp-high">{Math.round(item.main.temp_max)}°</span>
              <span className="temp-low">{Math.round(item.main.temp_min)}°</span>
            </div>
            <div className="daily-extra">
              <span>💧 {item.main.humidity}%</span>
              <span>💨 {item.wind.speed} m/s</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DailyForecast
