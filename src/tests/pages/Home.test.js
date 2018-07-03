/* eslint-disable */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import Home from 'views/pages/Home';

Enzyme.configure({ adapter: new Adapter() });

describe('Page: <Home />', () => {
  it("snapshot for Home", () => {
    const snap = shallow(<Home />);
    // expect(snap).to.matchSnapshot();
  });
});