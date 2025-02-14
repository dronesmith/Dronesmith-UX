'use strict';
import React from 'react';
import AppBar from 'material-ui/AppBar';
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
      var imgUrl=require('./styles/white_logo.png');
      return (
        <AppBar 
           style={{backgroundColor: indigo900}}  
           class="nav_bar"

            href="www.dronesmith.io"
           iconElementLeft={<img src={imgUrl}  href="www.dronesmith.io" url={this.props.url}  style={{margin: 10, marginTop: 4}}/>  }  
           // iconElementLeft={<img src={imgUrl}/>} 
        />
    );
  }
}
export default Nav;
