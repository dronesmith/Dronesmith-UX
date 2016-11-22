'use strict';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import './styles/Nav.css'
import {indigo900} from 'material-ui/styles/colors';

// class Login extends React.Component {
//   static muiName = 'FlatButton';

//   render() {
//     return (
//       <FlatButton {...this.props} label="Login" />
//     );
//   }
// }


// const Logged = (props) => (
//   <IconMenu
//     {...props}
//     iconButtonElement={
//       <IconButton><MoreVertIcon /></IconButton>
//     }
//     targetOrigin={{horizontal: 'right', vertical: 'top'}}
//     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//   >
//     <MenuItem primaryText="Refresh" />
//     <MenuItem primaryText="Help" />
//     <MenuItem primaryText="Sign out" />
//   </IconMenu>
// );

// Logged.muiName = 'IconMenu';

/**
 * @module Nav
 */
class Nav extends React.Component {
  // state = {
  //   logged: false,
  // };
  // handleChange = (event, logged) => {
  //   this.setState({logged: logged});
  // };
    render() {
      var imgUrl=require('../Nav/styles/white_logo.png');
      return (
        <AppBar 
           style={{backgroundColor: indigo900}}  
           class="nav_bar"
           iconElementLeft={<img src={imgUrl} url={this.props.url} /> }   
           // iconElementLeft={<img src={imgUrl}/>} 
        />
    );
  }
}
export default Nav;
