import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="ForecastDay">{day()}</div>
      <WeatherIcon icon={props.data.weather[0].icon} size={50} />
      <div className="ForecastTemp">
        <span className="ForecastTemp-Max">
          {Math.round(props.data.temp.max)}°
        </span>
        {" / "}
        <span className="ForecastTemp-Min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
