import React from 'react';
import GitLogo from './styles/mark-github.svg'
import SlackLogo from './styles/slack_mark.svg'
import '../App/styles/app.css';

class Welcome extends React.Component {
	constructor(props){
    super(props)
    this.state={
      link: "",
      hover: false
    }

     this.gitClick= this.gitClick.bind(this)
     this.slackClick= this.slackClick.bind(this)

    this.logoHover= this.logoHover.bind(this)

  };
	

  logoHover(){
     this.setState({hover: true})
  }


   gitClick(){
   	this.setState({link: "github"})
  };


   slackClick(){
   	this.setState({link: "slack"})
  };


  render() { 

    switch (this.state.hover) {
    case true:
            (
      	 this.style= {width:"200"}
           )
      }
    switch (this.state.link) {
        case "github":
          return (
               window.location.href = "https://github.com/dronesmith/Dronesmith-Ground-Control"
         )

        case "slack": 
  	      return (
  	             window.location.href = "http://community.dronesmith.io/"
  	       )
    }
    var letterStyle = {
            color: "#5C6670",
            fontFamily: "Verdana"
          };
    var tcolor = {
            color: "#2c87f0",
            fontFamily: "Verdana"
          };

    return (
      <div className="center_page" style={letterStyle} >
        <p>Thank you! We will e-mail you shortly with your API key.</p> 
        <p>In the meantime, check out our <a href='https://dronesmith.readme.io/docs' target="_blank" style={tcolor}>API documentation</a></p>
        <p>or</p>
        <p>Get started with our <a href='https://github.com/dronesmith/Dronesmith-Ground-Control' target="_blank" style={tcolor}>sample API</a></p>
        <p>Find us on</p> 

        <div> 
          <img src={GitLogo} onClick={this.gitClick} title="Dronesmith Github account" onMouseOver={this.logoHover} style={{cursor:"pointer", width: '45px' }}/>
          <img src={SlackLogo} onClick={this.slackClick} title="Dronesmith Slack Community" onMouseOver={this.logoHover} style={{cursor:"pointer", width: '90px'}}/>
        </div>
        <br/>
        <p>Return to Dronesmith <a href='https://dronesmith.io' style={tcolor}>home</a></p>
      </div>
    );
  }
}

export default Welcome;
