import { put, takeLatest } from 'redux-saga/effects';
import { weatherModel } from '../../type/model/weatherModel';
import { getWeatherCurrentLocationByAxios } from '../api/weatherApi';
import { WEATHER_CONST_STRING } from '../const';
import { getWeatherApiFailureAction, getWeatherApiSuccessAction } from './weatherAction';
import { WeatherRequestType } from './weatherAction.interface';

const { WEATHER_REQUEST_ACTION_CONST_STRING } = WEATHER_CONST_STRING;

function* weatherApiDataFromSaga(action: WeatherRequestType): any {
  const result: weatherModel | Error = yield getWeatherCurrentLocationByAxios(
    action.payload,
  );
  // eslint-disable-next-line no-prototype-builtins
  if (result.hasOwnProperty('main')) {
    yield put(getWeatherApiSuccessAction(result as weatherModel));
  } else {
    yield put(getWeatherApiFailureAction(result as Error));
  }
}

export function* weatherSagaWatcher() {
  //yield takeLastest(nameOfConstString, nameOfFunction)
  yield takeLatest(WEATHER_REQUEST_ACTION_CONST_STRING, weatherApiDataFromSaga);
}
