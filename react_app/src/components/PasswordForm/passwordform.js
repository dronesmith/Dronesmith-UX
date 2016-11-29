import React from 'react';
import Registration  from '../Registration/registration.js'
import {saveValues} from '../Registration/registration.js'
import '../App/styles/app.css';
var $ = require('jquery');
import axios from 'axios';
import InfoForm from '../InfoForm/infoform.js';
import {nextStep} from '../Registration/registration.js'
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



class PasswordForm extends React.Component {
 constructor(props){
    super(props)
    this.state={
      step: 1,  
      email: "",
      newPassword: ""

    }

    // this.emailChange= this.emailChange.bind(this)
    this.onEmailSubmit= this.onEmailSubmit.bind(this)
    this.sendEmail= this.sendEmail.bind(this)
    this.onPasswordSubmit= this.onPasswordSubmit.bind(this)

} 
     

    sendEmail(state){
         const new_password = document.getElementById('password').value

        $.ajax({
          url: "http://localhost:5050/forgotpassword/", 
          data: {
           email: this.state.email,
           newPassword: new_password
          },
          type: "PUT",
          success: function(data){
            console.log('success');
          }        
        }); 

    }

    // axios.post('http://localhost:5050/callback/', {user:this.state}).then(function(response)
    //   { console.log('saved successfully')
    // })}

          // This will be called when the user clicks on the login button
     onEmailSubmit(e){
      e.preventDefault();
        this.setState({email: document.getElementById('email').value});
         this.setState({step: 2})
       }
      
      onPasswordSubmit(e){
      e.preventDefault();
        this.setState({newPassword: document.getElementById('password').value})
       this.sendEmail(function userEmail(){
       return this.state()})
     }

      
  render() {

    switch (this.state.step){

    case 1:
    return (
      <div>
        <form>
          <div className="center_page">
            <div className="row">
             <TextField
                id="email"
                hintText="Enter your email"
                  /> 
            </div>
              <br/><br/>
                <RaisedButton onClick={this.onEmailSubmit} > Your Email </RaisedButton>
           </div>
        </form>     
      </div>
    )
    case 2:
    return (
       <div>
         <p> Please enter a new password</p>

         <form>
          <div className="center_page">
            <div className="row">
             <TextField
                id="password"
                hintText="Enter your new password"
                type="password"
                 /> 
            </div>
              <br/><br/>
                <RaisedButton onClick={this.onPasswordSubmit}  > New password </RaisedButton>
           </div>
        </form>     
       </div>
           )
   } 
 } 
}

export default PasswordForm;
  