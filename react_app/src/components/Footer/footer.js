'use strict';
import React from 'react';
import './styles/footer.css';
import '../App/images/icon_small.svg';


class Footer extends React.Component {
	
  render() {
    var str =" \u00A9 2016 Dronesmith Technologies. All Rights Reserved. "

    var letterStyle = {
        color: "#5C6670",
        fontFamily: "Verdana"
      };
     
    var tcolor = {
        color: "#2c87f0",
        fontFamily: "Verdana"
      };
    return (
      <div style={letterStyle}  >
        
         <div>{str}<br/><a href='http://www.dronesmith.com/privacy' style={tcolor}>Privacy Policy</a>

          </div>
         <a href='http://www.dronesmith.com/service' style={tcolor}>Terms of Service</a>
      </div>
      );
  }
}

export default Footer;

