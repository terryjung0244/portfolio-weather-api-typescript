import React from 'react';
import { InputCompPropsType } from './input.interface';
import * as Styled from './Style.Input';

const Input = ({
  dataTestId,
  name,
  value,
  onChangeFunc,
  placeholder,
  width,
  height,
}: InputCompPropsType) => {
  return (
    <Styled.InputStyle
      data-testid={dataTestId}
      name={name}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChangeFunc({ name: e.target.name, value: e.target.value })
      }
      placeholder={placeholder}
      width={width}
      height={height}
    ></Styled.InputStyle>
  );
};

export default Input;
