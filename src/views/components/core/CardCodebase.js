import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from '@kambria/kambria-lego';
import Utils from 'helpers/utils';

const CardCodebase = (props) => {
  let className = props.className ? 'card-codebase shadow ' + props.className : 'card-codebase shadow';
  let description = Utils.charLimiter(props.data.description, props.descLen || 75);
  return <Card className={className}>
    <Link to={`/codebase/${props.data._id}`}>
      <CardHeader><span className="team-icon" /> {props.data.gitInfo.repo}</CardHeader>
      <CardBody>
        <CardTitle>
          {props.data.name}
        </CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter><span className="link-icon" />23212 projects</CardFooter>
    </Link>
  </Card>;
};

CardCodebase.propTypes = {
  data: PropTypes.object.isRequired,
  descLen: PropTypes.number
};

export default CardCodebase;
