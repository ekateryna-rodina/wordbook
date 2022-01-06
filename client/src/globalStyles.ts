import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#2B41A7',
    secondary: '#8F00FF',
    tertiary: '#7e93e5',
    quaternary: '#7b95ff',
    primaryText: '#1A3431',
    secondaryText: '#6283C8',
    neutral: 'rgba(0, 0, 0, .2)',
    dark: '#0E1C59',
    light: '#e5e7ff',
    white: '#fff',
    highlight: '#d5d5fa',
    green: '#23A63A',
    yellow: '#F2E827',
    gray: '#6574B5',
  },
};

export const GlobalStyle = createGlobalStyle<{ theme: Record<Colors, string> }>`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  overflow: hidden;
}

*, *::before, *::after{
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
}

:root{
  --title-font-size: 1.5rem;
}

body, html{
  margin: 0;
  padding: 0;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html, body {
  height: 100vh;
  width: 100vw;
  padding: 0;
}
#root, #root>div {
  height: 100%;
  width: 100%;
  position: fixed;
  inset: 0;
}

.back-btn{
  --border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: ${`${theme.colors.light}80`};
  position: absolute;
  top: 3rem;
  left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-border-radius: var(--border-radius);
  -moz-border-radius: var(--border-radius);
  -ms-border-radius: var(--border-radius);
  -o-border-radius: var(--border-radius);
  border-radius: var(--border-radius);
}
`;

export type Colors =
  | 'primary'
  | 'secondary'
  | 'primaryText'
  | 'secondaryText'
  | 'neutral'
  | 'dark'
  | 'light'
  | 'white';
