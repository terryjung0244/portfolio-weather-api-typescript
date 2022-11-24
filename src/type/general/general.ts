import { weatherModel } from '../model/weatherModel';

export interface CurrentLocationType {
  lat: number;
  lon: number;
}

export interface WeatherBoxPropsType {
  result: weatherModel;
}
