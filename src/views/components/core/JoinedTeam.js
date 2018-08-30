import React from 'react';

const JoinedTeam = (props) =>
  <div className="joined-team clearfix">
    {props.teams.length ?
    <div className="teams-icon">
      {props.teams.map((team, index) => {
        return <img key={index} src={team.thumbnail} alt='' />;
      })}
    </div>
    : null }
    <div className="text">{props.teams.length} teams are participating</div>
  </div>;

export default JoinedTeam;
