import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{

  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: "Roboto", sans-serif;
    background: #061221;
    color: white;
  }

  input, textarea, select, button{
    font: 400 1rem "Roboto", sans-serif;
  }

  button{
    cursor: pointer;
  } 

`;

export default GlobalStyle;
