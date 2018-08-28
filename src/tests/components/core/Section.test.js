import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import Section from 'views/components/core/Section';

Enzyme.configure({ adapter: new Adapter() });

describe('Component: <Section />', () => {

  const wrapper = shallow(<Section title='Section Title' className='newClass' />);

  it("should match snapshot", () => {
    expect(wrapper).to.matchSnapshot();
  });

  it("should contain a H2 tag", () => {
    expect(wrapper.find('h2')).to.have.length(1);
  });

  it("should render title in H2 tag", () => {
    expect(wrapper.find('h2').contains('Section Title')).to.equal(true);
  });

  it("should have className passed in", () => {
    expect(wrapper.find('.newClass')).to.have.length(1);
  });

});
