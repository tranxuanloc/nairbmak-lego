import React from 'react';
import { css } from 'react-emotion';
// First way to import
import { PropagateLoader } from 'react-spinners';
 
const override = css`
    display: block;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    position: absolute !important;
    width: 0;
`;
 
export default class LoadingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render(){
    return (
      <div className='page-loading'>
        <PropagateLoader
          className={override}
          sizeUnit={"px"}
          size={15}
          color={"#1AEEC2"}
          loading={this.state.loading}
        />
      </div>
    )
  }
}