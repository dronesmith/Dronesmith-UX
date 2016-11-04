import React from 'react';
import Registration  from '../Registration/registration.js'
import Footer  from '../Footer/footer.js'
import {saveValues} from '../Registration/registration.js'
import '../App/styles/app.css';
var $ = require('jquery');
import axios from 'axios';

class LoginForm extends React.Component {
 constructor(props){
    super(props)
    this.state={
      firstName: "",
      lastName: "",
      inputPassword: ""
    }

    this.onChange= this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
    this.userLogIn= this.userLogIn.bind(this)

} 
    onChange(e, name){
      var change = {};
      change[e.target.name] =e.target.value;
      this.setState(change);     
    }

    userLogIn(){
      var form = {user:this.state};
        console.log(form.user);
        $.ajax({
          url: "http://localhost:3000/login/", 
          data: form,
          type: "POST",
          success: function(data){
            console.log('success');
          }        
        }); 

    }

    // axios.post('http://localhost:5050/callback/', {user:this.state}).then(function(response)
    //   { console.log('saved successfully')
    // })}

          // This will be called when the user clicks on the login button
     onSubmit(e){
      e.preventDefault();
      this.userLogIn(this.state)
     }

      
  render() {
    return (
      <form onChange={this.onChange}>
        <div className="center_page">
          <div className="row">
           <input type="text"
           ref="firstName"
           name= "firstName"
           placeholder= "first name" 
           defaultValue={ this.props.fieldValues.firstName } /> 
           
           <input type="text"
           ref="lastName"
           name= "lastName"
           placeholder= "last name"
           defaultValue={ this.props.fieldValues.lastName } /> 
           
           <input type="text"
           ref="inputPassword"
           name= "inputPassword"
           placeholder= "inputPassword"
           defaultValue={ this.props.fieldValues.inputPassword } />        
          </div>
            <br/><br/>
          <button onClick={this.onSubmit}> Log in</button>
        </div>
      </form>
    )
  } 
}

export default LoginForm;
  