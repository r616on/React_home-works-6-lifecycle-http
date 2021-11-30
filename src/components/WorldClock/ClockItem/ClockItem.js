import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./desktop.scss";

function getClock() {
  const tm = new Date();
  return {
    h: tm.getHours() * 30,
    m: tm.getMinutes() * 6,
    s: tm.getSeconds() * 6,
  };
}

const ClockItem = ({ timeShift }) => {
  const [clock, setClock] = useState(getClock());

  useEffect(() => {
    setClock(getClock());
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setClock(getClock());
    }, 1000);
  }, [clock]);

  return (
    <div className="clock">
      <span className="material-icons-outlined">close</span>
      <div className="hour">
        <div
          className="hours"
          style={{ transform: `rotateZ(${clock.h + clock.m / 12}deg)` }}
        ></div>
      </div>
      <div className="minute">
        <div
          className="minutes"
          style={{ transform: `rotateZ(${clock.m}deg)` }}
        ></div>
      </div>
      <div className="second">
        <div
          className="seconds"
          style={{ transform: `rotateZ(${clock.s}deg)` }}
        ></div>
      </div>
    </div>
  );
};

ClockItem.propTypes = {};

export default ClockItem;
