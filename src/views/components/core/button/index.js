import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Button = (props) =>
  props.disabled ?
    <button className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} disabled>
      {props.children}
    </button> :
    <button className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} onClick={props.onButtonClick}>
      {props.children}
    </button>;

export const IconButton = (props) =>
  props.disabled ?
    <button className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} disabled>
      <FontAwesomeIcon icon={props.icon} /> {props.children}
    </button> :
    <button className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} onClick={props.onButtonClick}>
      <FontAwesomeIcon icon={props.icon} /> {props.children}
    </button>;

export const AnchorButton = (props) =>
  props.disabled ?
    <a className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} disabled href={props.href}>
      <FontAwesomeIcon icon={props.icon} /> {props.children}
    </a> :
    <a className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} onClick={props.onButtonClick} href={props.href}>
      <FontAwesomeIcon icon={props.icon} /> {props.children}
    </a>;
