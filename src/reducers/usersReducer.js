const INITIAL_STATE = {
  newUsers: [],
  allUsers: [],
  selectedUser: undefined
}

export const usersReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...currentState,
        newUsers: [...currentState.newUsers, action.user],
        allUsers: currentState.allUsers,
        selectedUser: action.user
      }
    case 'SELECT_USER':
      return {
        ...currentState,
        newUsers: currentState.newUsers,
        allUsers: currentState.allUsers,
        selectedUser: action.user
      }
    case 'GET_ALL_USERS':
      return {
        ...currentState,
        newUsers: currentState.newUsers,
        allUsers: action.users,
        selectedUser: undefined
      }
    default:
      return currentState;
  }
}

