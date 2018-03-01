import React from 'react';

const SessionInfo = props => {
  console.log(props);
  return (
    <div>
      <h2>{props.currentUser.name}</h2>
      <h2>{props.currentScore}</h2>
    </div>
  );
};

export default SessionInfo;
