import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import WeatherBox from './components/WeatherBox';
import { useAppDispatch } from './hook/useAppDispatch';
import useAppSelector from './hook/useAppSelector';
import { getWeatherApiRequestAction } from './service/redux/weatherAction';
import { weatherModel } from './type/model/weatherModel';
import './App.css';
import Input from './components/reusable/Input';
import { InputStateType, OnChangeParamType } from './components/reusable/input.interface';

const App = () => {
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
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="app-container">
      {result && (
        <>
          <WeatherBox result={result as weatherModel} />
        </>
      )}
      <div>
        <Input
          name={'input'}
          value={input['input']}
          onChangeFunc={onChangeFunc}
          placeholder="City"
          width={'200px'}
          height={'50px'}
        />
      </div>
    </div>
  );
};

export default App;
