import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.info.city}</h1>
      <ul>
        <li>
          <FormattedDate />
        </li>
        <li> {props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.info.icon} alt={props.info.description} />

          <span className="temperature">
            {Math.round(props.info.temperature)}
          </span>
          <span className="unit">°F</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)} MPH</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
