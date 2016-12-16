import React from 'react';
import '../App/styles/app.css';
var $ = require('jquery');
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class LoginForm extends React.Component {
 constructor(props){
    super(props)
    this.state={
      email: "",
      passwordInput: "",
      session: null
    }

    this.onChange= this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
    this.userLogIn= this.userLogIn.bind(this)

}

    onChange(e, id){
      
      var change = {};
      change[e.target.id]=e.target.value;
      this.setState(change);
    }

    userLogIn(){
      
      var self = this
      const newpassword= window.btoa(self.state.passwordInput)
      var form = {
        user:  {
        email: this.state.email,
        passwordInput: newpassword
        }
      }
      this.props.saveValues(form)

      var userData = form.user;
      var self = this;
  
      $.ajax({
          url: "http://localhost:5050/login/",
          async : false,
          type: "POST",
          dataType: 'json',
          data: userData,
          success: function(mainData) {
            console.log(mainData)
              localStorage.setItem('jwt', mainData["jwt"]) ;
          }.bind(self),
          error: function(e) {
          var errors = $.parseJSON(e.responseText).errors
              console.log('Error!', errors);
          }.bind(this),
      });
    }

     onSubmit(e){
      e.preventDefault();
      this.userLogIn(this.state)
        if (localStorage.jwt.length >9){  
             this.props.welcomeStep()
           }
        else{
           alert("incorrect password or email")
         }
     };

     componentWillUnmount(){
       window.localStorage.clear()
    }
     
  render() {
    const buttonStyle = {
    borderRadius: 6,
    overflow: 'hidden',
    color: '#ffffff'
  };
    return (
      <div>
        <form onChange={this.onChange}>
          <div className="center_page">
            <TextField
              id="email"
              hintText="Your E-mail"
            />
            <TextField
              id="passwordInput"
              hintText="Your password"
              type="password"
            />
           <RaisedButton onClick={ this.onSubmit } primary={true} style={buttonStyle}> Log in </RaisedButton>
          </div>
        </form>
      </div>
    )
   }
}

export default LoginForm;
