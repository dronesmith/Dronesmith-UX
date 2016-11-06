import React from 'react';
import InfoForm from '../InfoForm/infoform.js';
import Verification from '../Verification/verification.js'
import Welcome from '../Welcome/welcome.js'
import LoginForm from '../LoginForm/loginform.js'
import PasswordForm from '../PasswordForm/passwordform.js';


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

   logStep(){
  this.setState({
    step : 4
  })
};

   passwordStep(){
  this.setState({
    step : 5
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
                <InfoForm nextStep={this.nextStep} saveValues={this.saveValues}/>
                <button onClick={this.logStep}>Login</button>
               </div>
                )
                           
                            
      case 2:
        return <Verification fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            saveValues={this.saveValues} />
      case 3:
        return <Welcome />

      case 4:
        return (
              <div>
                <LoginForm />
                <button onClick={this.passwordStep}>Forgot Password</button>
                <button onClick={this.signupStep}>Sign up for Free</button>
              </div>
                )
        case 5:
         return (
            <PasswordForm />
          )

    }
  }
}


export default Registration