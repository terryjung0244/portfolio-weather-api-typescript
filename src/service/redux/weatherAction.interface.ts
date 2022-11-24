import { AnyAction } from '@reduxjs/toolkit';
import { CurrentLocationType } from '../../type/general/general';
import { weatherModel } from '../../type/model/weatherModel';

import { WEATHER_CONST_STRING } from '../const';

const {
  WEATHER_REQUEST_ACTION_CONST_STRING,
  WEATHER_SUCCESS_ACTION_CONST_STRING,
  WEATHER_FAILURE_ACTION_CONST_STRING,
} = WEATHER_CONST_STRING;

export interface WeatherRequestType {
  type: typeof WEATHER_REQUEST_ACTION_CONST_STRING;
  payload: CurrentLocationType;
}

export interface WeatherSuccessType {
  type: typeof WEATHER_SUCCESS_ACTION_CONST_STRING;
  payload: weatherModel;
}

export interface WeatherFailureType {
  type: typeof WEATHER_FAILURE_ACTION_CONST_STRING;
  payload: Error;
}

export interface WeatherActionsType {
  type: AnyAction | WeatherRequestType | WeatherSuccessType | WeatherFailureType;
}
