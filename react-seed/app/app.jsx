import "./favicon.ico";
import "./index.html";
import "babel-core/polyfill";
import "normalize.css/normalize.css";
import "./scss/app.scss";
import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App/App";

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
