'use strict';

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InfoForm from '../InfoForm/infoform.js'
import PhoneForm from '../PhoneForm/phoneform.js';
import Registration  from '../Registration/registration.js'
import Nav from '../Nav/nav.js'
import Footer from '../Footer/footer.js'
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import {indigo900} from 'material-ui/styles/colors';
import muiThemeable from 'material-ui/styles/muiThemeable';
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo900,
  },
  appBar: {
    height:60,
  },
});


/**
 * @module App
 */
class App extends React.Component {

    render() {
      const styles = {
        color: indigo900
      }
      var indigo900 = exports.indigo900 = '#1a237e';
 
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
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
