import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #fec85b;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

  * {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    color: #3c4043;
    font-family: 'Noto Sans', sans-serif;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  h1,
  h2 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  img {
    width: 100%;
    border: 0;
    vertical-align: middle;
  }
`;
export default GlobalStyle;
