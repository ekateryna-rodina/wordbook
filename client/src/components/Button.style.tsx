import React from 'react';
import styled from 'styled-components';
import { theme } from '../globalStyles';

const ButtonStyled = styled.button<ButtonProps>`
  --active-brightness: 1.2;
  padding: ${(props) => `${props.padding[0]}em ${props.padding[1]}em`};
  background: ${(props) => props.theme[props.background.toString()]};
  color: ${(props) => props.theme[props.color.toString()]};
  border-radius: ${({ borderRadius }) => `${borderRadius}rem`};
  outline: none;
  border: none;
  transition: filter 0.2s ease;
  font-size: 2vh;

  &:hover,
  &:active {
    filter: brightness(var(--active-brightness));
  }
`;

type ButtonProps = {
  background: keyof typeof theme;
  color: keyof typeof theme;
  padding: [number, number];
  borderRadius: number;
};
const Button: React.FC<ButtonProps> = ({
  background,
  color,
  padding,
  borderRadius,
  children,
}) => {
  return (
    <ButtonStyled {...{ background, color, padding, borderRadius }}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
