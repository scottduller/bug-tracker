import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
  }
  body {
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    margin: 0;
    overflow-x: hidden;
  }
  a{
    text-decoration: none;
    color:inherit;

    &:hover {
      color:inherit
    }
  }
`;

export default GlobalStyles;
