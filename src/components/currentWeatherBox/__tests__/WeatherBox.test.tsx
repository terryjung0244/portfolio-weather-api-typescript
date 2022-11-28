import React from 'react';
import { render } from '@testing-library/react';
import WeatherBox from '../WeatherBox';
import { WeatherBoxPropsType } from '../WeatherBox.interface';

const renderComponent = (props: WeatherBoxPropsType) => render(<WeatherBox {...props} />);

describe('src/components/currentWeatherBox/Weatherbox', () => {
  let props: WeatherBoxPropsType;
  const result = weatherModel;
});

it('Render WeatherBox Component', () => {
  const { getByTestId } = renderComponent(props);
});
