import React from 'react';

const TimeProgress = (props) =>
  <div className={props.className}>
    <span className="day">{props.number}</span>
    <span className="time-left"> {props.type} left</span>
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{width: props.progress}} />
    </div>
  </div>;

export default TimeProgress;