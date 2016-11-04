'use strict';
import React from 'react';
import './styles/footer.css';
import {Link} from 'react-router'
import '../App/images/icon_small.svg';
// import Img from 'react-image'

/**
 * @module Footer
 */
class Footer extends React.Component {

    render() {
        return (
          <div className='footer_page'>
            2016, Dronesmith Technologies. All Rights Reserved. 
             <a href='www.dronesmith.com/privacy'>Privacy Policy</a>
             <a href='www.dronesmith.com/service'>Terms of Service</a>
          </div>
          );
    }
}

export default Footer;