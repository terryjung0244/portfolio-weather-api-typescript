import React from 'react';
import './WeatherBox.css';
import DateTime from '../DateTime';
import { WeatherBoxPropsType } from './WeatherBox.interface';

const WeatherBox = ({ result }: WeatherBoxPropsType) => {
  return (
    <div data-testid="weatherbox-container">
      <div className="weather-box">
        <div>
          <DateTime />
        </div>
        <div data-testid="weatherbox-name">{result.name}</div>
        <div data-testid="weatherbox-temp">{result.main.temp}</div>
        <div data-testid="weatherbox-humidity">{result.main.humidity}</div>
      </div>
    </div>
  );
};

export default WeatherBox;
