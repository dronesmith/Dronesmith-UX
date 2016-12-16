import React from 'react';


class CodeButton extends React.Component{
    constructor(props){
      super(props)
      this.state ={
       selectedCountry: ""
      };

      this.handleChange=this.handleChange.bind(this)
      
  };
    

    handleChange(e){
    this.setState({selectedCountry: e.target.value});
  };

  render() {
    var letterStyle = {
        color: "#5C6670",
        fontFamily: 'Verdana'
      };
 
    return (
      <div>
        <div style={letterStyle}>Please select your country:</div>
      <select 
        value={this.state.selectedCountry} 
        onChange={this.handleChange} 
      >
        <option value="">Select</option>
        <option value= "1" >USA</option>
        

      </select>
        
      </div>        
    );
  }
}
  
export default CodeButton