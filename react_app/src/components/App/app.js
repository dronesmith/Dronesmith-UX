'use strict';

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Registration  from '../Registration/registration.js'
import Nav from '../Nav/nav.js'
import Footer from '../Footer/footer.js'
import {indigo900, grey700} from 'material-ui/styles/colors';
const muiTheme = getMuiTheme({
  fontFamily: 'Verdana, sans-serif',
  palette: {
    primary1Color: indigo900,
    textColor: grey700,
    shadowColor: '#ffffff',
  },
  appBar: {
    height:65,
  }
  
});

/**
 * @module App
 */
class App extends React.Component {

    render() {
      
 
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div className='center_page'>
            <Nav title="Dronesmith"  href="www.dronesmith.io" url='https://www.dronesmith.com' />
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
