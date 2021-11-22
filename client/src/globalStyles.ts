import { createGlobalStyle } from 'styled-components';
import { respondTo } from './utils/_respondTo';

export const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}

body{
  background-color:#fff;
  min-height:100vh;
  font-family: 'Lato', sans-serif;
  overflow: hidden;
  font-size: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
    ${respondTo.tablet`
    font-size: 110%;
    `}
    ${respondTo.laptopAndDesktop`
    font-size: 120%;
    `}
}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 100%;
    ${respondTo.tablet`
    font-size: 110%;
    `}
    ${respondTo.laptopAndDesktop`
    font-size: 120%;
    `}
}
`;

type Colors =
  | 'primary'
  | 'secondary'
  | 'primaryText'
  | 'secondaryText'
  | 'neutral'
  | 'dark'
  | 'light'
  | 'white';
export const theme: Record<Colors, string> = {
  primary: '#5D7342',
  secondary: '#D7AE04',
  primaryText: '#272727',
  secondaryText: '#ECD7B8',
  neutral: '#A58B8C',
  dark: '#272727',
  light: '#ECD7B8',
  white: '#fff',
};
