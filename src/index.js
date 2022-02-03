import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/app/configureStore";
import App from "./app/App";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
  *, body {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    color: #3c4043;
    font-family: 'Noto Sans', sans-serif;
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
    border: 0;
    vertical-align: middle;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
