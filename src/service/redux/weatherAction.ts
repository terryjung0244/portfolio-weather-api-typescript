import { CurrentLocationType } from '../../type/general/general';
import { weatherModel } from '../../type/model/weatherModel';
import { WEATHER_CONST_STRING } from '../const';
import {
  WeatherFailureType,
  WeatherRequestType,
  WeatherSuccessType,
} from './weatherAction.interface';

const {
  WEATHER_REQUEST_ACTION_CONST_STRING,
  WEATHER_SUCCESS_ACTION_CONST_STRING,
  WEATHER_FAILURE_ACTION_CONST_STRING,
} = WEATHER_CONST_STRING;

export const getWeatherApiRequestAction = (
  currentLocation: CurrentLocationType,
): WeatherRequestType => {
  return {
    type: WEATHER_REQUEST_ACTION_CONST_STRING,
    payload: currentLocation,
  };
};

export const getWeatherApiSuccessAction = (
  dataFromServer: weatherModel,
): WeatherSuccessType => {
  return {
    type: WEATHER_SUCCESS_ACTION_CONST_STRING,
    payload: dataFromServer,
  };
};

export const getWeatherApiFailureAction = (dataFromServer: Error): WeatherFailureType => {
  return {
    type: WEATHER_FAILURE_ACTION_CONST_STRING,
    payload: dataFromServer,
  };
};
