import React from "react";

export default function WeatherStats(props) {
  return (
    <div className="WeatherStats">
      <div className="row">
        <div className="col-2">Image</div>
        <div className="col-2">
          <div className="row">{Math.round(props.stats.temperature)}°</div>
          <div className="row">
            {Math.round(props.stats.minTemp)}°/{Math.round(props.stats.maxTemp)}
            °
          </div>
        </div>
        <div className="col-2">
          <div className="row">{Math.round(props.stats.wind)} km/h</div>
          <div className="row">{Math.round(props.stats.humidity)} %</div>
        </div>
      </div>
    </div>
  );
}
