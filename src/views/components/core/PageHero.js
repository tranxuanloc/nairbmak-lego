import React from 'react';

const PageHero = (props) =>
  <div className="page-hero">
    <h1 className="heading">{props.headline}</h1>
    <span className="description">{props.description}</span>
  </div>;
export default PageHero;