import React from 'react';
import { Card, CardDeck, CardHeader, CardImg, CardBody, CardTitle, CardText, CardLink, CardFooter } from '../components/core/card';
import { Button, IconButton, AnchorButton } from '../components/core/button';
// Icons
import { faBars, faBath, faBed, faBell, faBeer, faAddressBook, faAnchor, faPlane } from '@fortawesome/free-solid-svg-icons';

import ComponentSection from '../components/core/Section';
import NotificationsViewer from '../components/sample/NotificationsViewer';
import TimeProgress from '../components/core/TimeProgress';

const Components = (props) =>
  <div id="site_wrapper">
    <div className="site-upper">
      {props.header}
    </div>
    <div className="main bg-white">
      <div className="container">
        <NotificationsViewer />

        <ComponentSection title='Sample'>
          <Card className='component'>Sample Component</Card>
        </ComponentSection>

        <ComponentSection title='Button'>
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
            <IconButton type='primary' size='lg' icon={faBars}>Primary</IconButton>&nbsp;
          <IconButton type='secondary' size='lg' icon={faBath}>Secondary</IconButton>&nbsp;
          <IconButton type='success' size='lg' icon={faBed}>Success</IconButton>&nbsp;
          <IconButton type='warning' size='lg' icon={faBeer}>Warning</IconButton>&nbsp;
          <IconButton type='danger' size='lg' icon={faBell}>Danger</IconButton>&nbsp;
          <IconButton type='info' size='lg' icon={faAddressBook}>Info</IconButton>&nbsp;
          <IconButton type='default' size='lg' icon={faAnchor}>Default</IconButton>
          </div>
          <div>
            <h5>Custom Color</h5>
            <Button type='primary' size='lg' color='blue' bgColor='yellow'>Primary</Button>&nbsp;
          <Button type='default' size='lg' color='yellow' bgColor='blue'>Default</Button>
          </div>
        </ComponentSection>

        <ComponentSection title='Card'>
          <CardDeck>
            <Card className='shadow-sm'>
              <CardHeader>Header</CardHeader>
              <CardImg imgSrc="https://loremflickr.com/320/240/paris" altText='Card cap' />
              <div className="card-img-overlay">
                <h3>50 KATT</h3>
              </div>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <CardLink href='#!'>Button</CardLink>
              </CardBody>
              <CardFooter className='text-muted'>2 days ago</CardFooter>
            </Card>

            <Card>
              {/* <CardHeader>Header</CardHeader> */}
              {/* <div className="view overlay">
              <CardImg imgSrc="https://loremflickr.com/320/240/brazil,rio" altText='Card cap' />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div> */}
              <CardBody className='text-center bg-dark text-white'>
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <AnchorButton icon={faPlane} type='success' size='sm' color='black'>Button</AnchorButton>
              </CardBody>
              {/* <CardFooter className='text-muted'>2 days ago</CardFooter> */}
            </Card>

            <Card>
              <CardHeader>Header</CardHeader>
              <CardImg imgSrc="https://loremflickr.com/320/240/japan" altText='Card cap' />
              <CardBody className='text-right'>
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <CardLink href='#!'>Button</CardLink>
                <TimeProgress data={{ percent: '20%', dayleft: 10 }} />
              </CardBody>
            </Card>
          </CardDeck>
        </ComponentSection>
      </div>
    </div>
    {props.footer}
  </div>;

export default Components;