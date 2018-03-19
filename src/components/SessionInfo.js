import React from 'react';

const SessionInfo = props => {
  return (
    <div className="session-info-panel">
      <p className={`label ${props.currentTheme.name}-score`}>Score:</p>
      <p className={`score ${props.currentTheme.name}-score`}>{props.currentScore}</p>
      <p className={`player-label label ${props.currentTheme.name}-player`}>Player:</p>
      <p className={`player ${props.currentTheme.name}-player`}>{props.currentUser.name}</p>
    </div>
  );
};

export default SessionInfo;
