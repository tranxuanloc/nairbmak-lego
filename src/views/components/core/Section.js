import React from 'react';
import PropTypes from 'prop-types';

const Section = (props) => {
  let className = props.className ? props.className : '';
  return <section className={className}>
    <h2 className="heading">
      {props.url ? <a href={props.url}>{props.title}</a> : props.title}
    </h2>
    {props.subHeading ? <p className="sub-heading">{props.subHeading}</p> : null}
    {props.children}
  </section>;
};

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
  url: PropTypes.string
};

export default Section;