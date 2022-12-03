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
    font-family: 'Kanit', sans-serif;
    background: #1D1D22;
    color: white;
  }

  input, textarea, select, button{
    font: 400 1rem "Roboto", sans-serif;
  }

textarea:focus, input:focus{
  outline: none;
}

  button{
    cursor: pointer;
  } 

`;

export default GlobalStyle;
