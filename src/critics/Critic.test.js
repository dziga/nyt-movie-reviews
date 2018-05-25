import React from 'react';
import Critic from './Critic';
import renderer from 'react-test-renderer';

it ('should return critic name', () => {
  const critic = {
    display_name: 'name'
  }
  const c = renderer.create(<Critic critic={critic} />).toJSON();
  expect(c.type).toBe('div')
  expect(c.children).toEqual([critic.display_name])
})