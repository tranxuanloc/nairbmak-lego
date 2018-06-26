import React from 'react';

import lego from 'static/images/lego.png';
import icon from 'static/svg/ic-gift-box.svg';
import Button from 'views/components/common/Button';

export default () => 
  <div className="main">
    <div className="container">
      <img src={lego} className="lego-logo" alt="Lego logo" />
      <hr />
      <h1>Welcome to Kambria Lego!</h1>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <p>
        <Button className="btn-lg btn-secondary" icon={icon}>Learn More</Button> 
      </p>
    </div>
  </div>;