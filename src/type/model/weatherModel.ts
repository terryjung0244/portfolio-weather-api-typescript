import {
  MainFromResponse,
  WeatherResponse,
  WindFromResponse,
} from '../response/weatherResponse';

export interface weatherModel {
  main: MainFromResponse;
  wind: WindFromResponse;
  name: string;
}

export const parsedWeatherData = (weatherData: WeatherResponse): weatherModel => {
  return {
    main: weatherData.main ?? null,
    wind: weatherData.wind ?? null,
    name: weatherData.name ?? '',
  };
};
