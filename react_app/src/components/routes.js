import React from 'react';
import { Route } from 'react-router';
import App from './App/app';
import Registration from './Registration/registration';
import InfoForm from './InfoForm/infoform';
import Nav from './Nav/nav';
import Index from '../index'


export default (
    <Route>
      <Route path="/" component={App} />
        <Registration component={Registration} />
           <InfoForm component={InfoForm} />
    </Route>
);