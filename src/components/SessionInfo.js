import React from 'react';

const SessionInfo = props => {
  return (
    <div className="session-info-panel">
      <h2>Game Info</h2>
      <h5>{props.currentUser.name}</h5>
      <h3>{props.currentScore}</h3>
    </div>
  );
};

export default SessionInfo;
