import React from 'react';
import { criticSelectedReducer } from './criticSelectedReducer';

it ('shold return default state', () => {
  expect(criticSelectedReducer({}, {})).toEqual({})
})

it ('shold return provided action', () => {
  const action = {
    type: 'SELECT_CRITIC',
    payload: {}
  }
  expect(criticSelectedReducer({}, action)).toEqual(action.payload)
})