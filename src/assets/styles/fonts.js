import { createGlobalStyle } from 'styled-components';
import MilkyWalky from '../fonts/MilkyWalky-Regular.ttf';
import Mina from '../fonts/Mina-Regular.ttf';
import Roboto from '../fonts/Roboto-Black.ttf';

export const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: "MilkyWalky";
  src: url(${MilkyWalky}) format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Mina";
  src: url(${Mina}) format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url(${Roboto}) format("ttf");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
`;