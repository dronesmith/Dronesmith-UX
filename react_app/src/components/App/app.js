'use strict';

import React from 'react';
import './styles/app.css';
import InfoForm from '../InfoForm/infoform.js'
import PhoneForm from '../PhoneForm/phoneform.js';

import Registration  from '../Registration/registration.js'
import Nav from '../Nav/nav.js'
import Footer from '../Footer/footer.js'
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';


    // getUsers(){
    //   var form = {user:this.state};
    //     console.log(form.user);
    //     $.ajax({
    //       url: "http://localhost:3000/api/v1/users/", 
    //       data: form,
    //       type: "GET",
    //       success: function(data){
    //         console.log('success');
    //       }        
    //     });   
    // }


/**
 * @module App
 */
class App extends React.Component {

    render() {
    return (
      <div> 
        <div >
          <Nav title="Dronesmith" url='https://www.dronesmith.com' />
          <br/><br/><br/>
          <Registration />
          <br/><br/><br/>
          <Footer />
        </div>
      </div>

    );
  }
}

export default App;