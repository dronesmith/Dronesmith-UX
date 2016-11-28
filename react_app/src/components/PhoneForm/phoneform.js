import React from 'react';
import '../App/styles/app.css';
var $ = require('jquery');
import Registration from '../Registration/registration.js';
import RaisedButton from 'material-ui/RaisedButton';


class PhoneForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phoneNumber: "",
      countryCode: ""
    }
  
    this.onSubmit=this.onSubmit.bind(this)
    this.onChange=this.onChange.bind(this)
    this.submitNumber= this.submitNumber.bind(this)
  }

    onChange(e, name){
      var change = {};
      change[e.target.name]=e.target.value;
      this.setState(change);     
    }

  submitNumber(){
    this.props.fieldValues.user['phoneNumber']=this.state.phoneNumber
    this.props.fieldValues.user['countryCode']=this.state.countryCode

    $.ajax({
        url: "http://localhost:5050/phonecall/", 
        data: this.props.fieldValues.user,
        type: "POST",
        success: function(data){
          console.log('success');
        }        
    });        
  }

    onSubmit(e){
      e.preventDefault();
      this.submitNumber(this.props.state)
      this.props.codeStep()
    };

  render() {
   
   //1) user puts in phone number. 2) user clicks on button to send them to other component  
    return (
      <div>
        <form onChange={this.onChange}>
          <div className="center_page">
            <input type="text"
              name="countryCode"
              placeholder= "Enter your country code" />  
            <input type="text"
            name="phoneNumber"
            placeholder= "Enter your Phone Number" />   
            <RaisedButton onClick={ this.onSubmit } > Verify via SMS</RaisedButton>
          </div>
        </form>
      </div>
    );
   //1) user enters code
  }
}

export default PhoneForm;