import React from "react";

export default function Grammar(props) {
  if (props.icon === "02d") {
    return <p>there are {props.description}.</p>;
  }
  if (props.icon === "02n") {
    return <p>there are {props.description}.</p>;
  }
  if (props.icon === "03d") {
    return <p>there are {props.description}.</p>;
  }
  if (props.icon === "03n") {
    return <p>there are {props.description}.</p>;
  }
  if (props.icon === "04d") {
    return <p>there are {props.description}.</p>;
  }
  if (props.icon === "04n") {
    return <p>there are {props.description}.</p>;
  } else {
    return <p>there's {props.description}.</p>;
  }
}
