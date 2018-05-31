import React from 'react';
import { reviewSelectedReducer } from './reviewSelectedReducer';

it ('shold return default state', () => {
  expect(reviewSelectedReducer({}, {})).toEqual({})
})

it ('shold return provided action', () => {
  const action = {
    type: 'SELECT_REVIEWS',
    payload: {}
  }
  expect(reviewSelectedReducer({}, action)).toEqual(action.payload)
})
