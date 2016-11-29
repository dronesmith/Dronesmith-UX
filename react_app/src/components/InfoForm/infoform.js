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
import Select from 'react-select';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap'
import Primary from 'react-bootstrap'
import ReactBootstrap from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import ButtonMain from '../Dropdown/buttonmain.js'
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import {indigo900} from 'material-ui/styles/colors';



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



handleNext = () => {
  const {stepIndex} = this.state;
  this.setState({
    stepIndex: stepIndex + 1,
    finished: stepIndex >= 2,
  });
};

handlePrev = () => {
  const {stepIndex} = this.state;
  if (stepIndex > 0) {
    this.setState({stepIndex: stepIndex - 1});
  }
};

state = {
  finished: false,
  value: 1
};

handleChange = (event, index, value) => this.setState({language: value});

    onChange(e, name){
      var change = {};
      change[e.target.id]=e.target.value;
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
      
        $.ajax({
          url: "http://localhost:5050/callback/",
          data: userData,
          type: "POST",
          success: function(data){
            function setSession(data){ this.setState.session(data)
              console.log(this.state)
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
      alert("Hello - Please check your email for your API key!")
    };

render(){
  const {finished, stepIndex} = this.state;
    return (
      <div>
    <div class="mdl-grid">
      <form onChange={this.onChange}>
        <br/>

        <TextField
          id="firstName"
          hintText="First Name"
        />
        <TextField
          id="lastName"
          hintText="Last Name"
        /><br />
        <TextField
          id="companyName"
          hintText="Company"
        />
        <TextField
          id="email"
          hintText="Email Address"
        /><br />
       
            <TextField
            id="passwordInput"
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            />

            <TextField
            id="passwordConfirm"
            hintText="Password Field"
            floatingLabelText="Confirm Password"
            type="password"
            /><br />

           <br/><br/>
                   <ButtonMain language={this.props.selectedLang}/>
           <br/><br/>

            <RaisedButton onClick={this.onSubmit} label="Get Started" primary={true}  />
        </form>
     </div>
     </div>
    )

  }
}

export default InfoForm;
