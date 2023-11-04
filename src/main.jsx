import React from 'react'
import ReactDOM from 'react-dom/client'

import "../src/Component/WeatherApp/WeatherApp.css"
import Weather from "../src/Component/WeatherApp/WeatherApp.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Weather/>
  </React.StrictMode>,
)
