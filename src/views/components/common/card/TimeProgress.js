import React from 'react';

export default (props) =>
<div className={props.className}>
  <span className="day">{props.number}</span>
  <span className="time-left">{props.type} left</span>
  <div className="progress"><div className="done" style={{width: props.progress}} /></div>
</div>;