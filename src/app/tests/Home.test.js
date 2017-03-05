import React from 'react';
import {shallow, mount} from 'enzyme';
import expect from 'expect';
import { Home } from '../scripts/components/Home/Home';

describe('Tests Home Component', () => {
  it('Renders the Home component', () => {
    let props = {
      books: [],
      createBook: () => {},
      deleteBook: () => {}
    };
    let renderedComponent = mount(<Home {...props} />);
    expect(renderedComponent.text()).toInclude('Add new Book');
    expect(renderedComponent.props().books).toEqual([]);
    expect(renderedComponent.props().createBook).toBeA('function');
  })
})