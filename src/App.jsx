import React, { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import HourlyForecast from './components/HourlyForecast'
import DailyForecast from './components/DailyForecast'
import Loader from './components/Loader'

const apikey = import.meta.env.VITE_API_KEY

function App() {
  const [weather, setWeather] = useState(null)
  const [hourly, setHourly] = useState(null)
  const [daily, setDaily] = useState(null)
  const [loading, setLoading] = useState(false)
  const [locLoading, setLocLoading] = useState(false)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('hourly')

  const fetchAllWeather = async (lat, lon, cityName = null) => {
    setLoading(true)
    setError('')
    try {
      // Current weather
      const currentUrl = cityName
        ? `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`
        : `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`

      const currentRes = await fetch(currentUrl)
      if (!currentRes.ok) throw new Error('City not found')
      const currentData = await currentRes.json()
      setWeather(currentData)

      // Use lat/lon from current response for forecast
      const fLat = currentData.coord.lat
      const fLon = currentData.coord.lon

      // 5-day / 3-hour forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${fLat}&lon=${fLon}&appid=${apikey}&units=metric`
      )
      const forecastData = await forecastRes.json()

      // Next 24 hours (8 slots × 3hr)
      setHourly(forecastData.list.slice(0, 8))

      // Daily: pick one entry per day (noon slot preferred)
      const seen = new Set()
      const days = []
      for (const item of forecastData.list) {
        const date = item.dt_txt.split(' ')[0]
        if (!seen.has(date)) {
          seen.add(date)
          days.push(item)
        }
        if (days.length === 5) break
      }
      setDaily(days)

    } catch (err) {
      setError(err.message)
      setWeather(null)
      setHourly(null)
      setDaily(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (city) => {
    fetchAllWeather(null, null, city)
  }

  const handleLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      return
    }
    setLocLoading(true)
    setError('')
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocLoading(false)
        fetchAllWeather(pos.coords.latitude, pos.coords.longitude)
      },
      () => {
        setLocLoading(false)
        setError('Location access denied. Please allow location permission.')
      }
    )
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">🌤️ Weather Forecast</h1>

        <SearchBar onSearch={handleSearch} onLocation={handleLocation} locLoading={locLoading} />

        {loading && <Loader />}
        {error && <p className="error">⚠️ {error}</p>}

        {weather && !loading && (
          <>
            <WeatherCard weather={weather} />

            <div className="tab-bar">
              <button
                className={`tab-btn ${activeTab === 'hourly' ? 'active' : ''}`}
                onClick={() => setActiveTab('hourly')}
              >
                ⏰ 24-Hour
              </button>
              <button
                className={`tab-btn ${activeTab === 'daily' ? 'active' : ''}`}
                onClick={() => setActiveTab('daily')}
              >
                📅 5-Day
              </button>
            </div>

            {activeTab === 'hourly' && hourly && <HourlyForecast data={hourly} />}
            {activeTab === 'daily' && daily && <DailyForecast data={daily} />}
          </>
        )}
      </div>
    </div>
  )
}

export default App
