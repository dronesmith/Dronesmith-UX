export function fetchUsers() {

  const userData = fetch('http://localhost:????????').then(response => { return response.json()}).then(userPayLoad => { return userPayLoad})
  return { type: 'FETCH_USERS',
            payload: userData
          }
}