import ReactDOM from 'react-dom';
import React from 'react';
import InfoForm from '../InfoForm/infoform.js';
import Verification from '../Verification/verification.js'
import Welcome from '../Welcome/welcome.js'


var fieldValues = {
  companyName : null,
}

var Registration = React.createClass({
  getInitialState: function() {
    return {
      step: 3
    }
  },

  render: function() {
    switch (this.state.step) {
      case 1:
        return  <InfoForm />
      case 2:
        return <Verification />
      case 3:
        return <Welcome />
    }
  }
})

module.exports = Registration