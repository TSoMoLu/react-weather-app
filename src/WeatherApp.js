import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Style/App.css";
import WeatherStats from "./WeatherStats";
import Grammar from "./Grammar";
import WeatherForecast from "./WeatherForecast";

export default function WeatherApp() {
  let [city, setCity] = useState("");
  let [statistics, setStatistics] = useState("");
  let [input, setInput] = useState(false);
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
      coordinates: response.data.coord,
    });
    setInput(true);
  }

  if (input) {
    return (
      <div className="WeatherApp ">
        <div className="row ">
          <div className="col phrase1">Right now in </div>
          <div className="col-3">
            <form onSubmit={handleSubmit}>
              <input
                className="form-control-plaintext text-center"
                type="Search"
                onChange={handleInput}
                autoFocus="on"
                placeholder={city}
              />
            </form>
          </div>

          <div className="col phrase2">
            <Grammar
              icon={statistics.icon}
              description={statistics.description}
            />
          </div>
        </div>

        <WeatherStats stats={statistics} />
        <WeatherForecast coordinates={statistics.coordinates} />
        <footer className="signature">
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
  } else {
    return (
      <div className="WeatherApp">
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            autoFocus="on"
            placeholder="Enter a city"
            onChange={handleInput}
          />
        </form>
      </div>
    );
  }
}
