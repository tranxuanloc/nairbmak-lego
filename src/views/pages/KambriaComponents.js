import React from 'react';

import Section from "views/components/core/Section";
import PageHero from "views/components/core/PageHero";
import TopActionsBar from 'views/components/core/TopActionsBar';

import CardBounty from "views/components/core/CardBounty";
import CardCodebase from "views/components/core/CardCodebase";
import CardProduct from "views/components/core/CardProduct";

import { BlockchainAlert, BlockchainAlertBlink } from "views/components/core/BlockchainAlert";

import { Tabs, Tab, TabContainer } from 'views/components/core/tab';

import { Button } from 'views/components/core/buttons';

import { bounties, codebases, products } from 'services/DummyData';

export default class KambriaComponents extends React.Component {

  state = {
    value: 0,
    labels: ['Description', 'Github', 'Readme'],
    classes: 'container'
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value, classes } = this.state;

    return (
      <div id="site_wrapper">
        <div className="site-upper">
          {this.props.header}
        </div>
        <main className="main bg-white">

          <div className="container">
            <Section title='Page Hero'>
              <PageHero headline='List our products' description='Explore our products bring to feature' />
            </Section>

            <Section title='Top Action Bar'>
              <TopActionsBar />
            </Section>


            <Section title='Blockchain Alert'>
              <BlockchainAlert />
              <BlockchainAlertBlink />
            </Section>


            <Section title='Button'>
              <Button type='primary' size='sm'>Primary</Button>&nbsp;
              <Button type='secondary' size='sm'>Secondary</Button>&nbsp;
              <Button type='fb' size='sm'>Login with Facebook</Button>&nbsp;
              <Button type='gg' size='sm'>Login with Google</Button>&nbsp;
            </Section>


            <Section title='Card Bounty'>
              <div className='row'>
                {bounties.map((item, index) => {
                  return <div key={index} className='col col-4'><CardBounty key={index} data={item} status='open' /></div>;
                })}
              </div>
            </Section>


            <Section title='Card Codebase'>
              <div className='row'>
                {codebases.map((item, index) => {
                  return <div key={index} className='col col-4'><CardCodebase data={item} descLen={135} /></div>;
                })}
              </div>
            </Section>

            <Section title="Card Product">
              <div className='row'>
                {products.map((item, index) => {
                  return <div key={index} className='col col-6'><CardProduct key={index} data={item} descLen={135} /></div>;
                })}
              </div>
            </Section>


            <Section title="Tab">
              <div>Tab Light</div>
              <Tabs className="light">
                {this.state.labels.map((label, key) => <Tab className={value === key ? 'col-2 active' : 'col-2'} key={key} tabId={key} label={label} handleChange={this.handleChange} />)}
              </Tabs>
              <div className="tab-content">
                {value === 0 &&
                  <TabContainer className={classes}>
                    tab1
                  </TabContainer>
                }

                {value === 1 &&
                  <TabContainer className={classes}>
                    tab2
                  </TabContainer>
                }

                {value === 2 &&
                  <TabContainer className={classes}>
                    tab3
                  </TabContainer>
                }
              </div><br/>

              <div>Tab Dark</div>
              <Tabs className="dark">
                {this.state.labels.map((label, key) => <Tab className={value === key ? 'active' : null} key={key} tabId={key} label={label} handleChange={this.handleChange} />)}
              </Tabs>
              <div className="tab-content">
              {value === 0 &&
                  <TabContainer className={classes}>
                    tab1
                  </TabContainer>
                }

                {value === 1 &&
                  <TabContainer className={classes}>
                    tab2
                  </TabContainer>
                }

                {value === 2 &&
                  <TabContainer className={classes}>
                    tab3
                  </TabContainer>
                }
              </div>
            </Section>


            <Section title="Modal">
              <div className='row'>

              </div>
            </Section>
          </div>
        </main>
        {this.props.footer}
      </div>);
  }

}