import React from 'react';

class Fail extends React.Component {

  componentDidMount() {
    this.props.customClass('error-page');
  }

  render() {
    return (
      <div className="main auth-fail">
        <div className="container">
          <div className="row">
            <div className="error-section details">
              <div className="image"></div>
              <span className="text">
                <p>You are required to install Metamask and switch to Rinkeby testnet to continue<br />How to proceed?</p>
                <div className="steps">
                  <div className="step">
                    <span className="order">01</span>
                    <p className="content">From your computer, install Metamask and register for an account.</p>
                  </div>
                  <div className="step">
                    <span className="order">02</span>
                    <p className="content">Sign in to your <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">Metamask</a> wallet in Chrome or Firefox.</p>
                  </div>
                  <div className="step no-margin-right">
                    <span className="order">03</span>
                    <p className="content">Switch the network to Rinkeby testnet. And reloading the page</p>
                  </div>
                </div>
                <p className="contact-text">Please contact <a href="mailto:support@kambria.io">support@kambria.io</a> to request for access.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Fail;