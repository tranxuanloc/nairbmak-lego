import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
// import sinon from 'sinon';

import BountyStatus from 'views/components/core/BountyStatus';
import icon from 'static/svg/ic-close.svg';

Enzyme.configure({ adapter: new Adapter() });

describe('Component: <BountyStatus />', () => {
  const wrapper = shallow(<BountyStatus icon={icon} text="Bounty Status Text" />);

  it("should match snapshot", () => {
    expect(wrapper).to.matchSnapshot();
  });

  it("should have class .bounty-status", () => {
    expect(wrapper.find('.bounty-status')).to.have.length(1);
  });
});
