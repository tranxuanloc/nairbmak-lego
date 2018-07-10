import React from 'react';
import Card from '../components/common/card/Card';
import Button from '../components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NotificationsViewer from '../components/NotificationsViewer';

const Components = () =>
  <div className="main">
    <div className="container">
      <NotificationsViewer />
      <h1>Components</h1>
      <Card className='component'>Sample Component</Card>
      <hr />
      <section>
        <h3>Buttons</h3>
        <div>
          <h5>Small</h5>
          <Button type='primary' size='sm'>Primary</Button>&nbsp;
          <Button type='secondary' size='sm'>Secondary</Button>&nbsp;
          <Button type='success' size='sm'>Success</Button>&nbsp;
          <Button type='warning' size='sm'>Warning</Button>&nbsp;
          <Button type='danger' size='sm'>Danger</Button>&nbsp;
          <Button type='info' size='sm'>Info</Button>&nbsp;
          <Button type='default' size='sm'>Default</Button>
        </div>
        <div>
          <h5>Normal</h5>
          <Button type='primary'>Primary</Button>&nbsp;
          <Button type='secondary'>Secondary</Button>&nbsp;
          <Button type='success'>Success</Button>&nbsp;
          <Button type='warning'>Warning</Button>&nbsp;
          <Button type='danger'>Danger</Button>&nbsp;
          <Button type='info'>Info</Button>&nbsp;
          <Button type='default'>Default</Button>
        </div>
        <div>
          <h5>Large</h5>
          <Button type='primary' size='lg'>Primary</Button>&nbsp;
          <Button type='secondary' size='lg'>Secondary</Button>&nbsp;
          <Button type='success' size='lg'>Success</Button>&nbsp;
          <Button type='warning' size='lg'>Warning</Button>&nbsp;
          <Button type='danger' size='lg'>Danger</Button>&nbsp;
          <Button type='info' size='lg'>Info</Button>&nbsp;
          <Button type='default' size='lg'>Default</Button>
        </div>
        <div>
          <h5>Disabled</h5>
          <Button type='primary' size='lg' disabled>Primary</Button>&nbsp;
          <Button type='secondary' size='lg' disabled>Secondary</Button>&nbsp;
          <Button type='success' size='lg' disabled>Success</Button>&nbsp;
          <Button type='warning' size='lg' disabled>Warning</Button>&nbsp;
          <Button type='danger' size='lg' disabled>Danger</Button>&nbsp;
          <Button type='info' size='lg' disabled>Info</Button>&nbsp;
          <Button type='default' size='lg' disabled>Default</Button>
        </div>
        <div>
          <h5>Icon</h5>
          <Button type='primary' size='lg' icon={<FontAwesomeIcon icon="stroopwafel" />}>Primary</Button>&nbsp;
          <Button type='secondary' size='lg'>Secondary</Button>&nbsp;
          <Button type='success' size='lg'>Success</Button>&nbsp;
          <Button type='warning' size='lg'>Warning</Button>&nbsp;
          <Button type='danger' size='lg'>Danger</Button>&nbsp;
          <Button type='info' size='lg'>Info</Button>&nbsp;
          <Button type='default' size='lg'>Default</Button>
        </div>
        <div>
          <h5>Custom Color</h5>
          <Button type='primary' size='lg' color='blue' bgColor='yellow'>Primary</Button>&nbsp;
          <Button type='default' size='lg' color='yellow' bgColor='blue'>Default</Button>
        </div>
      </section>
    </div>
  </div>;

export default Components;