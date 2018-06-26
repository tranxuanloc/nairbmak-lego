// import Helper from './helpers/common'
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import config from 'config';
import { updateInfo } from "redux/actions/blockchain.action";

import 'static/css/index.css';
import logo from 'logo.svg';
import Header from 'views/components/header';
import Footer from 'views/components/footer';
import Nav from 'views/components/common/Nav';
import NavItem from 'views/components/common/NavItem';
import routes from 'routes';
import {PrivateRouteWithRender} from 'routes/types';
import Fail from 'views/auth/Fail';

import _Metamask from 'helpers/metamask.class.js';
import _Token from 'helpers/token.class.js';

import Error404 from './views/errors/404';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      logo: {
        url: '/',
        image: logo
      },
      nav: [
        { url: '/', title: 'Kambria.io', exact: true },
        { url: '/howtouse', title: 'How to use', exact: false },
        { url: '/components', title: 'Components', exact: false }
      ]
    };

    this.metamask = new _Metamask();
    this.token = new _Token(config.eth.KATT.ABI, config.eth.KATT.ADDRESS, config.eth.KATT.DECIMALS, this.metamask.web3);
    
    this.init();
  }

  validateUser() {
    if (this.props.blockchain.NETWORK !== config.eth.NETWORK) return false;
    if (!this.props.blockchain.ACCOUNT) return false;
    if (!this.props.blockchain.TOKEN_BALANCE) return false;
    return true;
  }

  // init
  init() {
    // this.metamask.metaStatus().then((re) => console.log(re)).catch(er => {
    //   console.error(er);
    // });
    // Fetch metamask
    this.metamask.metaStatus().then(re => {
      this.props.updateInfo(re);
    }).catch(er => {
      console.error(er);
    });
    // Watch metamask
    this.metamask.watch().then(watcher => {
      watcher.event.on('data', re => {
        this.props.updateInfo(re);
      });
      watcher.event.on('error', er => {
        console.error(er);
      });
    }).catch(er => {
      console.error(er);
    });

    // Get coinbase
    this.metamask.getAccount().then(coinbase => {
      // Get balance
      this.token.balanceOf(coinbase).then(balance => {
        this.props.updateInfo({TOKEN_BALANCE: balance});
      }).catch(er => {
        console.error(er);
      });
      // Watch balance
      var watchBalance = this.token.watchBalance(coinbase);
      watchBalance.event.on('data', re => {
        this.props.updateInfo({TOKEN_BALANCE: re.BALANCE});
      });
      watchBalance.event.on('error', er => {
        console.error(er);
      });
    }).catch(er => {
      console.error(er);
    });
  }

  render() {
    return (
      <div id="site_wrapper">
        <Header logo={this.state.logo}>
          <Nav>
            {this.state.nav.map((item, index) => <NavItem key={index} item={item} />)}
          </Nav>
        </Header>
        <Switch>
          { 
            routes.map((route, i) => route.type === 'public' ? <Route exact key={i} path={route.path} component={route.component} /> : <PrivateRouteWithRender exact key={i} condition={this.validateUser()} path={route.path} success={route.component} failure={Fail} />)
          }
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blockchain: state.blockchain
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateInfo: (data) => updateInfo(data)
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));