import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, CardImg, CardBody, CardTitle, CardText } from '@kambria/kambria-lego';
import Utils from 'helpers/utils';

const CardProduct = (props) => {
  let className = props.className ? 'card-product shadow ' + props.className : 'card-product shadow';
  let description = Utils.charLimiter(props.data.description, props.descLen || 75);
  return <Card className={className}>
    <Link to={`/product/${props.data._id}`}>
      <CardImg imgSrc={props.data.thumbnail}>
        <span className="value">{props.data.price} KAT</span>
      </CardImg>
    </Link>
    <CardBody>
      <Link to={`/product/${props.data._id}`}>
        <CardTitle>
          {props.data.title}
        </CardTitle>
      </Link>
      <CardText>{description}</CardText>
    </CardBody>
  </Card>;
};

CardProduct.propTypes = {
  data: PropTypes.object.isRequired,
  descLen: PropTypes.number
};

export default CardProduct;
