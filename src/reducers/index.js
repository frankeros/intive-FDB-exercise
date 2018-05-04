import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import {countriesReducer} from './countriesReducer';
import {usersReducer} from './usersReducer';

export default combineReducers({
  countriesState: countriesReducer,
  usersState: usersReducer,
  routing
})