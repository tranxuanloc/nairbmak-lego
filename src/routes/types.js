import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRouteWithRedirect = ({ component: Component, to, condition, ...rest }) =>
    <Route {...rest} render={(props) => condition === true
      ? <Component {...props} />
      : <Redirect to={to} />}
    />;

export const PrivateRouteWithRender = ({ success: Success, failure: Failure, header, footer, condition, ...rest }) =>
    <Route {...rest} render={(props) => condition === true
      ? <Success {...props} header={header} footer={footer} />
      : <Failure {...props} header={header} footer={footer} />}
    />;