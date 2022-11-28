import React from 'react';
import './WeatherBox.css';
import DateTime from '../DateTime';
import { WeatherBoxPropsType } from './WeatherBox.interface';

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
