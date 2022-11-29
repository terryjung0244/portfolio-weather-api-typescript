import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import WeatherBox from './components/currentWeatherBox/WeatherBox';
import { useAppDispatch } from './hook/useAppDispatch';
import useAppSelector from './hook/useAppSelector';
import { getWeatherApiRequestAction } from './service/redux/weatherAction';
import { weatherModel } from './type/model/weatherModel';
import './App.css';
import Input from './components/reusable/input/Input';
import {
  InputStateType,
  OnChangeParamType,
} from './components/reusable/input/input.interface';

const App = () => {
  // const [inputState, setInputState] = useState<string>('');

  const [input, setInput] = useState<InputStateType>({
    input: '',
  });
  const dispatch = useAppDispatch();
  const { result, loading, error } = useAppSelector((state) => state.weatherReducer);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat: number = position.coords.latitude;
      const lon: number = position.coords.longitude;
      dispatch(getWeatherApiRequestAction({ lat, lon }));
    });
  };

  const onChangeFunc = (data: OnChangeParamType) => {
    setInput({
      ...input,
      [data.name]: data.value,
    });
  };

  useEffect(() => {
    getCurrentLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div data-testid="loading-component">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  // const onChangeFunc2 = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputState(e.target.value);
  // };

  return (
    <div className="app-container">
      {result && (
        <>
          <WeatherBox result={result as weatherModel} />
        </>
      )}
      <div>
        <Input
          dataTestId="input-component"
          name={'input'}
          value={input['input']}
          onChangeFunc={onChangeFunc}
          placeholder="City"
          width={'200px'}
          height={'50px'}
        />
      </div>
      {/* <input name={'inputName'} value={inputState} onChange={onChangeFunc2} /> */}
    </div>
  );
};

export default App;
