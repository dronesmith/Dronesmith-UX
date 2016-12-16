import React from 'react';
import '../App/styles/app.css';

class Welcome extends React.Component {
	
 componentWillMount(){
    window.localStorage.clear()

 }
 
  render() {
    return (
    <div className="center_page">
      <h1 className="welcome_page">Welcome </h1>  
    </div>
    );
  }
}

export default Welcome;