
import React from "react";
import "./style.css";

export const AlarmContainer = () => {
  return (
    <div className="ALARM-CONTAINER">
      <div className="overlap-group">
        <img className="line" alt="Line" src="line.svg" />
        <div className="alarm-name">Alarma</div>
        <div className="time">Hora</div>
        <div className="overlap">
          <div className="swich" />
        </div>
      </div>
    </div>
  );
};
