import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherStats(props) {
  return (
    <div className="WeatherStats">
      <div className="row">
        <div className="col">
          <WeatherIcon icon={props.stats.icon} />
        </div>
        <div className="col">
          <div className="mainTemp">{Math.round(props.stats.temperature)}°</div>
          <div className="minMax">
            {Math.round(props.stats.minTemp)}°/
            {Math.round(props.stats.maxTemp)}°
          </div>
        </div>
        <div className="col-2">
          <div className="row wind">{Math.round(props.stats.wind)} km/h</div>
          <div className="row humidity">
            {Math.round(props.stats.humidity)} %
          </div>
        </div>
      </div>
    </div>
  );
}
