import React, { useState } from "react";
import "./Forcast.css";
import axios from "axios";

export default function Forcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcastData, setForcastData] = useState(null);
  function displayForcast(response) {
    setForcastData(response.data.daily);

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forcast">
        <div className="row">
          <div className="col">Thurs</div>
          <div></div>
          <div className="Forcast-temperatures">
            {" "}
            <span className="Forcast-temp-min">{forcastData}°</span> /{" "}
            <span className="Forcast-temp-max">{forcastData} °</span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "ffa4fe680act3be1832a3445o0790076";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayForcast);

    return " Loading Forcast...";
  }
}
