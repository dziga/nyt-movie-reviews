import React from 'react';
import selectReview from './selectReview';

it ('should return given review', () => {
  const review = {};
  const expectedResult = {
    type: 'SELECT_REVIEW',
    payload: review
  }
  
  expect(selectReview(review)).toEqual(expectedResult);
})