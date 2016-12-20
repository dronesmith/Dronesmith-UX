import React from 'react';

class ButtonMain extends React.Component{
    constructor(props){
      super(props)
      this.state ={
       selectedLang: ""
      };

      this.handleChange=this.handleChange.bind(this)
      
  };
    

    handleChange(e){
    this.setState({selectedLang: e.target.value});
  };

  render() {
    var message='You selected '+this.state.selectedLang;
 var letterStyle = {
        color: "#5C6670",
        fontFamily: 'Verdana'
      };
 
    return (
      <div>
        <div style={letterStyle}>Please select your preferred programming language:</div>
      <select 
        value={this.state.selectedLang} 
        onChange={this.handleChange} 
      >
        <option value="">Select</option>
        <option value="javascript">JavaScript</option>
        <option value="ruby">Ruby</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="php">PHP</option>
        <option value="golang">GoLang</option>
        <option value="n/a">N/A</option>
      </select>
        
      </div>        
    );
  }
}
  
export default ButtonMain