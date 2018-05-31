import React from 'react';
import { criticsReducer } from './criticsReducer';

it ('shold return default state', () => {
  expect(criticsReducer({}, {})).toEqual({})
})

it ('shold return provided action', () => {
  const action = {
    type: 'GET_CRITICS',
    payload: {}
  }
  expect(criticsReducer({}, action)).toEqual(action.payload)
})