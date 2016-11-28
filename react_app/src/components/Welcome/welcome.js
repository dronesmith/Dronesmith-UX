import React from 'react';
import '../App/styles/app.css';

class Welcome extends React.Component {

  render() {
    return (
      
          <div className="center_page">
            <h1 className="welcome_page">WELCOME </h1>  
            <h4>Your API key was emailed to you </h4>    
  
          </div>
      
    );
  }
}

export default Welcome;