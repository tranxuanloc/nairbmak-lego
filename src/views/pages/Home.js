import React from 'react';

import lego from 'static/images/lego.png';
import { Button } from 'views/components/core/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {

  onButtonClick = () => alert('click');

  render(){
    return (
      <div className="main">
        <div className="container text-center">
          <img src={lego} className="lego-logo" alt="Lego logo" />
          <hr />
          <h1>Welcome to Kambria Lego!</h1>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <Button type="secondary" icon={<FontAwesomeIcon icon={faCoffee} />} onButtonClick={this.onButtonClick}>Learn More</Button>
          </p>
        </div>
      </div>);
  }
}