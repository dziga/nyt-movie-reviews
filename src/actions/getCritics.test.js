import React from 'react';
import Api from '../Api';
import getCritics from './getCritics';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);
const payload = [{display_name: 'name'}];
Api.getCritics = jest.fn().mockReturnValue(Promise.resolve(payload));

it ('should fetch critics', () => {
  const store = mockStore();
  store.dispatch(getCritics('filter')).then(() => {
    expect(store.getActions()).toEqual([{
      type: 'GET_CRITICS',
      payload
    }])
    expect(Api.getCritics).toBeCalledWith('filter')
  })
})

it ('should fetch critics and set one by name', () => {
  const store = mockStore();
  store.dispatch(getCritics('filter', 'name')).then(() => {
    expect(store.getActions()).toEqual([
    {
      type: 'GET_CRITICS',
      payload
    },
    {
      type: 'SELECT_CRITIC',
      payload: payload[0]
    }])
  })
})


