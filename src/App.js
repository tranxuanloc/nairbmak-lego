// import Helper from './helpers/common'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import 'static/css/index.css'
import logo from 'logo.svg'
import Header from 'views/components/header'
import Footer from 'views/components/footer'
import Nav from 'views/components/common/Nav'
import NavItem from 'views/components/common/NavItem'
import routes from 'routes'

export default class App extends Component {
  state = {
    logo: {
      url: '/',
      image: logo
    },
    nav: [
      { url: '/', title: 'Kambria.io', exact: true },
      { url: '/howtouse', title: 'How to use', exact: false },
      { url: '/components', title: 'Components', exact: false }
    ]
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
          {routes.map((route, i) => <Route exact key={i} path={route.path} component={route.component} />)}
        </Switch>
        <Footer />
      </div>
    )
  }
}