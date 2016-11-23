import React from 'react';
import '../App/styles/app.css';
var $ = require('jquery');


class Verification extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      code: ""
    }

    this.onSubmit=this.onSubmit.bind(this)
    this.onChange=this.onChange.bind(this)
    this.submitCode= this.submitCode.bind(this)
  }

    onChange(e, name){
      var change = {};
      change[e.target.name]=e.target.value;
      this.setState(change);
           
    }

  submitCode(){
      
     this.props.fieldValues.user['code']=this.state.code
    
    $.ajax({
        url: "http://localhost:5050/verifycode/", 
        data: this.props.fieldValues.user,
        type: "POST",
        success: function(data){
          console.log('success');
        }        
    });        
  }

    onSubmit(e){
      e.preventDefault();
      this.submitCode(this.props.state)
      this.props.nextStep()
    };

  render() {
   
   //1) user puts in phone number. 2) user clicks on button to send them to other component  
    return (
      <div>
      <form onChange={this.onChange}>
        <div className="center_page">
          <input type="text"
            name="code"
            placeholder= "Enter your SMS code" />  
          <button onClick={ this.onSubmit }> Enter your SMS code</button>
        </div>
      </form>
      </div>
    );
     
  
  }
}

export default Verification;