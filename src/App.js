import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import config from 'config';
import { Metamask, Token } from '@kambria/contract-cli';

import 'static/styles/index.css';
import logo from 'logo.svg';

import { Header, Footer, Nav, NavItem, PageLoader } from '@kambria/kambria-lego';

import routes from 'routes';
import {PrivateRouteWithRender} from 'routes/types';

import Fail from 'views/auth/Fail';
import Error404 from './views/errors/404';

import { updateInfo } from "redux/actions/blockchain.action";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: {
        url: '/',
        image: logo
      },
      nav: [
        { url: '/kambria-components', title: 'Kambria', exact: true },
        { url: '/bootstrap-components', title: 'Bootstrap', exact: false },
        { url: '/redux', title: 'Redux', exact: false }
      ]
    };

    this.metamask = new Metamask();
    this.token = new Token(config.eth.KATT.ADDRESS, config.eth.KATT.DECIMALS, this.metamask.web3);
    this.tWatcher = null;

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
    // Fetch metamask
    this.metamask.fetch().then(re => {
      this.props.updateInfo(re);
      this.token.watch(re.ACCOUNT).then(tWatcher => {
        this.tWatcher = tWatcher;
        this.tWatcher.event.on('data', re => {
          this.props.updateInfo({TOKEN_BALANCE: re.BALANCE});
        });
        tWatcher.event.on('error', er => {
          console.log(er);
          this.props.updateInfo({TOKEN_BALANCE: 0});
        });
      });
    }).catch(er => {
      console.log(er);
      this.props.updateInfo({NETWORK: null, ACCOUNT: null, BALANCE: null});
    });

    // Watch metamask & token
    this.metamask.watch().then(watcher => {
      watcher.event.on('data', re => {
        this.props.updateInfo(re);
        if (re.CHANGED === 'account') {
          // Stop watching
          if(this.tWatcher) this.tWatcher.stopWatching();
          // Watch balance
          this.token.watch(re.ACCOUNT).then(tWatcher => {
            this.tWatcher = tWatcher;
            this.tWatcher.event.on('data', re => {
              this.props.updateInfo({TOKEN_BALANCE: re.BALANCE});
            });
            this.tWatcher.event.on('error', er => {
              console.log(er);
              this.props.updateInfo({TOKEN_BALANCE: 0});
            });
          });
        }
      });
      watcher.event.on('error', er => {
        console.log(er);
        this.props.updateInfo({NETWORK: null, ACCOUNT: null, BALANCE: null});
      });
    }).catch(er => {
      console.log(er);
      this.props.updateInfo({NETWORK: null, ACCOUNT: null, BALANCE: null});
    });
  }

  render() {
    const header = <Header logo={this.state.logo}>
      <Nav>
        {this.state.nav.map((item, index) => <NavItem key={index} item={item} />)}
      </Nav>
      {this.props.ui.status === 'loading' && <PageLoader type='top' />}
    </Header>;

    const footer = <Footer />;

    return (
        <Switch>
          {
            routes.map((route, i) => route.type === 'public' ? <Route exact key={i} path={route.path} render={(props) => <route.component {...props} header={header} footer={footer} />} /> : <PrivateRouteWithRender exact key={i} condition={this.validateUser()} path={route.path} success={route.component} failure={Fail} header={header} footer={footer} />)
          }
          <Route render={(props) => <Error404 {...props} header={header} footer={footer} />} />
        </Switch>
    );
  }
}

const mapStateToProps = state => ({
  blockchain: state.blockchain,
  ui: state.ui
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateInfo
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));