import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    width: 100% !important;
  }

  body {
    background-color: #f7f7f7; 
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 15px;
    font-family:Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
