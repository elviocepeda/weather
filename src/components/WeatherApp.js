import React, { useState } from 'react'
import axios from 'axios'
import { Humidity } from '../svgicons/Humidity'
import { Wind } from '../svgicons/Wind'
import { TermSensation } from '../svgicons/TermSensation'
import { Visibility } from '../svgicons/Visibility'
import { Sunrise } from '../svgicons/Sunrise'
import { Sunset } from '../svgicons/Sunset'
import { Pressure } from '../svgicons/Pressure'
import { TempMin } from '../svgicons/TempMin'
import { TempMax } from '../svgicons/TempMax'
import { DataMainDescription } from './DataMainDescription'

function WeatherApp() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=54f5585e86cbf78fff438c3fd60e6b20`

  const searchLocation = (event) => {

    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  

  return (
    <div className="app-container">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Buscar...'
          type="text" />
      </div>

      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <h1>{Math.round(((data.main.temp.toFixed())-32)*5/9)}°C</h1> : null}
        </div>
        <div className="description">
          {data.weather ? <DataMainDescription data={data.weather[0].main} /> : null}
          {/* {data.weather ? <p className="location">{data.weather[0].main}</p> : null} */}
        </div>
      </div>

      {data.name !== undefined &&
        <div className="bottom">
          <div className="row-1">
            <div style={{width:"33%", textAlign:"center"}}>
              <TermSensation />
              {data.main ? <p className='data'>{Math.round(((data.main.feels_like.toFixed())-32)*5/9)}°C</p> : null}
              <p className='data-description'>T. Sensation</p>
            </div>

            <div style={{width:"33%", textAlign:"center"}}>
              <Humidity />
              {data.main ? <p className='data'>{data.main.humidity}%</p> : null}
              <p className='data-description'>Humidity</p>
            </div>

            <div style={{width:"33%", textAlign:"center"}}>
              <Wind />
              {data.wind ? <p className='data'>{data.wind.speed.toFixed()} k/h</p> : null}
              <p className='data-description'>Wind</p>
            </div>
          </div>
          
          <div className="row-2">
            <div style={{width:"33%", textAlign:"center"}}>
              <Visibility />
              <p className='data'>{(data.visibility.toFixed())/1000}km</p>
              <p className='data-description'>Visibility</p>
            </div>

            <div style={{width:"33%", textAlign:"center"}}>
              <Sunrise />
              {data.sys ? <p className='data'>{(new Date((data.sys.sunrise*1000))).toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: false})}hs</p> : null}
              <p className='data-description'>Sunrise</p>
            </div>

            <div style={{width:"33%", textAlign:"center"}}>
              <Sunset />
              {data.sys ? <p className='data'>{(new Date((data.sys.sunset*1000))).toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: false})}hs</p> : null}
              <p className='data-description'>Sunset</p>
            </div>
          </div>
          
          <div className="row-3">
            <div style={{width:"33%", textAlign:"center"}}>
              <Pressure />
              {data.main ? <p className='data'>{data.main.pressure}hPa</p> : null}
              <p className='data-description'>Pressure</p>
            </div>

            <div style={{width:"33%", textAlign:"center"}}>
              <TempMin />
              {data.main ? <p className='data'>{Math.round(((data.main.temp_min.toFixed())-32)*5/9)}°c</p> : null}
              <p className='data-description'>Temp. Min.</p>
            </div>

            <div style={{width:"33%", textAlign:"center"}}>
              <TempMax />
              {data.main ? <p className='data'>{Math.round(((data.main.temp_max.toFixed())-32)*5/9)}°c</p> : null}
              <p className='data-description'>Temp. Max.</p>
            </div>
          </div>

        </div>
      }
    </div>
  );
}

export default WeatherApp;