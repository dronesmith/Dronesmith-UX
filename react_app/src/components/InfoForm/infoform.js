import React from 'react';
import Registration  from '../Registration/registration.js'
import '../App/styles/app.css';


class InfoForm extends React.Component {

  render() {
    return (
      <div className="center_page">
      <div className="form">
            <input type="text"
                   ref="firstName"
                   placeholder= "first name" />    
            <input type="text"
                   ref="lastName"
                   placeholder= "last name" /> 
            <input type="text"
                   ref="companyName"
                   placeholder= "Company name" />
                   <br/>
            <label>Choose language</label>
            <select value="B" ref="language">
              <option value="A">Ruby</option>
              <option value="B">Javascript</option>
              <option value="C">Java</option>
            </select>
                 <br/><br/>

            <button onClick={ this.saveAndContinue }> Get Started</button>
          </div>
        </div>
      );
  };

  saveAndContinue(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      firstName: this.refs.firstName.getDOMNode().value,
      lastName: this.refs.lastName.getDOMNode().value,
      companyName: this.refs.companyName.getDOMNode().value,
      language: this.refs.language.getDOMNode().value

    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
}

export default InfoForm;