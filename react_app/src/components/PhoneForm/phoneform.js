import React from 'react';
import '../App/styles/app.css';
var $ = require('jquery');
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


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
      change[e.target.id]=e.target.value;
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
        alert("Hello - Please check your phone for your SMS!")
    };

  render() {
    const buttonStyle = {
    borderRadius: 6,
    overflow: 'hidden',
    color: "#ffffff",
    width: '100px'

  };
    return (
        <form onChange={this.onChange}>
          <div className="center_page">
             <TextField
              id="countryCode"
              hintText="Enter your Country Code"
            /> 
            <TextField
              id="phoneNumber"
              hintText="Enter your Phone Number"
            /> 
          </div>       
            <br/>
            <RaisedButton onClick={ this.onSubmit } primary={true} style={buttonStyle} >Verify SMS</RaisedButton>

        </form>
    );
   }
}


export default PhoneForm;