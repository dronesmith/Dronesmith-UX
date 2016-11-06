import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import App from './App/app';
import Registration from './Registration/registration';
import InfoForm from './InfoForm/infoform';
import Nav from './Nav/nav';
import Index from '../index'
import LoginForm from './LoginForm/loginform';
var Router = require('react-router').Router;


export default (
    <Route>
      <Route path="/" component={App} />
        <Registration component={Registration} />
           <InfoForm component={InfoForm} />
           <Route path="/login" component={LoginForm} /> 
    </Route>
);