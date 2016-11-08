import React from 'react';
import Registration  from '../Registration/registration.js'
import {saveValues} from '../Registration/registration.js'
import '../App/styles/app.css';
var $ = require('jquery');
import {map} from 'lodash/map';
import axios from 'axios';
import {nextStep} from '../Registration/registration.js'
import { Link } from 'react-router';
import LoginForm from '../LoginForm/loginform.js';
import ButtonToolbar from 'react-bootstrap'
import DropdownButton from 'react-bootstrap'
import MenuItem from 'react-bootstrap'
import Select from 'react-select';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap'
import Primary from 'react-bootstrap'
import ReactBootstrap from 'react-bootstrap'


class InfoForm extends React.Component {
 constructor(props){
    super(props)
    this.state={
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      passwordInput: "",
      passwordConfirm: "",
      language: ""
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
        language: this.state.language
        }
      }
        var userData = form.user;
        console.log(userData);
          $.ajax({
            url: "http://localhost:3000/callback/", 
            data: userData,
            type: "POST",
            success: function(data){
              console.log('success');
            }        
          });           
    }
    // axios.post('http://localhost:5050/callback/', {user:this.state}).then(function(response)
    //   { console.log('saved successfully')
    // })}
        
     onSubmit(e){
      e.preventDefault();
      this.userSignUp(this.state)
      this.props.nextStep()
    };
      

render(){

    return (
    <div>
      <form onChange={this.onChange}>
      <div className="center_page">
      <div className="row">
                    <input type="text"
                   ref="firstName"
                   name= "firstName"
                   placeholder= "first name" 
                    /> 

                   <input type="text"
                   ref="lastName"
                   name= "lastName"
                   placeholder= "last name"
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
          </div>

        </div>
        </form>  
    </div>
    )
  }
}

export default InfoForm;