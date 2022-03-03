import React from 'react'
import { Humidity } from '../svgicons/Humidity'
import { Pressure } from '../svgicons/Pressure'
import { Sunrise } from '../svgicons/Sunrise'
import { Sunset } from '../svgicons/Sunset'
import { TempMax } from '../svgicons/TempMax'
import { TempMin } from '../svgicons/TempMin'
import { TermSensation } from '../svgicons/TermSensation'
import { Visibility } from '../svgicons/Visibility'
import { Wind } from '../svgicons/Wind'

const Bottom = ({rowStyle, data}) => {
  return (
    data.name &&
      <div className="bottom">
        <div className="row-1">
          <div style={rowStyle}>
            <TermSensation />
            {data.main ? <p className='data'>{Math.round(((data.main.feels_like.toFixed())-32)*5/9)}°C</p> : null}
            <p className='data-description'>T. Sensation</p>
          </div>

          <div style={rowStyle}>
            <Humidity />
            {data.main ? <p className='data'>{data.main.humidity}%</p> : null}
            <p className='data-description'>Humidity</p>
          </div>

          <div style={rowStyle}>
            <Wind />
            {data.wind ? <p className='data'>{data.wind.speed.toFixed()} k/h</p> : null}
            <p className='data-description'>Wind</p>
          </div>
        </div>
        
        <div className="row-2">
          <div style={rowStyle}>
            <Visibility />
            <p className='data'>{(data.visibility.toFixed())/1000}km</p>
            <p className='data-description'>Visibility</p>
          </div>

          <div style={rowStyle}>
            <Sunrise />
            {data.sys ? <p className='data'>{(new Date((data.sys.sunrise*1000))).toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: false})}hs</p> : null}
            <p className='data-description'>Sunrise</p>
          </div>

          <div style={rowStyle}>
            <Sunset />
            {data.sys ? <p className='data'>{(new Date((data.sys.sunset*1000))).toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: false})}hs</p> : null}
            <p className='data-description'>Sunset</p>
          </div>
        </div>
        
        <div className="row-3">
          <div style={rowStyle}>
            <Pressure />
            {data.main ? <p className='data'>{data.main.pressure}hPa</p> : null}
            <p className='data-description'>Pressure</p>
          </div>

          <div style={rowStyle}>
            <TempMin />
            {data.main ? <p className='data'>{Math.round(((data.main.temp_min.toFixed())-32)*5/9)}°c</p> : null}
            <p className='data-description'>Temp. Min.</p>
          </div>

          <div style={rowStyle}>
            <TempMax />
            {data.main ? <p className='data'>{Math.round(((data.main.temp_max.toFixed())-32)*5/9)}°c</p> : null}
            <p className='data-description'>Temp. Max.</p>
          </div>
        </div>

      </div>
  )
}

export default Bottom