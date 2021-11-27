import React from "react";
import sunny from "./images/Asset 2.png";
import sunnyclouds from "./images/Asset 3.png";
import sun from "./images/Asset 4.png";
import snow from "./images/Asset 6.png";
import windyrain from "./images/Asset 7.png";
import rain from "./images/Asset 8.png";
import sunclouds from "./images/Asset 10.png";
import wind from "./images/Asset 13.png";
import thunder from "./images/Asset 16.png";

export default function WeatherIcon(props) {
  console.log(props.icon);
  switch (props.icon) {
    case "01d":
    case "01n":
      return <img src={sunny} alt="" className="weatherImage" />;

    case "02d":
    case "02n":
      return <img src={sunnyclouds} alt=" " className="weatherImage" />;

    case "03d":
    case "03n":
    case "04n":
    case "04d":
      return <img src={sunclouds} alt=" " className="weatherImage" />;

    case "09d":
    case "09n":
      return <img src={rain} alt=" " className="weatherImage" />;

    case "10d":
    case "10n":
      return <img src={windyrain} alt=" " className="weatherImage" />;

    case "11d":
    case "11n":
      return <img src={thunder} alt="" className="weatherImage" />;

    case "13d":
    case "13n":
      return <img src={snow} alt="" className="weatherImage" />;

    case "50d":
    case "50n":
      return <img src={wind} alt="" className="weatherImage" />;

    default:
      return <img src={sun} alt="" className="weatherImage" />;
  }
}
