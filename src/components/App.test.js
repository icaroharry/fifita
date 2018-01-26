import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should render without exploding', () => {
    expect(shallow(<App />).length).toBe(1);
  });

  it('should render the app title', () => {
    const wrapper = shallow(<App />);
    const welcome = <h1 className="App-title">FIFITA</h1>

    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('should render 3 <PlayerCard /> components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('PlayerCard').length).toBe(3);
  });

  it('should not sort any winners withouth the button click', () => {
    const component = mount(<App />);

    expect(component.state().winners).toEqual([null, null]);
  });

  it('should sort winners when button is clicked', () => {
    const component = mount(<App />);

    const sortButton = component.find('SortButton');
    sortButton.simulate('click');
    expect([0, 1, 2]).toEqual(expect.arrayContaining(component.state().winners));
  });
});
