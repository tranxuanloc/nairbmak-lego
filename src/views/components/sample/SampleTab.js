import React from 'react';
import { Tabs, Tab, TabContainer } from 'views/components/core/tab';

export default class SampleTab extends React.Component {
  state = {
    value: 0,
    labels: ['Tab 1', 'Tab 2', 'Tab 3'],
    classes: 'tab-container'
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value, classes } = this.state;

    return (
      <div className='tab container-fluid no-padding'>
        <Tabs>
          {this.state.labels.map((label, key) => <Tab className={value === key ? 'active' : null} key={key} tabId={key} label={label} handleChange={this.handleChange} />)}
        </Tabs>
        <div className="tab-content">
          {value === 0 &&
            <TabContainer className={classes}>
              Tab content 1
            </TabContainer>
          }

          {value === 1 &&
            <TabContainer className={classes}>
              Tab content 2
            </TabContainer>
          }

          {value === 2 &&
            <TabContainer className={classes}>
              Tab content 3
            </TabContainer>
          }
        </div>
      </div>
    );
  }
}