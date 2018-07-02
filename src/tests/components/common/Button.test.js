import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import Button from 'views/components/common/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Component: <Button />', () => {
  it("snapshot for Button", () => {

    const snap = shallow(<Button>Test</Button>);
    expect(snap).to.matchSnapshot();
  });
});