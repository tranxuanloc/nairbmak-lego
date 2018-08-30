import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, CardImg, CardBody, CardTitle, CardText } from 'views/components/core/card';
import Utils from 'helpers/utils';
import TimeProgress from './TimeProgress';
import JoinedTeam from './JoinedTeam';
import BountyStatus from './BountyStatus';
import in_progress_icon from 'static/svg/ic-closed.svg';
import closed_icon from 'static/svg/ic-finished.svg';

import config from "config";
import Metamask from "helpers/metamask.class";
import Token from "helpers/token.class";

class CardBounty extends React.Component {

  state = {
    prize: null
  }

  async componentDidMount() {
    this.metamask = new Metamask();
    this.tokenContract = await new Token(
      config.eth.KATT.ADDRESS,
      config.eth.KATT.DECIMALS,
      this.metamask.web3
    );
    let bounty = this.props.data;
    this.tokenContract.balanceOf(
      bounty.contractAddress
    ).then(value => {
      this.setState({ prize: value });
    });

  }

  render() {
    let className = this.props.className ? 'card-bounty shadow ' + this.props.className : 'card-bounty shadow';
    let description = Utils.charLimiter(this.props.data.description, this.props.descLen || 75);

    let timeData = {}, icon, text;
    if (this.props.status === "open") {
      const oneDay = 24 * 60 * 60 * 1000;
      const createdDate = new Date(this.props.data.createdDate);
      const startDate = new Date(this.props.data.startDate);
      const now = +new Date();

      var diffDays = parseInt((startDate.getTime() - now) / oneDay, 10);

      var percent =
        (
          (now - createdDate.getTime()) /
          (startDate.getTime() - createdDate.getTime())
        ).toFixed(1) * 100 + "%";
      timeData = {
        dayleft: diffDays,
        percent: percent
      };
    } else if (this.props.status === 'in_progress') {
      icon = in_progress_icon;
      text = 'Close participations';
    } else {
      icon = closed_icon;
      text = 'Finished';
    }

    return <Card className={className}>
      <Link to={`/bounty/${this.props.data._id}`}>
        <CardImg imgSrc={this.props.data.thumbnail}>
          <span className="value">{this.state.prize} KAT</span>
        </CardImg>
      </Link>
      <CardBody>
        <Link to={`/bounty/${this.props.data._id}`}>
          <CardTitle>
            {this.props.data.name}
          </CardTitle>
        </Link>
        <CardText>{description}</CardText>
        {this.props.status === "open" ?
          <div><TimeProgress data={timeData} />
            <JoinedTeam teams={this.props.data.teams} /></div> : <BountyStatus icon={icon} text={text} />}
      </CardBody>
    </Card>;
  }
};

CardBounty.propTypes = {
  data: PropTypes.object.isRequired,
  descLen: PropTypes.number
};

export default CardBounty;
