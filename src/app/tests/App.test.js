import React from 'react';
import {shallow, mount} from 'enzyme';
import expect from 'expect';
import { App } from '../scripts/components/App';

describe('Tests App Component', () => {
  let props = {
    children: [],
    books: [],
    fetchBooks: () => {}
  };
  it('Renders the App component', () => {
    let renderedComponent = mount(<App {...props}/>);
    expect(renderedComponent.find('.nav-wrapper').length).toBe(1)
  })
})