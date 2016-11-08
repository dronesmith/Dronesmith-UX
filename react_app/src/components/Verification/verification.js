import React from 'react';
import '../App/styles/app.css';
var $ = require('jquery');


class Verification extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phoneNumber: ""
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
      debugger
     $.ajax({
          url: "http://localhost:3000/phonecall/", 
          data: this.state,
          type: "POST",
          success: function(data){
            console.log('success');
          }        
      });        
  }

    onSubmit(e){
      e.preventDefault();
      this.submitNumber(this.state)
      debugger
      this.props.nextStep()
    };

  render() {
   
   //1) user puts in phone number. 2) user clicks on button to send them to other component  
    return (
      <div>
      <form onChange={this.onChange}>
        <div className="center_page">
          <input type="text"
                 name="phoneNumber"
                 placeholder= "Enter your Phone Number" />    
          <button onClick={ this.onSubmit }> Verify your phone via SMS</button>
        </div>
      </form>
      </div>
    );

   //1) user enters code
    
    return (
         <p></p> //Go to other component        
    );
  }
}

export default Verification;