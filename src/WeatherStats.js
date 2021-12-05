import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherStats(props) {
  return (
    <div className="WeatherStats">
      <div className="row weatherVisual">
        <div className="col">
          <WeatherIcon icon={props.stats.icon} />
        </div>
        <div className="col">
          <div className="mainTemp">{Math.round(props.stats.temperature)}°</div>
          <div className=" minMax ">
            {Math.round(props.stats.minTemp)}°/{" "}
            {Math.round(props.stats.maxTemp)}°
          </div>
        </div>
        <div className="col align-self-center">
          <div className="wind">
            {Math.round(props.stats.wind)} <span className="unit">km/h</span>
          </div>
          <div className="humidity">
            {Math.round(props.stats.humidity)} <span className="unit">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
