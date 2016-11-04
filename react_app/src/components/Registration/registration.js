import React from 'react';
import InfoForm from '../InfoForm/infoform.js';
import Verification from '../Verification/verification.js'
import Welcome from '../Welcome/welcome.js'
import LoginForm from '../LogInForm/loginform.js'


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

function nextStep(){
  this.setState({
    step : this.state.step + 1
  })
};

// Same as nextStep, but decrementing


class Registration extends React.Component{

  constructor(props){
    super(props)
      this.state={
        step: 1
        };
     this.nextStep=this.nextStep.bind(this)
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



  render() {
    switch (this.state.step) {
      case 1:
        return <InfoForm nextStep={this.nextStep} saveValues={this.saveValues}/>
                           
                            
      case 2:
        return <Verification fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            saveValues={this.saveValues} />
      case 3:
        return <Welcome />
    }
  }
}


export default Registration