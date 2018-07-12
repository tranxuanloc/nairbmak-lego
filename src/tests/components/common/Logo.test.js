import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import image from 'logo.svg';

import Logo from 'views/components/core/Logo';

Enzyme.configure({ adapter: new Adapter() });

describe('Component: <Logo />', () => {
  it("snapshot for logo", () => {
    const logo = {
      url: '/',
      image: image
    };
    const snap = shallow(<Logo url={logo.url} image={logo.image} />);
    expect(snap).to.matchSnapshot();
  });
});