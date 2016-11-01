'use strict';

import React from 'react';
import './styles/app.css';
import InfoForm from '../InfoForm/infoform.js'
import Registration  from '../Registration/registration.js'
import Nav from '../Nav/nav.js'
import Footer from '../Footer/footer.js'

/**
 * @module App
 */
class App extends React.Component {

    render() {
    return (
      <div className="center_page">
        <Nav title="Dronesmith" url='https://www.dronesmith.com' />
        <br/><br/><br/>
        <Registration />
        <br/><br/><br/>
        <Footer />
      </div>
    );
  }
}

export default App;