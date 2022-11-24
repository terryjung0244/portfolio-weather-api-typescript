import axios, { AxiosResponse } from 'axios';
import { CurrentLocationType } from '../../type/general/general';
import { parsedWeatherData, weatherModel } from '../../type/model/weatherModel';

export const getWeatherCurrentLocationByAxios = async (
  currentLocation: CurrentLocationType,
): Promise<weatherModel | Error> => {
  const getCurrentLocationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.lat}&lon=${currentLocation.lon}&appid=${process.env.REACT_APP_WEATHER_API}`;
  try {
    const result = await axios
      .get<Promise<AxiosResponse>>(getCurrentLocationUrl)
      .then((response: AxiosResponse) => parsedWeatherData(response.data));
    return result;
  } catch (err) {
    return err as Error;
  }
};
