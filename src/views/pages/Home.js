import React from 'react';

import lego from 'static/images/lego.png';
import { Button } from '@kambria/kambria-lego';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {

  onButtonClick = () => alert('click');

  render() {
    return (
      <div id="site_wrapper">
        <div className="site-upper">
          {this.props.header}
        </div>
        <main className="main bg-white">
          <div className="container text-center" style={{marginTop: 40}}>
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
        </main>
        {this.props.footer}
      </div>);
  }
}