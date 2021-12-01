import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('//db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    font-family: 'Apple SD Gothic Neo', sans-serif !important;
    font-style: normal;
    letter-spacing: -0.02em;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgba(255,255,255,0);
  }

  .container {
    padding: 0 20px;
  }
`;

export default GlobalStyle;
