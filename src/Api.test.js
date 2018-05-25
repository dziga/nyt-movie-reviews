import React from 'react';
import Api from './Api';
import renderer from 'react-test-renderer';
import mockAxios from "axios";

mockAxios.get = jest.fn(() =>
  {
    return Promise.resolve({data: []})
  }
)

beforeEach(() => {
  mockAxios.get.mockClear();
})

it('should call critics endpoint with given filter', () => {
  Api.getCritics('filter');
  expect(mockAxios.get).toBeCalledWith(expect.stringMatching('/critics/filter.json'))
})

it('should call search reviews endpoint with given filter', () => {
  Api.searchReviews('term');
  expect(mockAxios.get).toBeCalledWith(expect.stringMatching('&query=term'))
})