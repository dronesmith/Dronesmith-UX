import React from 'react';
import InfoForm from '../InfoForm/infoform.js';
import Verification from '../Verification/verification.js'
import Welcome from '../Welcome/welcome.js'
import LoginForm from '../LogInForm/loginform.js'
import PasswordForm from '../PasswordForm/passwordform.js';
import PhoneForm from '../PhoneForm/phoneform.js';
import RaisedButton from 'material-ui/RaisedButton';

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
                <InfoForm nextStep={this.nextStep}
                          saveValues={this.saveValues}/>
                <RaisedButton onClick={this.logStep} label="Log In" secondary={true} />
              </div>
                )

      case 2:
      return <PhoneForm fieldValues={fieldValues}
                          nextStep={this.nextStep}
                          previousStep={this.previousStep}
                          codeStep ={this.codeStep}
                          saveValues={this.saveValues} />

      case 3:
        return <Verification fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            welcome = {this.welcome}
                            saveValues={this.saveValues} />
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
