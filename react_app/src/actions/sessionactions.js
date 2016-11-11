import axios from 'axios';
import * as types from './actionTypes';  
import sessionApi from '../api/sessionApi';


export function signInSuccess() {  
  return {type: types.SIGN_IN_SUCCESS}
}

export function signInUser(credentials) {  
  return function(dispatch) {
    return sessionApi.signin(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(signInSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}