import React from 'react';
import {NavLink} from 'react-router-dom';

const NavItem = (props) => <li><NavLink exact={props.item.exact} to={props.item.url} activeClassName="active">{props.item.title}</NavLink></li>;

export default NavItem;