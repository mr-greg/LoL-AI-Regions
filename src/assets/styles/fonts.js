import { createGlobalStyle } from 'styled-components';

export const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: "MilkyWalky";
  src: url('./assets/fonts/MilkyWalky-Regular.ttf') format("ttf");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Mina";
  src: url('./assets/fonts/Mina-Regular.ttf') format("ttf");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url('./assets/fonts/Roboto-Regular.ttf') format("ttf");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
`;