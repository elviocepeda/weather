import React from 'react'
import { DataMainDescription } from './DataMainDescription'

const Top = ({data}) => {
  return (
    <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <h1>{Math.round(((data.main.temp.toFixed())-32)*5/9)}°C</h1> : null}
        </div>
        <div className="description">
          {data.weather ? <DataMainDescription data={data.weather[0].main} /> : null}
        </div>
      </div>
  )
}

export default Top