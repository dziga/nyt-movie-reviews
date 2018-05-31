import React from 'react';
import selectCritic from './selectCritic';

it ('should return given critic', () => {
  const critic = {};
  const expectedResult = {
    type: 'SELECT_CRITIC',
    payload: critic
  }
  
  expect(selectCritic(critic)).toEqual(expectedResult);
})