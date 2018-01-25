import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders app title', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">FIFITA</h1>

  expect(wrapper.contains(welcome)).toEqual(true);
});
