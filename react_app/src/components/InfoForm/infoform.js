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
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';


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
  stepIndex: 0,
  value: 1
};

handleChange = (event, index, value) => this.setState({value});

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
  const {finished, stepIndex} = this.state;
var imgSrc = require('../App/images/stepone.png');
    return (
      <div>
      <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Sign Up</StepLabel>
          </Step>
          <Step>
            <StepLabel>Phone Verify</StepLabel>
          </Step>
          <Step>
            <StepLabel>Confirm</StepLabel>
          </Step>
        </Stepper>
    <div class="mdl-grid">
      <form onChange={this.onChange}>
        <br/>

        <TextField
          id="firstName"
          hintText="Firstname"
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


        <SelectField
       floatingLabelText="Language"
       value={this.state.value}
       onChange={this.handleChange}
     >
       <MenuItem value={1} primaryText="Never" />
       <MenuItem value={2} primaryText="Every Night" />
       <MenuItem value={3} primaryText="Weeknights" />
       <MenuItem value={4} primaryText="Weekends" />
       <MenuItem value={5} primaryText="Weekly" />
     </SelectField><br />

            <TextField
            id="passwordInput"
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            />

            <TextField
            id="passwordConfirm"
            hintText="Password Field"
            floatingLabelText="Confirm Passwod"
            type="password"
            /><br />

           <br/><br/>
            <RaisedButton onClick={this.onSubmit} label="Get Started" primary={true} />
        </form>
     </div>
     </div>
    )

  }
}

export default InfoForm;
