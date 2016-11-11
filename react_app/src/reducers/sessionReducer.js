import * as types from '../actions/actionTypes.js';  
import initialState from './initialState';  
import {browserHistory} from 'react-router';

export default function sessionReducer(state = initialState.session, action) {  
  switch(action.type) {
    case types.SIGN_IN_SUCCESS:
      browserHistory.push('/')
      return !!sessionStorage.jwt
    default: 
      return state;
  }
}
