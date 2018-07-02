import React from 'react';

export default (props) => 
  <div className="navbar-brand mr-auto">
    <a href={props.url}>
      <img src={props.image} className="kambria-logo" alt="kambria-logo" />
    </a>
  </div>;