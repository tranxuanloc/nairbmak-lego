import React from 'react';
import Logo from '../core/Logo';

const Header = (props) =>
  <header className="site-header">
    <div className="container">
      <div className="row align-items-center">
        <Logo url={props.logo.url} image={props.logo.image} />
        { props.children }
      </div>
    </div>
  </header>;

export default Header;