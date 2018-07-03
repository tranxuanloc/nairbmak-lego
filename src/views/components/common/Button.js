import React from 'react';

export default (props) =>
  props.disabled ?
    <button className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} disabled>
      {props.icon || ''}{props.children}
    </button> :
    <button className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} onClick={props.onButtonClick}>
      {props.icon || ''}{props.children}
    </button>;