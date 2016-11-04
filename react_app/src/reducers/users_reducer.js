export default function usersReducer( state = [], action) {
  switch (action.type) {
    case 'USERS_DATA':
      return action.payload
    default:
    return state
  }
}