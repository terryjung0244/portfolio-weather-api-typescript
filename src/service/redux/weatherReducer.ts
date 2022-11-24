import { Reducer } from 'redux';
import { WEATHER_CONST_STRING } from '../const';
import { WeatherActionsType } from './weatherAction.interface';
import { WeatherStateType } from './weatherReducer.interface';

const {
  WEATHER_REQUEST_ACTION_CONST_STRING,
  WEATHER_SUCCESS_ACTION_CONST_STRING,
  WEATHER_FAILURE_ACTION_CONST_STRING,
} = WEATHER_CONST_STRING;

const initialState = { loading: false, error: null, result: null };

const weatherReducer: Reducer<WeatherStateType, WeatherActionsType> = (state = initialState, action: any) => {
  switch (action.type) {
    case WEATHER_REQUEST_ACTION_CONST_STRING:
      return {
        ...state,
        loading: true,
      };
    case WEATHER_SUCCESS_ACTION_CONST_STRING:
      return {
        ...state,
        loading: false,
        result: action.payload,
      };
    case WEATHER_FAILURE_ACTION_CONST_STRING:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
