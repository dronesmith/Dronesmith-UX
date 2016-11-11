class SessionApi {  

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getAllUsers() {
    const headers = this.requestHeaders();
    const request = new Request('http://localhost:5000/api/v1/users', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static login(credentials) {
    const request = new Request('http://localhost:3000/opensession/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({auth: credentials})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  } 
}

export default SessionApi; 