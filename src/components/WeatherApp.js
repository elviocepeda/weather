import React, { useState } from 'react'
import axios from 'axios'
import Search from './Search'
import Top from './Top'
import Bottom from './Bottom'

function WeatherApp() {

  const rowStyle = {width:"33%", textAlign:"center"}
  const [data, setData] = useState({})
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState (true)
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=54f5585e86cbf78fff438c3fd60e6b20`

  const searchLocation = (e) => {

    e.key === 'Enter' &&
      axios.get(url)
    
      .then((response) => {
        setData(response.data)
        setIsLoading(false)
      })
    
      .catch((error) => {
        setError(error)
        setIsLoading(false)
      })
  }

  return (
    <div className="app-container">

      <Search 
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}/>
      
      <Top data={data}/>

      <Bottom 
        rowStyle={rowStyle}
        data={data}/>

    </div>
  );
}

export default WeatherApp;