import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    font-family: 'Pretendard-Regular', sans-serif !important;
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
