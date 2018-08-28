import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { spy } from 'sinon';

import NotificationsViewer from 'views/components/sample/NotificationsViewer';
import { delay } from 'redux-saga';

Enzyme.configure({ adapter: new Adapter() });

spy(NotificationsViewer.prototype, 'componentDidMount');

describe('Component: <NotificationsViewer />', () => {
  it("calls componentDidMount", async() => {
    mount(<NotificationsViewer />);
    await delay();
    expect(NotificationsViewer.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});