import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class ButtonMain extends React.Component{
    constructor(props){
      super(props)
      this.state ={
       selectedLang: 'ruby'
      };

      this.handleChange=this.handleChange.bind(this)
      
  };

    handleChange(e){
      
    this.setState({selectedLang:e.target.value});
    
  };

  render() {
    var message='You selected '+this.state.selectedLang;

    return (
            <div>
            <select 
              value={this.state.selectedLang} 
              onChange={this.handleChange} 
            >
              <option value="ruby">Ruby</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="php">PHP</option>
              <option value="golang">GoLang</option>

            </select>
              <p>{message}</p>
            </div>        
    );
  }
}
  
export default ButtonMain