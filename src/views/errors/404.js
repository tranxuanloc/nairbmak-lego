import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = (props) =>
      <div id="site_wrapper" className="error-page">
        {props.header}
        <div className="main not-found">
          <div className="container">
            <div className="row">
              <div className="error-section not-found">
                <div className="image"></div>
                <span className="text">
                  <p>OOPS, SORRY WE CAN'T FIND THAT PAGE!</p>
                  <p>Either something went wrong or the page doesn't exist anymore.</p>
                </span>
                <NavLink className="button" activeClassName="active" to="/">Back to Home</NavLink>
              </div>
            </div>
          </div>
        </div>
        {props.footer}
      </div>;

export default Error404;