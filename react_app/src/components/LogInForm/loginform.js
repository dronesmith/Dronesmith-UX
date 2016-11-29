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
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class LoginForm extends React.Component {
 constructor(props){
    super(props)
    this.state={
      email: "",
      passwordInput: "",
      session: null
    }

    this.onChange= this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
    this.userLogIn= this.userLogIn.bind(this)

}

    onChange(e, id){
      
      var change = {};
      change[e.target.id]=e.target.value;
      this.setState(change);
    }

    userLogIn(){
      
      var self = this
      const newpassword= window.btoa(self.state.passwordInput)
      var form = {
        user:  {
        email: this.state.email,
        passwordInput: newpassword
        }
      }
      this.props.saveValues(form)

      var userData = form.user;
      var self = this;
     //  function updateState(dataform){
     // this.setState( {session: dataform} );

     //  }
      $.ajax({
          url: "http://localhost:5050/login/",
          type: "POST",
          dataType: 'json',
          data: userData,
          success: function(mainData) {
            console.log(mainData)
              localStorage.setItem('jwt', mainData["jwt"]) ;
          }.bind(self),
          error: function(e) {
          var errors = $.parseJSON(e.responseText).errors
              console.log('Error!', errors);
          }.bind(this),
      });
    }


    // axios.post('http://localhost:5050/callback/', {user:this.state}).then(function(response)
    //   { console.log('saved successfully')
    // })}

     //      // This will be called when the user clicks on the login button
     // clearStorage(){
     //  this.setState({session: localStorage.jwt})
     //  localStorage.clear()
     // }

     onSubmit(e){
      e.preventDefault();
      this.userLogIn(this.state)
        if (localStorage.jwt.length >9){  
             this.props.welcomeStep()
           }
        else{
           alert("incorrect password or email")
         }
     };

     componentWillUnmount(){
    window.localStorage.clear()

 }
     
  render() {
    return (
        <div>
          <form onChange={this.onChange}>
          <div className="center_page">

              <TextField
              id="email"
              hintText="Your Email"
            />
  
              <TextField
              id="passwordInput"
              hintText="Your password"
              type="password"
            />
            
            <RaisedButton onClick={ this.onSubmit } > Login</RaisedButton>
          </div>
        </form>
       </div>
      )
   }
}

export default LoginForm;
