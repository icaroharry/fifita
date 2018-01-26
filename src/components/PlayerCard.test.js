import React from 'react';
import { shallow } from 'enzyme';
import PlayerCard from './PlayerCard';

describe('<PlayerCard />', () => {
  it('should render without exploding', () => {
    expect(shallow(<PlayerCard />).length).toBe(1);
  });

  it('should render a player picture', () => {
    const wrapper = shallow(<PlayerCard />);

    expect(wrapper.find('.PlayerCard-pic').length).toBe(1);
  });

  it('should render the player\'s name', () => {
    const wrapper = shallow(<PlayerCard playerName="Pedrão" />);

    expect(wrapper.text()).toBe('Pedrão');
  });

  it('should highlight the card if the player is a winner', () => {
    const wrapper = shallow(<PlayerCard winner={true} />);

    expect(wrapper.hasClass('winner')).toBe(true);
  });

  it('should not highlight the card if the player is not a winner', () => {
    const wrapper = shallow(<PlayerCard winner="false" />);

    expect(wrapper.hasClass('winner')).toBe(false);
  });
});
