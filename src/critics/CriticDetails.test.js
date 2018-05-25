import React from 'react';
import CriticDetails from './CriticDetails';
import renderer from 'react-test-renderer';

it ('should return loading when critic is null', () => {
  const c = renderer.create(<CriticDetails critic={null} />).toJSON();
  expect(c.type).toBe('div');
  expect(c.children).toEqual(['Loading...'])
})

it ('should return critic name and status', () => {
  const critic = {
    display_name: 'name',
    status: 'status'
  }
  const c = renderer.create(<CriticDetails critic={critic} />).toJSON();
  const header = c.children[0];
  expect(header.type).toBe('h2')
  expect(header.children).toEqual([critic.display_name,  " (", critic.status, ")"])
})

it ('should create elements for biography', () => {
  const critic = {
    display_name: 'name',
    status: 'status',
    bio: 'biography'
  }
  const c = renderer.create(<CriticDetails critic={critic} />).toJSON();
  const bio = c.children[1];
  expect(bio.type).toBe('div');
  expect(bio.children).toEqual([critic.bio]);
})

it ('should create elements for multimedia', () => {
  const critic = {
    display_name: 'name',
    status: 'status',
    multimedia: {
      resource: {
        src: 'src',
        width: 'width',
        height: 'height'
      }
    }
  }
  const c = renderer.create(<CriticDetails critic={critic} />).toJSON();
  const image = c.children[2].children[1];
  expect(image.type).toBe('img');
  expect(image.props).toEqual({
    alt: '', 
    src: critic.multimedia.resource.src,
    width: critic.multimedia.resource.height,
    height: critic.multimedia.resource.width,
  })
})


it ('should set defaults for missing bio and media', () => {
  const c = renderer.create(<CriticDetails critic={{}} />).toJSON();
  const bio = c.children[1];
  const media = c.children[2];
  expect(bio.type).toBe('div');
  expect(bio.children).toEqual(["..."]);
  expect(media.type).toBe('div');
  expect(media.children).toBeNull();
})