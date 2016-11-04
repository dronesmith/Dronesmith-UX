'use strict';
import React from 'react';
import './styles/Nav.css';

/**
 * @module Nav
 */
class Nav extends React.Component {

    render() {
        return (
        <nav className="navbar navbar-default">
          <div className='navbar-brand'>            
            <a href={this.props.url}> {this.props.title} </a>
          
           navbar placeholder    </div> 
        </nav>        
    );
  }
}

export default Nav;