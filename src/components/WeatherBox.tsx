import React from 'react';
import { WeatherBoxPropsType } from '../type/general/general';

const WeatherBox = ({ result }: WeatherBoxPropsType) => {
  return <div>{result.name}</div>;
};

export default WeatherBox;
