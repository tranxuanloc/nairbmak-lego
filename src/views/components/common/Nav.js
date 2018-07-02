import React from 'react';

export default (props) => 
      <nav className="navbar">
        <ul className="nav navbar-nav">
          {props.children}
        </ul>
      </nav>;