import React from 'react';
import Routes from './Routes';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
  Route: ({ children, ...props }) =>
    {
      return props.path;
    }
}))

it('should provide paths', () => {
  const paths = [ '/', '/critics', '/critics/:name' ];
  expect(renderer.create(<Routes />).toJSON().children).toEqual(paths);
})