import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const saveUserMiddleware = (store) => (next) => (action) => {
  if (action.type === 'ADD_USER') {
    try {
      const usersJson = localStorage.getItem('users');
      let users = [];

      if (usersJson !== null) {
        users = JSON.parse(usersJson);
      }

      users.push(action.user);

      const usersSerialized = JSON.stringify(users);
      localStorage.setItem('users', usersSerialized);
    } catch (err) {
      console.log(err)
    }
  }
  return next(action);
}

export default function configureStore(initialState) {  
  const middlewares = [
    thunk,
    saveUserMiddleware
  ];

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk,saveUserMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
  )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}