import React from 'react';
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePageStatus } from 'redux/actions/ui.action';

import { Section, PageHero, Tabs, Tab, TabContainer, PageLoader } from "@kambria/kambria-lego";
import TopActionsBar from 'views/components/core/TopActionsBar';

import CardBounty from "views/components/core/CardBounty";
import CardCodebase from "views/components/core/CardCodebase";
import CardProduct from "views/components/core/CardProduct";

import NotificationsService from 'services/NotificationsService';

const bountiesData = [
  {
    _id: "5afd9f2c3c0996489de047ce",
    name: "Creative uses of the Ohmni Arm 2",
    thumbnail: "https://static.kambria.io/bounty/bounty-detail.png",
    description: "With Ohmni Arm, develop a complete module to perform meaningful tasks", contractAddress: "0x8ec9265e1ff0e2ca972fcbf07816b53114fee681", ownerAddress: "0x6a6f9e3f0b647301b1b24fc7ff9a27f60f77377a",
    ownerEmailAddress: "phongvu@kambria.io",
    ownerUsername: "Phong Vu",
    judges: [{ "username": "Phong Vu", "email": "phongvu@kambria.io", "ethAddress": "0x6a6f9e3f0b647301b1b24fc7ff9a27f60f77377a" }],
    createdDate: 1532493648970,
    startDate: 1535949648970,
    endDate: 1536381648970,
    closedDate: 1536554448970,
    brief: "",
    faq: "",
    status: "OPEN",
    criteria: "",
    processOfSelection: "",
    totalPromisePrize: 0,
    totalDeposit: 0,
    prizeList: [
      { "name": "1st prize", "description": "Excellent result is required", "percentage": "60", "isWithdraw": false, "winner": { "codebaseId": "", "teamId": "" } },
      { "name": "2nd prize", "description": "Must resolve almost the problem that has mentioned in the bounty", "percentage": "30", "isWithdraw": false, "winner": { "codebaseId": "", "teamId": "" } },
      { "name": "3rd prize", "description": "At least resolve more than 80% problem that has mentioned in the bounty", "percentage": "5", "isWithdraw": false, "winner": { "codebaseId": "", "teamId": "" } },
      { "name": "Value Captured", "description": "This will be sent back to Value Captured", "percentage": "5", "isWithdraw": false, "winner": { "codebaseId": "", "teamId": "" } }],
    "promiseList": [],
    "sponsorList": [],
    "teams": [
      { "_id": "3afd9f2c3c0886489de048ce", "bountyId": "5afd9f2c3c0996489de047ce", "name": "Collection stones", "thumbnail": "https://static.kambria.io/team/kambria.png" },
      { "_id": "5afd9f2c3c0886489de028ce", "bountyId": "5afd9f2c3c0996489de047ce", "name": "Avengers", "thumbnail": "https://static.kambria.io/team/kambria.png" },
      { "_id": "5afd9f2c3c0886489de039ce", "bountyId": "5afd9f2c3c0996489de047ce", "name": "Super Hero", "thumbnail": "https://static.kambria.io/team/kambria.png", }
    ]
  }
];

const codebases = [
  {
    _id: '5b31f3a8033d6613283f97f1',
    name: 'ohmnilabs-arc-reactor',
    description: 'OhmniLabs Arc Reactor, 2 Gigawatt output :)',
    gitUrl: 'https://github.com/kambria-platform/ohmnilabs-arc-reactor',
    walletAddress: '0x3f7a13be4ab7e5a731bba135d69b898ee2959c51',
    productId: '5ad5a17d129b9119e04ebc2b',
    contractAddress: '0x3f7a13be4ab7e5a731bba135d69b898ee2959c51',
    gitInfo: {
      source: 'GITHUB',
      owner: 'kambria-platform',
      repo: 'ohmnilabs-arc-reactor'
    },
    bountyId: '5afd9f2c3c0996489de047ce',
    donators: [],
    isPublic: true,
    status: 'ONCHAIN'
  }
];

const products = [
  {
    git: null,
    price: 1290,
    type: 'consumer',
    isSoldOut: false,
    isVisible: true,
    isDeleted: false,
    _id: '5ad5a17d129b9119e04ebc2a',
    title: 'The Ohmni telepresence robot',
    description: 'It’s a totally different experience from Skype or Facetime since you can move around as if you were there.\nJust put Ohmni where you can’t be. One click and you are instantly there, hassle free. Focus on what really matters – spending great time together.',
    thumbnail: 'https://static.kambria.io/product/images/ohmni.jpg',
    createdAt: '2018-03-09T04:44:36.313Z',
    updatedAt: '2018-03-09T04:44:36.314Z',
  }
];

class KambriaComponents extends React.Component {

  state = {
    value: 0,
    labels: ['Description', 'Github', 'Readme'],
    classes: 'container',
  };

  async componentDidMount() {
    await NotificationsService.getNotifications(2000);
    this.props.updatePageStatus('loaded');
  }

  handleClick = async () => {
    this.props.updatePageStatus('loading');
    await NotificationsService.getNotifications(3000);
    this.props.updatePageStatus('loaded');
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
          {this.props.ui.status === 'init' ?
            <PageLoader /> :
            <div className="container">
              <Section title='Top Bar Loader'>
                <button onClick={this.handleClick}>Load Data</button>
              </Section>

              <Section title='Page Hero'>
                <PageHero headline='List our products' description='Explore our products bring to feature' customStyle={{backgroundColor: '#424851'}} />
              </Section>

              <Section title='Top Action Bar'>
                <TopActionsBar />
              </Section>


              <Section title='Card Bounty'>
                <div className='row'>
                  {bountiesData.map((item, index) => {
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
                </div><br />

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
            </div>}
        </main>
        {this.props.footer}
      </div>);
  }

}

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updatePageStatus
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(KambriaComponents));