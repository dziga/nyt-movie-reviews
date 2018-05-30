import { combineReducers } from 'redux';
import { criticsReducer } from './criticsReducer';
import { criticSelectedReducer } from './criticSelectedReducer';

export default combineReducers({
  critics: criticsReducer,
  critic: criticSelectedReducer
})