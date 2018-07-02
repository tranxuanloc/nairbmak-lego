import React from 'react';
import {NavLink} from 'react-router-dom';

export default (props) => <li><NavLink exact={props.item.exact} to={props.item.url} activeClassName="active">{props.item.title}</NavLink></li>;