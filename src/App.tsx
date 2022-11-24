import React, { useEffect } from 'react';
import Loading from './components/Loading';
import WeatherBox from './components/WeatherBox';
import { useAppDispatch } from './hook/useAppDispatch';
import useAppSelector from './hook/useAppSelector';
import { getWeatherApiRequestAction } from './service/redux/weatherAction';
import { weatherModel } from './type/model/weatherModel';
import './App.css';

const App = () => {
  const dispatch = useAppDispatch();
  const { result, loading, error } = useAppSelector((state) => state.weatherReducer);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat: number = position.coords.latitude;
      const lon: number = position.coords.longitude;
      dispatch(getWeatherApiRequestAction({ lat, lon }));
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
    return <div>{error}</div>;
  }

  console.log(result);
  return (
    <div className="app-container">
      {result && (
        <>
          <WeatherBox result={result as weatherModel} />
        </>
      )}
    </div>
  );
};

export default App;
