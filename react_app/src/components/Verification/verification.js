import React from 'react';
import '../App/styles/app.css';

class Verification extends React.Component {

  render() {
    return (
      <div className="center_page">
        <input type="text"
               ref="firstName"
               placeholder= "Verification code" />    
        <button onClick={ this.saveAndContinue }>Save and Continue</button>
      </div>
        
    );
  }
}

export default Verification;