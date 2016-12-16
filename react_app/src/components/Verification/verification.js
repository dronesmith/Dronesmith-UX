import React from 'react';
import '../App/styles/app.css';
var $ = require('jquery');
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


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
      change[e.target.id]=e.target.value;
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
   const buttonStyle = {
    borderRadius: 6,
    overflow: 'hidden',
    color: '#ffffff',
  };
    return (
      <div>
       <form onChange={this.onChange}>
          <div className="center_page">
            <TextField
              id="code"
              hintText="Enter your SMS code"
            />
             <RaisedButton onClick={ this.onSubmit } primary={true} style={buttonStyle}> SMS code</RaisedButton>   
          </div>
        </form>
      </div>
    );
     
  
  }
}

export default Verification;