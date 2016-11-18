import React from 'react';
import InfoForm from '../InfoForm/infoform.js';
import Verification from '../Verification/verification.js'
import Welcome from '../Welcome/welcome.js'
import LoginForm from '../LogInForm/loginform.js'
import PasswordForm from '../PasswordForm/passwordform.js';
import PhoneForm from '../PhoneForm/phoneform.js';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

var fieldValues = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  passwordInput: "",
  passwordConfirm: "",
  language: ""
};

// function saveValues(fields) {
//   return function() {
//     fieldValues = Object.assign({}, fieldValues, fields)
//   }()
// }


// Same as nextStep, but decrementing


class Registration extends React.Component{

  constructor(props){
    super(props)
      this.state={
        step: 1
      };
     this.nextStep=this.nextStep.bind(this),
     this.logStep=this.logStep.bind(this),
     this.passwordStep=this.passwordStep.bind(this),
     this.previousStep=this.previousStep.bind(this)
     this.signupStep=this.signupStep.bind(this)
     this.codeStep=this.codeStep.bind(this)
     this.welcomeStep=this.welcomeStep.bind(this)
  }

    saveValues(fields) {
        fieldValues = Object.assign({}, fieldValues, fields);
    }

    nextStep(){
     this.setState({
     step : this.state.step + 1
   })
  };

    previousStep(){
    this.setState({
     step : this.state.step - 1
   })
  };

    codeStep(){
    this.setState({
      step : 3
    })
  };

    welcomeStep(){
    this.setState({
     step : 4
    })
  };

   logStep(){
   this.setState({
    step : 5
   })
  };

   passwordStep(){
   this.setState({
    step : 6
   })
  };

   signupStep(){
   this.setState({
    step : 1
   })
  };


  render() {

    switch (this.state.step) {
      case 1:
        return (
              <div>
              <Stepper activeStep={(this.state.step)-1}>
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
                <InfoForm nextStep={this.nextStep}
                          saveValues={this.saveValues}/>
                          <br/>
                <RaisedButton primary={true} onClick={this.logStep} label="Log In" secondary={true} />
              </div>
                )

      case 2:
      return (
        <div>
        <Stepper activeStep={(this.state.step)-1}>
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
        <PhoneForm fieldValues={fieldValues}
                          nextStep={this.nextStep}
                          previousStep={this.previousStep}
                          codeStep ={this.codeStep}
                          saveValues={this.saveValues} />
              </div>
                        )

      case 3:
        return (
          <div>
          <Stepper activeStep={(this.state.step)-1}>
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
          <Verification fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            welcome = {this.welcome}
                            saveValues={this.saveValues} /></div>)
      case 4:
        return <Welcome />

      case 5:
        return (
              <div>
                <LoginForm  welcomeStep={this.welcomeStep}
                            saveValues={this.saveValues} />
                <button onClick={this.passwordStep}>Forgot Password</button>
                <button onClick={this.signupStep}>Sign up for Free</button>
              </div>
                )
        case 6:
         return (
            <PasswordForm />
          )

    }
  }
}


export default Registration
