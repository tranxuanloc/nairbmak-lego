import React from 'react';
import { css } from 'react-emotion';
// First way to import
import { BarLoader } from 'react-spinners';
 
const override = css`
    display: block;
    position: fixed !important;
    width: 100%;
    top: 0;
`;
 
export default class LoadingTopComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render(){
    return (
      <div className='page-loading'>
        <BarLoader
          className={override}
          widthUnit={"%"}
          width={100}
          heightUnit={"px"}
          height={4}
          color={"#1AEEC2"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}