import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Button = (props) => {
  let className = 'btn', customStyle = {}, onClickFunc = null;
  switch (props.type) {
    case 'primary':
      className += ' btn-primary';
      break;
    case 'secondary':
      className += ' btn-secondary';
      break;
    case 'fb':
      className += ' btn-fb';
      break;
    case 'gg':
      className += ' btn-gg';
      break;
    default:
      className += '';
  }

  switch (props.size) {
    case 'lg':
      className += ' btn-lg';
      break;
    case 'sm':
      className += ' btn-sm';
      break;
    default:
      className += '';
  }

  if (props.className) className += ' ' + props.className;

  customStyle = props.customStyle ? props.customStyle : {};
  onClickFunc = props.onClick ? props.onClick : null;
  if (props.bgColor) customStyle.backgroundColor = props.bgColor;
  if (props.textColor) customStyle.color = props.textColor;

  return props.disabled ?
    <button className={className} style={customStyle} onClick={onClickFunc} disabled>
      {props.children}
    </button> :
    <button className={className} style={customStyle} onClick={onClickFunc}>
      {props.children}
    </button>;
};

export const IconButton = (props) =>
  props.disabled ?
    <button className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} disabled>
      <FontAwesomeIcon icon={props.icon} /> {props.children}
    </button> :
    <button className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} onClick={props.onButtonClick}>
      <FontAwesomeIcon icon={props.icon} /> {props.children}
    </button>;

export const ModalButton = (props) =>
  props.disabled ?
    <button className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} data-toggle="modal" data-target="props.modalTarget" disabled>
      {props.children}
    </button> :
    <button className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} data-toggle="modal" data-target="props.modalTarget">
      {props.children}
    </button>;

// export const AnchorButton = (props) =>
//   props.disabled ?
//     <a className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} disabled href={props.href}>
//       <FontAwesomeIcon icon={props.icon} /> {props.children}
//     </a> :
//     <a className={`btn btn-${props.type} btn-${props.size}`} style={{color: props.color, backgroundColor: props.bgColor}} onClick={props.onButtonClick} href={props.href}>
//       <FontAwesomeIcon icon={props.icon} /> {props.children}
//     </a>;

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  modalTarget: PropTypes.string,
  customStyle: PropTypes.object,
  textColor: PropTypes.string,
  onClickFunc: PropTypes.func,
  disabled: PropTypes.bool,
  bgColor: PropTypes.string
};
