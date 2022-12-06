import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { InputCompPropsType } from '../input.interface';
import Input from '../Input';

const renderComponent = (props: InputCompPropsType) => render(<Input {...props} />);

describe('src/components/reusable/input', () => {
  let props: InputCompPropsType;
  const mockOnChangeFunc = jest.fn(); //resuable function

  beforeEach(() => {
    props = {
      dataTestId: 'inputDataTestId',
      name: 'inputName',
      value: 'inputValue',
      // onChangeFunc: mockOnChangeFunc,
      placeholder: 'inputPlaceholder',
      height: '50px',
      onChangeFunc: mockOnChangeFunc,
    };
  });

  it('Render Input Component', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('inputDataTestId')).toBeInTheDocument();
  });

  it('FireEvent Input Test', () => {
    const { getByTestId } = renderComponent(props);
    const input = getByTestId('inputDataTestId');
    fireEvent.change(input, {
      target: {
        value: 'abc',
      },
    });
    expect(mockOnChangeFunc).toHaveBeenCalled();
    expect(mockOnChangeFunc).toHaveBeenCalledTimes(1);
    expect(mockOnChangeFunc).toHaveBeenCalledWith({ name: 'inputName', value: 'abc' });
  });
});
