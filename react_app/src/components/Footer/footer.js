'use strict';
import React from 'react';
import './styles/footer.css';

/**
 * @module Footer
 */
class Footer extends React.Component {

    render() {
        return (
          <div className='footer_page'>
            2016, Dronesmith Technologies. All Rights Reserved. LOGO
             <a href='www.dronesmith.com/privacy'>Privacy Policy</a>
             <a href='www.dronesmith.com/service'>Terms of Service</a>
          </div>
          );
    }
}

export default Footer;