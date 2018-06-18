import React from 'react';
import Logo from '../common/Logo';
import Nav from '../common/Nav';

export default (props) => 
  <header className="site-header">
    <div className="container">
      <div className="row align-items-center">
        <Logo url={props.logo.url} image={props.logo.image} />
        <Nav items={props.nav} />
      </div>
    </div>
  </header>