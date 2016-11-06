import React from 'react';
import Registration  from '../Registration/registration.js'
import {saveValues} from '../Registration/registration.js'
import '../App/styles/app.css';
var $ = require('jquery');
import axios from 'axios';
import InfoForm from '../InfoForm/infoform.js';
import {nextStep} from '../Registration/registration.js'
import PasswordForm from '../PasswordForm/passwordform.js';
import { Link } from 'react-router';
import Button from 'react-bootstrap/lib/Button';




class LoginForm extends React.Component {
 constructor(props){
    super(props)
    this.state={
      firstName: "",
      lastName: "",
      inputPassword: ""
    }

    this.onChange= this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
    this.userLogIn= this.userLogIn.bind(this)

} 

    onChange(e, name){
      var change = {};
      change[e.target.name] =e.target.value;
      this.setState(change);     
    }

    userLogIn(){
      var form = {user:this.state};
        console.log(form.user);
        $.ajax({
          url: "http://localhost:3000/login/", 
          data: form,
          type: "POST",
          success: function(data){
            console.log('success');
          }        
        }); 

    }

    // axios.post('http://localhost:5050/callback/', {user:this.state}).then(function(response)
    //   { console.log('saved successfully')
    // })}

          // This will be called when the user clicks on the login button
     onSubmit(e){
      e.preventDefault();
      this.userLogIn(this.state)
     };

      
  render() {
    return (
        <div>
        <form onChange={this.onChange}>
          <div className="center_page">
            <div className="row">
             <input type="text"
             ref="firstName"
             name= "firstName"
             placeholder= "first name" /> 
             
             <input type="text"
             ref="lastName"
             name= "lastName"
             placeholder= "last name" />
             
             <input type="text"
             ref="inputPassword"
             name= "inputPassword"
             placeholder= "inputPassword" />
            </div>
              <br/><br/>
            <Button onClick={this.onSubmit}> Log in</Button>

          </div>
        </form>     
       </div>
      )
   }
}

export default LoginForm;
  