import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';

jest.mock('./Routes.js', () => { return 'routes' });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains header and main section', () => {
  expect(renderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON().children[0].type).toBe('header')
  expect(renderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON().children[1].type).toBe('div')
})
