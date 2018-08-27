import React from 'react';

const BountyStatus = (props) => {
  const style = {
    backgroundImage: `url(${props.icon})`
  };

  return <div className="bounty-status" style={style}>{props.text}</div>;
};

export default BountyStatus;
