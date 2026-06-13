import React, { useState } from 'react'

function SearchBar({ onSearch, onLocation, locLoading }) {
  const [city, setCity] = useState('')

  const handleSearch = () => {
    if (!city.trim()) return
    onSearch(city.trim())
    setCity('')
  }

  return (
    <div className="search-wrapper">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <button
        className="location-btn"
        onClick={onLocation}
        disabled={locLoading}
        title="Use my current location"
      >
        {locLoading ? '...' : '📍 Use My Location'}
      </button>
    </div>
  )
}

export default SearchBar
