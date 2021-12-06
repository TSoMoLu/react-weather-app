import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherApp from "./WeatherApp";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Montserrat", "sans-serif", "Source Sans Pro:200", "sans-serif"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
  document.getElementById("root")
);
