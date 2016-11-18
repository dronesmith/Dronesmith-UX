'use strict';

import React from 'react';
// import './styles/app.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InfoForm from '../InfoForm/infoform.js'
import PhoneForm from '../PhoneForm/phoneform.js';

import Registration  from '../Registration/registration.js'
import Nav from '../Nav/nav.js'
import Footer from '../Footer/footer.js'
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';


/**
 * @module App
 */
class App extends React.Component {

    render() {
      

    return (
      <MuiThemeProvider>
        <div>
          <div className='center_page'>
            <Nav title="Dronesmith" url='https://www.dronesmith.com' />
            <br/><br/><br/>
            <Registration />
            <br/><br/><br/>
            <Footer />
          </div>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
