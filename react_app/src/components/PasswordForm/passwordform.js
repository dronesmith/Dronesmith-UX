import React from 'react';
import '../App/styles/app.css';
var $ = require('jquery');
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import LoginForm from '../LogInForm/loginform.js'
import FlatButton from 'material-ui/FlatButton';



class PasswordForm extends React.Component {
 constructor(props){
    super(props)
    this.state={
      step: 1,  
      email: "",
      newPassword: "",
      apiKey: ""

    }
    this.onEmailSubmit= this.onEmailSubmit.bind(this)
    this.sendEmail= this.sendEmail.bind(this)
    this.onPasswordSubmit= this.onPasswordSubmit.bind(this)
    this.loginStep= this.loginStep.bind(this)

  } 

    sendEmail(state){
       const new_password = document.getElementById('newPassword').value

      $.ajax({
        url: "http://localhost:5050/forgotpassword/", 
        data: {
         email: this.state.email,
         apiKey: this.state.apiKey,
         newPassword: new_password
        },
        type: "PUT",
        success: function(data){
            console.log("success");
        },   
         error: function(data){
          alert('ApiKey or email was not correct');
        }     
      }); 
    }

     onEmailSubmit(e){
      e.preventDefault();
        this.setState({email: document.getElementById('email').value});
        this.setState({apiKey: document.getElementById('apiKey').value});
         this.setState({step: 2})
       }
      
      onPasswordSubmit(e){
      e.preventDefault();
        this.setState({newPassword: document.getElementById('newPassword').value})
       this.sendEmail(function userEmail(){
       return this.state()})
       this.loginStep()
       }
       
       loginStep(){
        this.setState({step: 3})
       }     

      
  render() {
  const buttonStyle = {
      borderRadius: 6,
      overflow: 'hidden',
      color: "#ffffff",
      width: 100

    };

      switch (this.state.step){
    case 1:
    return (
      <div>
        <form>
          <div className="center_page">
            <div className="row">
             <TextField
                id="email"
                hintText="Enter your e-mail"
                  />        

              <TextField
                id="apiKey"
                hintText="Enter your apiKey"
                  />         
            <RaisedButton primary={true} onClick={this.onEmailSubmit} style={buttonStyle}> Submit</RaisedButton> 

            </div>
           
           </div>
        </form>     
         <div> <span style={{color:'#646869', fontSize: '16px'}}> Already have an account?</span><FlatButton  style={{ color: '#6698ff', fontSize: '15px'  }} onClick={this.loginStep} >Log in</FlatButton></div>

      </div>
    )
    case 2:
    return (
       <div>

         <form>
          <div className="center_page">       
             <TextField
                id="newPassword"
                 hintText="Enter your new password"
                 type="password"

                 /> 
           </div>
         <div> <FlatButton  style={{ color: '#6698ff', fontSize: '15px'  }} onClick={this.onPasswordSubmit} >Submit</FlatButton></div>
        </form> 

       </div>
    )

    case 3:
    return(
      <LoginForm />
      )
   } 
 } 
}

export default PasswordForm;
  