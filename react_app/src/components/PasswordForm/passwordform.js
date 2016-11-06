import React from 'react';
import Registration  from '../Registration/registration.js'
import {saveValues} from '../Registration/registration.js'
import '../App/styles/app.css';
var $ = require('jquery');
import axios from 'axios';
import InfoForm from '../InfoForm/infoform.js';
import {nextStep} from '../Registration/registration.js'
import { Link } from 'react-router';



class PasswordForm extends React.Component {
 constructor(props){
    super(props)
    this.state={
      step: 1   
    }

    // this.emailChange= this.emailChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
    this.sendEmail= this.sendEmail.bind(this)

} 
     

    sendEmail(email){
        console.log(email)
        debugger
        $.ajax({
          url: "http://localhost:3000/login/", 
          data: email,
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
      this.sendEmail(function emailChange(){
        var emailChange = document.getElementById('textbox_id').value;
       return emailChange
      }())
      this.setState({step: 2})
     }

      
  render() {

    switch (this.state.step){

    case 1:
    return (
      <div>
        <form>
          <div className="center_page">
            <div className="row">
             <input type="text"
               ref="email"
               id='textbox_id'
               name= "email"
               placeholder= "Your Email" /> 
            </div>
              <br/><br/>
                <button onClick={this.onSubmit}> Enter your Email </button>
           </div>
        </form>     
      </div>
    )
    case 2:
    return (
       <div>
         <p> Thank you your Password was sent</p>
       </div>
           )
   } 
 } 
}

export default PasswordForm;
  