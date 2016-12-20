import React from 'react';
import InfoForm from '../InfoForm/infoform.js';
import Verification from '../Verification/verification.js'
import Welcome from '../Welcome/welcome.js'
import LoginForm from '../LogInForm/loginform.js'
import PasswordForm from '../PasswordForm/passwordform.js';
import PhoneForm from '../PhoneForm/phoneform.js';
import FlatButton from 'material-ui/FlatButton';
import './styles/registration.css';

import {
  Step,
  Stepper,
  StepLabel
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


class Registration extends React.Component{

  constructor(props){
    super(props)
      this.state={
        step: 1


       }
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
  // var styles = {
  //      line: {
  //       color: "#5C6670",
  //       fontFamily: "Verdana",
  //       width: 600, 
  //       marginLeft: 425
  //     }
  // };


  switch (this.state.step) {
      case 1:
        return (
           <div class="mdl-grid">
            <div className="stepper">
              <Stepper activeStep={(this.state.step)-1}  style={{width: 600, margin: 'auto'}}>
                <Step >
                    <StepLabel >
                      Sign Up
                    </StepLabel>
                </Step>
                <Step>
                  <StepLabel >Phone Verify</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Confirm</StepLabel>
                </Step>
              </Stepper>
            </div>
                <br/>
                <InfoForm nextStep={this.nextStep}
                          saveValues={this.saveValues}/>
                   
                <div> <span style={{color:'#646869', fontSize: '16px'}}
 >Already have an account?</span><FlatButton  style={{ color: '#2c87f0', fontSize: '15px'  }} onClick={this.logStep} >Log in</FlatButton>
                </div>
              </div>
       )

      case 2:
      return (
      <div class="mdl-grid">
        <div className="stepper">
          <Stepper activeStep={(this.state.step)-1} style={{width: 600, margin: 'auto'}}>
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
          </div>
          <br/><br/>
        <PhoneForm fieldValues={fieldValues}
                          nextStep={this.nextStep}
                          previousStep={this.previousStep}
                          codeStep ={this.codeStep}
                          saveValues={this.saveValues} />
              </div>
                        )

      case 3:
        return (
        <div class="mdl-grid">
          <div className="stepper">
            <Stepper activeStep={(this.state.step)-1} style={{width: 600, margin: 'auto'}}>
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
          </div>
            <br/><br/>
          <Verification fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            welcome = {this.welcome}
                            saveValues={this.saveValues} /></div>)
      case 4:
        return <Welcome />

      case 5:
        return (
             <div class="mdl-grid">
                <LoginForm  welcomeStep={this.welcomeStep}
                            saveValues={this.saveValues} />
                                            <br/>
                                            <div> 
                                            <div>    
                  <FlatButton  style={{ color: '#2c87f0', fontSize: '15px' }} onClick={this.passwordStep} > Forgot password? </FlatButton>
                </div>       
                </div>
                <br/>
                 <div> <span style={{color:'#646869', fontSize: '16px'}}>New to Dronesmith?</span><FlatButton  style={{ color: '#2c87f0', fontSize: '15px'  }} onClick={this.signupStep}> Sign-up </FlatButton></div>
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
