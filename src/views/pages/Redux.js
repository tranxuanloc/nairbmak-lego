
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {sampleAction} from 'redux/actions/sample.action.js';

class Sample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoaded: true
    };
    console.log(props);
  }

  componentDidMount() {

  }

  render() {
    return <main className='main'>
      <div id='content' className='container'>
        <a className='btn btn-sm btn-success' onClick={() => this.props.sampleAction('Hello World!')}>Sample Action: {this.props.sample.text}</a>
      </div>
    </main>;
  }
}

const mapStateToProps = state => ({
  sample: state.sample
});

const mapDispatchToProps = dispatch => bindActionCreators({
  sampleAction
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample));
