import React from 'react';
import { Route } from 'react-router';
import App from './components/app';
import Registration from './components/registration';
import InfoForm from './components/infoform';
import Nav from './components/nav';
import Index from './index'


export default (
    <Route>
      <Route path="/" component={App} />
        <Route path="/registration" component={Registration} />
    </Route>
);