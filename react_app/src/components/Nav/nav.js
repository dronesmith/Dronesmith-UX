'use strict';
import React from 'react';
import './styles/Nav.css';

/**
 * @module Nav
 */
class Nav extends React.Component {

    render() {
    	var imgSrc = require('./styles/logo.png');

 
        return (
        <nav className="navbar navbar-default">
          <div className='navbar-brand'>  
           <a href='https://www.dronesmith.io'><img src={imgSrc} /></a>           
          </div> 
        </nav>        
    );
  }
}

export default Nav;