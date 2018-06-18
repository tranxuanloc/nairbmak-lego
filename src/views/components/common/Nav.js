import React from 'react'
import NavItem from './NavItem'

export default (props) => 
      <nav className="navbar">
        <ul className="nav navbar-nav">
          {props.items.map((item, index) => <NavItem key={index} url={item.url} title={item.title} />)}
        </ul>
      </nav>