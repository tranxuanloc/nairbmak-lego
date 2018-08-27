import React from 'react';
import Logo from '../core/Logo';
import LoadingBar from 'react-redux-loading-bar';

const Header = (props) =>
  <header className="site-header">
    <LoadingBar />
    <div className="container">
      <div className="row align-items-center">
        <Logo url={props.logo.url} image={props.logo.image} />
        { props.children }
      </div>
    </div>
  </header>;

export default Header;