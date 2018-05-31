import React from 'react';
import Api from '../Api';
import getReviews from './getReviews';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);
const payload = [{display_name: 'name'}];
Api.searchReviews = jest.fn().mockReturnValue(Promise.resolve(payload));

it ('should fetch reviews', () => {
  const store = mockStore();
  store.dispatch(getReviews('term')).then(() => {
    expect(store.getActions()).toEqual([{
      type: 'GET_REVIEWS',
      payload
    }])
    expect(Api.searchReviews).toBeCalledWith('term')
  })
})