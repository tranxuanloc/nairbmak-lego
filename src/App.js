// import Helper from './helpers/common'
import React, { Component } from 'react'
import 'static/css/index.css'
import logo from 'logo.svg'
import Header from 'views/components/header'
import Footer from 'views/components/footer'
import Home from 'views/pages/Home'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      logo: {
        url: '/',
        image: logo
      },
      nav: [
        { url: '/', title: 'Kambria.io' },
        { url: 'https://google.com', title: 'How to use' },
        { url: 'https://facebook.com', title: 'Components' }
      ]
    }
  }

  render() {
    return (
      <div id="site_wrapper">
        <Header logo={this.state.logo} nav={this.state.nav} />
        <Home />
        <Footer />
      </div>
    )
  }
}
