import React from 'react';
import { render } from '@testing-library/react';
import WeatherBox from '../WeatherBox';
import { WeatherBoxPropsType } from '../WeatherBox.interface';

const renderComponent = (props: WeatherBoxPropsType) => render(<WeatherBox {...props} />);

describe('src/components/currentWeatherBox/Weatherbox', () => {
  let props: WeatherBoxPropsType;
  beforeEach(() => {
    props = {
      result: {
        main: {
          temp: 20,
          feels_like: 0,
          temp_min: 0,
          temp_max: 0,
          pressure: 0,
          humidity: 0,
        },
        wind: {
          speed: 0,
          deg: 0,
          gust: 0,
        },
        name: 'cloud',
      },
    };
  });

  it('Render WeatherBox Component', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('weatherbox-container')).toBeInTheDocument();
  });

  it('Test props value is correct', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('weatherbox-name')).toBeInTheDocument();
    expect(getByTestId('weatherbox-name')).toHaveTextContent('cloud');
    expect(getByTestId('weatherbox-temp')).toBeInTheDocument();
    expect(getByTestId('weatherbox-temp')).toHaveTextContent('20');
  });
});
