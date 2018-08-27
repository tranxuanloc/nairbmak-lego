import React from 'react';
import PropTypes from 'prop-types';

const Section = (props) => {
  let className = props.className ? props.className : '';
  return <section className={className}>
    <h2 className="heading">{props.title}</h2>
    {props.children}
  </section>;
};

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Section;
