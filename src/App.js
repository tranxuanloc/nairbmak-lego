import React, { Component } from 'react';
import logo from './logo.svg';
import lego from './lego.png';
import './static/css/index.css';

class App extends Component {
  render() {
    return (
      <div id="site_wrapper">
        <header className="site-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="navbar-brand mr-auto"><a href="/"><img src={logo} className="kambria-logo" alt="kambria-logo" /></a></div>
              <nav className="navbar">
                <ul className="nav navbar-nav">
                  <li><a aria-current="false" href="/">Kambria.io</a></li>
                  <li><a aria-current="false" href="/">How to use</a></li>
                  <li><a aria-current="false" href="/">Components</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div className="main">
          <div className="container">
            <img src={lego} className="lego-logo" alt="Lego logo" />
            <hr />
            <h1>Welcome to Kambria Lego!</h1>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
        <footer className="footer">
          <div className="container d-flex flex-row flex-wrap align-items-center justify-content-center">
            <div className="item copyright">Copyright © 2018 Kambria.io</div>
            <div className="item contact"><a href="mailto:info@kambria.io" className="color-gray color-base-hover">info@kambria.io</a></div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
