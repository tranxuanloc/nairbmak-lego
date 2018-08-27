import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import icId from 'static/svg/ic-id.svg';
import icCart from 'static/svg/ic-cart.svg';
import icBalance from 'static/svg/ic-balance.svg';
import icHistory from 'static/svg/ic-history.svg';

// import { getTotalItems, fetchCartItems } from 'redux/actions/cart.action';

class TopActionsBar extends Component {

  componentDidMount() {
    // if(this.props.ethAddress)
    //   this.props.fetchCartItems(this.props.ethAddress);
  }

  render() {
    return (
      <div className="top-actions-bar">
        <div className="wrapper">
          <ul>
            <li>
              <div className="item">
                <span className="icon">
                  <img src={icId} className="icid" alt="icid" />
                </span>
                <span className="text">
                  Id: {this.props.ethAddress}
                </span>
              </div>
            </li>
            <li>
              <div className="item">
                <span className="icon">
                  <img src={icBalance} className="icbalance" alt="icbalance" />
                </span>
                <span className="text">
                  {this.props.balance} KATT
                </span>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/cart" className="item">
                <span className="icon">
                  {this.props.totalItems > 0
                    ? <span className="badge badge-danger">
                        {this.props.totalItems}
                      </span>
                    : null}

                  <img src={icCart} className="iccart" alt="iccard" />
                </span>
                <span className="text">Cart</span>
              </Link>
            </li>
            <li>
              <Link to="/order-history" className="item">
                <span className="icon">
                  <img src={icHistory} className="ichistory" alt="ichistory" />
                </span>
                <span className="text">Order History</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ethAddress: state.blockchain.ACCOUNT,
  balance: state.blockchain.TOKEN_BALANCE,
  totalItems: 0 //getTotalItems(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // fetchCartItems
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TopActionsBar));
