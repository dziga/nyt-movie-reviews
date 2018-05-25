import React from 'react';
import CriticsList from './CriticsList';
import renderer from 'react-test-renderer';

it ('should return loading if critics are not loaded', () => {
  const criticsList = renderer.create(<CriticsList critics={[]}/>).toJSON();
  expect(criticsList.type).toBe('div');
  expect(criticsList.children).toEqual(['loading...']);
})

jest.mock('react-router-dom', () => ({Link: ''}))

it ('should return list of critics nested in Link', () => {
  const critics = [
    {display_name: 'name'}
  ]
  const criticsList = renderer.create(<CriticsList critics={critics}/>).toJSON();
  const singleCriticWrapper = criticsList.children[0];
  const link = singleCriticWrapper.children[0];
  const critic = link.children[0];
  
  expect(criticsList.type).toBe('ul');
  expect(singleCriticWrapper.type).toBe('li');
  expect(link.props.to).toBe(`/critics/${critics[0].display_name}`);
  expect(critic.type).toBe('div');
  expect(critic.children).toEqual([critics[0].display_name]);
})