import React from 'react';

const TimeProgress = (props) => {
  if (props.data.percent) {
    return (
      <div className='time-progress clearfix'>
        <div className="day left">{props.data.dayleft}</div>
        <div className='right'>
          <div className="time-left"> days left</div>
          <div className="progress">
            <div className="done" style={{ width: `${props.data.percent}` }} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <span className={props.data.className ? props.data.className : "time"}>{props.data.value}</span>
    );
  }
};

export default TimeProgress;
