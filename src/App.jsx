import React, { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import Loader from './components/Loader'

const apikey = import.meta.env.VITE_API_KEY
console.log("API Key:", apikey)

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async (city) => {
    if (!city) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
      )

      if (!response.ok) {
        throw new Error('City not found')
      }

      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="overlay">
        <div className="container">
          <h1 className="title">Weather Forecast</h1>

          <SearchBar onSearch={fetchWeather} />

          {loading && <Loader />}

          {error && <p className="error">{error}</p>}

          {weather && !loading && <WeatherCard weather={weather} />}
        </div>
      </div>
    </div>
  )
}

export default App