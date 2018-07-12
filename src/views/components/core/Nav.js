import React from 'react';

const Nav = (props) =>
      <nav className="navbar">
        <ul className="nav navbar-nav">
          {props.children}
        </ul>
      </nav>;

export default Nav;