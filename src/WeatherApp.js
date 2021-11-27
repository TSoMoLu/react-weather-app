import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./App.css";
import WeatherStats from "./WeatherStats";

export default function WeatherApp() {
  let [city, setCity] = useState("");
  let [statistics, setStatistics] = useState("");
  let apiKey = "ffeb16c2d5b651aa562f048e606b7089";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(url).then(showData);
  }
  function handleInput(event) {
    setCity(event.target.value);
  }

  function showData(response) {
    setStatistics({
      temperature: response.data.main.temp,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  return (
    <div className="WeatherApp">
      <div className="row">
        <div className="col ">Right now in </div>
        <div className="col">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control-plaintext"
              type="Search"
              onChange={handleInput}
              autoFocus="on"
            />
          </form>
        </div>
        <div className="col">there's {statistics.description}.</div>
      </div>
      <WeatherStats stats={statistics} />
      <footer>
        This project was coded by Tanimola Somolu and is{" "}
        <a
          href="https://github.com/TSoMoLu/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
      </footer>
    </div>
  );
}
