import React from 'react';

export default (props) =>
  <div className="image" style={{backgroundImage: 'url('+props.image+')'}} />;