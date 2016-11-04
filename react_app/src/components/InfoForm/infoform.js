import React from 'react';
import Registration  from '../Registration/registration.js'
import {saveValues} from '../Registration/registration.js'
import '../App/styles/app.css';
var $ = require('jquery');
import {map} from 'lodash/map';
import axios from 'axios';
import {nextStep} from '../Registration/registration.js'
import { Link } from 'react-router';


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

    userSignUp(){
      var self = this
      var form = {user:this.state};
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
    }
     
  render() {

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
                   
             <div className="form-group">
                <label className="control-label">Choose language</label>
                <select 
                  className="form-control"
                  name="language"
                  value={this.state.language}
                >
                  <option value="" disabled>Choose your language</option>
                </select>
              </div>
                 <br/><br/>

            <button onClick={this.onSubmit}> Get Started</button>
          </div>
        </div>
        </form>
        <div> 
          <ul>
            <li><Link to="/login">Log in</Link></li>
          </ul>
        </div>
      </div>
      //not sure if login link works!
      )
  } 
}

export default InfoForm;