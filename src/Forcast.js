import React from "react";
import "./Forcast.css";

export default function Forcast() {
  return (
    <div className="Forcast">
      <div className="row">
        <div className="col">Thurs</div>
        <div>Icon</div>
        <div className="Forcast-temperatures">
          {" "}
          <span className="Forcast-temp-min">40°</span> /{" "}
          <span className="Forcast-temp-max"> 60°</span>
        </div>
      </div>
    </div>
  );
}
