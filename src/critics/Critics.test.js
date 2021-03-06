import React from 'react';
import renderer from 'react-test-renderer';
import apiMock from '../Api';
import Critics from './Critics';

jest.mock('./CriticsList.js', () => {return ''})
jest.mock('./CriticDetails.js', () => {return ''})

const critics = [{display_name:'name'}]

apiMock.getCritics = () => {
  return Promise.resolve(critics)
}

it ('should contain filters', () => {
  const critics = renderer.create(<Critics match={{params:{name: 'name'}}} />).root;
  
  const filters = critics.findAllByType('button');
  expect(filters[0].props.children).toBe('all')
  expect(filters[1].props.children).toBe('full time')
  expect(filters[2].props.children).toBe('part time')
})

it ('should set state after component mounting', () => {
  const critic = renderer.create(<Critics match={{params:{name: 'name'}}} />).getInstance()
  
  setImmediate(() => {
    expect(critic.state).toEqual({ critics, critic: critics[0]})
  }, 0);
})

it('should filter on click', () => {
  const fetchCriticsMock = jest.spyOn(Critics.prototype, 'fetchCritics');
  const critics = renderer.create(<Critics match={{params:{name: 'name'}}} />).root;

  const filtersAll = critics.find(e => e.type === 'button' && e.children[0] === 'all');
  const filtersFull = critics.find(e => e.type === 'button' && e.children[0] === 'full time');
  const filtersPart = critics.find(e => e.type === 'button' && e.children[0] === 'part time');

  filtersFull.props.onClick();
  filtersAll.props.onClick();
  filtersPart.props.onClick();
  expect(fetchCriticsMock).toHaveBeenCalledWith('all')
  expect(fetchCriticsMock).toHaveBeenCalledWith('part-time')
  expect(fetchCriticsMock).toHaveBeenCalledWith('full-time')

})