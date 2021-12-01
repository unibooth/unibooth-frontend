import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: 'Apple SD Gothic Neo', sans-serif !important;
    font-style: normal;
    letter-spacing: -0.02em;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgba(255,255,255,0);
  }
`;

export default GlobalStyle;
