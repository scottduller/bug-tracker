import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    overflow-x: hidden;
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    margin: 0;
    background-color: ${(props) => props.bgColour};
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
