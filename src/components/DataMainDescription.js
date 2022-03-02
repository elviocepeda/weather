import React from 'react';
import { Clear } from '../svgicons/Clear';
import { Clouds } from '../svgicons/Clouds';
import { Rain } from '../svgicons/Rain';

export const DataMainDescription = (props) => {
  console.log(props.data);

  return (
    <div>
      {props.data === "Clouds"? <Clouds /> : null}
      {props.data === "Rain"? <Rain /> : null}
      {props.data === "Clear"? <Clear /> : null}
    </div>
  )
}
