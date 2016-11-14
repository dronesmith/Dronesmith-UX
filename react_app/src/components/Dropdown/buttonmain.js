import React from 'react';
import './dropdown_style.css'



class ButtonMain extends React.Component{
    constructor(props){
      super(props)
      this.state ={
       selectedLang: 'Ruby'
      };

      this.handleChange=this.handleChange.bind(this)
      
  };

    handleChange(e){
      debugger
    this.setState({selectedLang:e.target.value});
    debugger
  };

  render() {
    var message='You selected '+this.state.selectedLang;

    return (
      <div>
      <select 
        value={this.state.selectedLang} 
        onChange={this.handleChange} 
      >
        <option value="Ruby">Ruby</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>

      </select>
        <p>{message}</p>
      </div>        
    );
  }
}
  
  export default ButtonMain

