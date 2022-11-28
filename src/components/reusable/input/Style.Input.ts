import styled from 'styled-components';
import { InputCompPropsType } from './input.interface';

export const InputStyle = styled.input<Partial<InputCompPropsType>>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
