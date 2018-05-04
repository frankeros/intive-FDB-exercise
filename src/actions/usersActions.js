export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user
  }
}

export const selectUser = (user) => {
  return {
    type: 'SELECT_USER',
    user
  }
}

export const fectchAllUsers = () => {
  return (dispatch) => {
    const usersJson = localStorage.getItem('users');
    let users = [];

    if (usersJson !== null) {
      users = JSON.parse(usersJson);
    }

    dispatch(getAllUsers(users));
  }
}

export const getAllUsers = (users) => {
  return {
    type: 'GET_ALL_USERS',
    users
  }
}
