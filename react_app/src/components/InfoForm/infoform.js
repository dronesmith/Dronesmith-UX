import React from 'react';
import '../App/styles/app.css';
var $ = require('jquery');
import ButtonMain from '../Dropdown/buttonmain.js'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';



class InfoForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      passwordInput: "",
      passwordConfirm: "",
      language: "",
      credentials: "",
      session: null,
      open: false
    }

    this.onChange= this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
    this.userSignUp= this.userSignUp.bind(this)
    this.handleOpen= this.handleOpen.bind(this)
    this.handleClose= this.handleClose.bind(this)

  }

    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };  

    handleNext = () => {
      const {stepIndex} = this.state;
      this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      });
    };

    handlePrev = () => {
      const {stepIndex} = this.state;
      if (stepIndex > 0) {
        this.setState({stepIndex: stepIndex - 1});
      }
    };

    state = {
      finished: false,
      value: 1
    };

   handleChange = (event, index, value) => this.setState({language: value});

    onChange(e, name){
      var change = {};
      change[e.target.id]=e.target.value;
      this.setState(change);
    }
     //must refactor signup code and seperate functions
    userSignUp(){  
      var self = this
      const newpas= window.btoa(self.state.passwordInput)
      const newpascon= window.btoa(self.state.passwordConfirm)
      var form = {
        user:  {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        companyName: this.state.companyName,
        email: this.state.email,
        passwordInput: newpas,
        passwordConfirm: newpascon,
        language: this.state[""],
        credentials: {email: this.state.email, passwordInput: newpas}
        }
      }
     this.props.saveValues(form)

      var userData = form.user;
      
        $.ajax({
          url: "http://localhost:5050/callback/",
          data: userData,
          type: "POST",
          success: function(data){
            function setSession(data){ this.setState.session(data)
              return true;
           }
          }.bind(this),
         error: function(data){
          alert('You already have an account. Please Log-in instead');
          return false;
        }.bind(this)
      });
    }

     validateForm(){
       return (
        !!this.state.firstName && 
        !!this.state.lastName && 
        !!this.state.companyName &&
        !!this.state.email &&
        !!this.state.passwordInput &&
        !!this.state.passwordConfirm &&
        !!this.state[""] 
        )
      }

     onSubmit(e){
     
      e.preventDefault();
      if (this.validateForm()){
          if ( this.state.passwordInput === this.state.passwordConfirm ){
             this.userSignUp(this.state)
              this.props.nextStep()
             
           }else{
           this.handleOpen()  
       }
      }else{
       this.handleOpen()
      }
    };            
    


render(){

  const {finished, stepIndex} = this.state;
  

  const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onClick={this.handleClose}
      />
    ];
  const buttonStyle = {
    borderRadius: 6,
    overflow: 'hidden',
    color: "#ffffff",
    width: 100
  };
 
    return (
      <div>
    <div class="mdl-grid">
      <form onChange={this.onChange}>
        <br/>

        <TextField
          id="firstName"
          hintText="First Name"
        />
        <TextField
          id="lastName"
          hintText="Last Name"
        /><br />
        <TextField
          id="companyName"
          hintText="Company"
        />
        <TextField
          id="email"
          hintText="Email Address"
        /><br />
       
            <TextField
            id="passwordInput"
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            />

            <TextField
            id="passwordConfirm"
            hintText="Password Field"
            floatingLabelText="Confirm Password"
            type="password"
            /><br />

           <br/><br/>
                   <ButtonMain language={this.props.selectedLang} />
           <br/><br/>

            <RaisedButton onClick={ this.onSubmit } primary={true} style={buttonStyle}> Get started </RaisedButton>
        </form>
     </div>
    

     
        <div>
          <Dialog
            title="Your passwords didn't match or you are missing some fields."
            actions={actions}
            primary={true}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          />
        </div>   


     </div>
    )

  }
}

export default InfoForm;
