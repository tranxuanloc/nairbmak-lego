import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import sinon from 'sinon';

import { Button } from 'views/components/core/buttons';

Enzyme.configure({ adapter: new Adapter() });

describe('Component: <Button />', () => {

  const wrapper = shallow(<Button type='primary' size='lg'>Test</Button>);

  it("should match snapshot for Button", () => {
    expect(wrapper).to.matchSnapshot();
  });

  it("should have class .btn-primary .btn-lg", () => {
    expect(wrapper.find('.btn-primary.btn-lg')).to.have.length(1);
  });

  it("should render children when passed in", () => {
    expect(wrapper.contains('Test')).to.equal(true);
  });

  // it("should have prop disabled", () => {
  //   expect(wrapper.prop('disabled')).to.equal(true);
  // });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Button onButtonClick={onButtonClick} disabled>Test</Button>);
    wrapper.simulate('click');
    expect(onButtonClick.calledOnce).to.equal(false);
  });
});