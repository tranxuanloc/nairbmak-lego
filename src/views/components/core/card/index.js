import React from 'react';

// USAGE: works as a wrapper to make all cards in side card group rendered as attached elements with equal width and height

/* PropTypes
*   className: @string (text-center, w-50, mb-3 (margin-bottom: 1em), bg-dark, text-white, border-0, rounded-0)
*   customStyle: @StyleObject
*/

export const CardGroup = (props) => {
  let className = props.className ? 'card-group ' + props.className : 'card-group';
  return <div className={className} style={props.customStyle}>
    {props.children}
  </div>;
};

// USAGE: works as a wrapper to make all cards in side card deck rendered as un-attached elements with equal width and height

/* PropTypes
*   className: @string (text-center, w-50, mb-3 (margin-bottom: 1em), bg-dark, text-white, border-0, rounded-0)
*   customStyle: @StyleObject
*/

export const CardDeck = (props) => {
  let className = props.className ? 'card-deck ' + props.className : 'card-deck';
  return <div className={className} style={props.customStyle}>
    {props.children}
  </div>;
};

// TODO: props.align: @string [center, left, right]

/* PropTypes
*   className: @string (text-center, w-50, mb-3 (margin-bottom: 1em), bg-dark, text-white, border-0, rounded-0)
*   customStyle: @StyleObject
*/

export const Card = (props) => {
  let className = props.className ? 'card ' + props.className : 'card';
  return <div className={className} style={props.customStyle}>
    {props.children}
  </div>;
};

/* PropTypes
*   className: @string (text-center, w-50, mb-3 (margin-bottom: 1em), bg-dark, text-white, border-0, rounded-0)
*   customStyle: @StyleObject
*/

export const CardHeader = (props) => {
  let className = props.className ? 'card-header ' + props.className : 'card-header';
  return <div className={className} style={props.customStyle}>
    { props.children }
  </div>;
};

/* PropTypes
*   className: @string (text-center, w-50, mb-3 (margin-bottom: 1em), bg-dark, text-white, border-0, rounded-0)
*   imgSrc: @string
*   altText: @string
*   customStyle: @StyleObject
*/

export const CardImg = (props) => {
  let position = props.position === 'top' ? 'card-img-top' : 'card-img-bottom';
  let className = props.className ? position + ' ' + props.className : position;
  return <img className={className} src={props.imgSrc} alt={props.altText} />;
};

/* PropTypes
*   className: @string (text-center, w-50, mb-3 (margin-bottom: 1em), bg-dark, text-white, border-0, rounded-0)
*   customStyle: @StyleObject
*/

export const CardBody = (props) => {
  let className = props.className ? 'card-body ' + props.className : 'card-body';
  return <div className={className} style={props.customStyle}>
    { props.children }
  </div>;
};

export const CardTitle = (props) => {
  let className = props.className ? 'card-title ' + props.className : 'card-title';
  return <h5 className={className}>
    { props.children }
  </h5>;
};

export const CardText = (props) => {
  let className = props.className ? 'card-text ' + props.className : 'card-text';
  return <p className={className}>
    { props.children }
  </p>;
};

/* PropTypes
*   className: @string (text-center, w-50, mb-3 (margin-bottom: 1em), bg-dark, text-white, border-0, rounded-0)
*   href: @string
*/

export const CardLink = (props) => {
  let className = props.className ? 'card-link ' + props.className : 'card-link';
  return <a className={className} href={props.href}>
    { props.children }
  </a>;
};

export const CardFooter = (props) => {
  let className = props.className ? 'card-footer ' + props.className : 'card-footer';
  return <div className={className}>
    { props.children }
  </div>;
};