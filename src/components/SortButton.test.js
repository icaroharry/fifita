import React from 'react';
import { shallow } from 'enzyme';
import SortButton from './SortButton';

describe('<SortButton />', () => {
  it('should render without exploding', () => {
    expect(shallow(<SortButton />).length).toBe(1);
  });

  it('should render a button with text "sort"', () => {
    const wrapper = shallow(<SortButton />);

    expect(wrapper.contains(
      <button className="SortButton">
        Sort
      </button>
    )).toBe(true);
  });

  it('should call onClick function when clicked', () => {
    const onButtonClick = jest.fn();
    const wrapper = shallow(<SortButton onClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalled();
  });
});
