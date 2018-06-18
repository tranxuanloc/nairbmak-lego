import React from 'react'

export default (props) => 
  <button className={`btn ${props.className}`} style={props.style}>
    <img src={props.icon} alt="" /> {props.children}
  </button>