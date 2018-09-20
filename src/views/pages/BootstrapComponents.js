import React from 'react';
import { Section, Card, CardDeck, CardHeader, CardImg, CardBody, CardTitle, CardText, CardLink, CardFooter, Button, IconButton, TimeProgress } from '@kambria/kambria-lego';
// Icons
import { faBars, faBath, faPlane } from '@fortawesome/free-solid-svg-icons';

import NotificationsViewer from '../components/sample/NotificationsViewer';

const Components = (props) =>
  <div id="site_wrapper">
    <div className="site-upper">
      {props.header}
    </div>
    <div className="main bg-white">
      <div className="container">
        <NotificationsViewer />

        <Section title='Sample'>
          <Card className='component'>Sample Component</Card>
        </Section>

        <Section title='Button'>
        <div>
            <h5>Small</h5>
            <Button type='primary' size='sm'>Primary</Button>&nbsp;
            <Button type='secondary' size='sm'>Secondary</Button>&nbsp;
            <Button type='fb' size='sm'>Login with Facebook</Button>&nbsp;
            <Button type='gg' size='sm'>Login with Google</Button>&nbsp;
          </div>
          <div>
            <h5>Normal</h5>
            <Button type='primary'>Primary</Button>&nbsp;
            <Button type='secondary'>Secondary</Button>&nbsp;
            <Button type='fb'>Login with Facebook</Button>&nbsp;
            <Button type='gg'>Login with Google</Button>&nbsp;
          </div>
          <div>
            <h5>Large</h5>
            <Button type='primary' size='lg'>Primary</Button>&nbsp;
            <Button type='secondary' size='lg'>Secondary</Button>&nbsp;
            <Button type='fb' size='lg'>Login with Facebook</Button>&nbsp;
            <Button type='gg' size='lg'>Login with Google</Button>&nbsp;
          </div>
          <div>
            <h5>Disabled</h5>
            <Button type='primary' size='lg' disabled>Primary</Button>&nbsp;
            <Button type='secondary' size='lg' disabled>Secondary</Button>&nbsp;
            <Button type='fb' size='lg' disabled>Login with Facebook</Button>&nbsp;
            <Button type='gg' size='lg' disabled>Login with Google</Button>&nbsp;
          </div>
          <div>
            <h5>Icon</h5>
            <IconButton type='primary' size='lg' icon={faBars}>Primary</IconButton>&nbsp;
            <IconButton type='secondary' size='lg' icon={faBath}>Secondary</IconButton>&nbsp;
          </div>
          <div>
            <h5>Custom Color</h5>
            <Button type='primary' size='lg' textColor='blue' bgColor='yellow'>Primary</Button>&nbsp;
            <Button type='secondary' size='lg' textColor='yellow' bgColor='blue'>Default</Button>
          </div>
        </Section>

        <Section title='Card'>
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
                <IconButton icon={faPlane} type='success' size='sm' color='black'>Button</IconButton>
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
        </Section>
      </div>
    </div>
    {props.footer}
  </div>;

export default Components;