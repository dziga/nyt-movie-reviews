import React from 'react';
import { reviewsReducer } from './reviewsReducer';

it ('shold return default state', () => {
  expect(reviewsReducer({}, {})).toEqual({})
})

it ('shold return provided action', () => {
  const action = {
    type: 'GET_REVIEWS',
    payload: {}
  }
  expect(reviewsReducer({}, action)).toEqual(action.payload)
})