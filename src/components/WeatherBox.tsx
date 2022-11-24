import React from 'react';
import { WeatherBoxPropsType } from '../type/general/general';
import './WeatherBox.css';
import DateTime from './DateTime';

const WeatherBox = ({ result }: WeatherBoxPropsType) => {
  return (
    <div>
      <div className="weather-box">
        <div>
          <DateTime />
        </div>
        <div>{result.name}</div>
        <div>{result.main.temp}</div>
        <div>{result.main.humidity}</div>
      </div>
    </div>
  );
};

export default WeatherBox;
