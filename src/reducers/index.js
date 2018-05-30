import { combineReducers } from 'redux';
import { criticsReducer } from './criticsReducer';
import { criticSelectedReducer } from './criticSelectedReducer';
import { reviewsReducer } from './reviewsReducer';
import { reviewSelectedReducer } from './reviewSelectedReducer';

export default combineReducers({
  critics: criticsReducer,
  critic: criticSelectedReducer,
  selectedReview: reviewSelectedReducer,
  reviews: reviewsReducer
})