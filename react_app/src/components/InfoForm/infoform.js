import React from 'react';
import Registration  from '../Registration/registration.js'
import {saveValues} from '../Registration/registration.js'
import '../App/styles/app.css';
var $ = require('jquery');
import {map} from 'lodash/map';
import axios from 'axios';
import {nextStep} from '../Registration/registration.js'
import { Link } from 'react-router';
import LoginForm from '../LogInForm/loginform.js';
import ButtonToolbar from 'react-bootstrap'
import DropdownButton from 'react-bootstrap'
import MenuItem from 'react-bootstrap'
import Select from 'react-select';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap'
import Primary from 'react-bootstrap'
import ReactBootstrap from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import ButtonMain from '../Dropdown/buttonmain.js'

class InfoForm extends React.Component {
 constructor(props){
    super(props)
    this.state={
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      passwordInput: "",
      passwordConfirm: "",
      language: "",
      credentials: "",
      session: null
    }

    this.onChange= this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
    this.userSignUp= this.userSignUp.bind(this)
}

    onChange(e, name){
      var change = {};
      change[e.target.name]=e.target.value;
      this.setState(change);     
    }
     //must refactor signup code and seperate functions 
    userSignUp(){
      var self = this
      const newpas= window.btoa(self.state.passwordInput)
      const newpascon= window.btoa(self.state.passwordConfirm)
      var form = {
        user:  {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        companyName: this.state.companyName,
        email: this.state.email,
        passwordInput: newpas,
        passwordConfirm: newpascon,
        language: this.state[""],
        credentials: {email: this.state.email, passwordInput: newpas}
        }
      }
     this.props.saveValues(form)

      var userData = form.user;
      debugger
        $.ajax({
          url: "http://localhost:3000/callback/", 
          data: userData,
          type: "POST",
          success: function(data){
            function setSession(data){ this.setState.session(data)
           }   
            
          }.bind(this),
          error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
      }); 
    }        
        
     onSubmit(e){
      e.preventDefault();
      this.userSignUp(this.state) 
      this.props.nextStep()
    };
 
render(){

    return (
    <div class="mdl-grid">
      <form onChange={this.onChange}>
                <br/>
        <input type="text"
           ref="firstName"
           name= "firstName"
           placeholder= "firstName"
            /> 

           <input type="text"
           ref="lastName"
           name= "lastName"
           placeholder= "lastName" 
            /> 

           <input type="text"
           ref="companyName"
           name= "companyName"
           placeholder= "companyName"
            /> 

           <input type="text"
           ref="email"
           name= "email"
           placeholder= "email" 
            /> 

           <ButtonMain      
            /> 
            <br/>

           <input type="text"
           ref="passwordInput"
           name= "passwordInput"
           placeholder= "password" 
            /> 
           
           <input type="text"
           ref="passwordConfirm"
           name= "passwordConfirm"
           placeholder= "passwordConfirm" 
            />  
           <br/><br/>
              <Button onClick={this.onSubmit}> Get Started</Button>
        </form>  
     </div>
    )

  }
}

export default InfoForm;