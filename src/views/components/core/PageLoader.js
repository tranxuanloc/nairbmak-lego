import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { PropagateLoader } from 'react-spinners';
import { BarLoader } from 'react-spinners';

const centerLoader = css`
    display: block;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    position: absolute !important;
    width: 0;
`;

const topLoader = css`
    display: block;
    position: fixed !important;
    left: 0;
    top: 0;
`;

class PageLoader extends React.Component {

  static defaultProps = {
    type: 'center',
    loading: true
  }

  render() {
    return (
      this.props.type === 'center' ?
      <PropagateLoader
        className={centerLoader}
        sizeUnit={"px"}
        size={15}
        color={"#1AEEC2"}
        loading={this.props.loading} /> :
      <BarLoader
        className={topLoader}
        widthUnit={"%"}
        width={100}
        heightUnit={"px"}
        height={3}
        color={"#1AEEC2"}
        loading={this.props.loading}
    />);
  }
}

PageLoader.propTypes = {
  type: PropTypes.string,
  loading: PropTypes.bool,
};

export default PageLoader;
