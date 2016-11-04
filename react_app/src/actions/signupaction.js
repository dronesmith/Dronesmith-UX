import axios from 'axios';


export default function userSignUp(userData){
	return dispatch => {
		return axios.post('/api/users', userData)
	}
}