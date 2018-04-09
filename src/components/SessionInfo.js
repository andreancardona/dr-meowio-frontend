import React from 'react';
import { connect } from 'react-redux';

const SessionInfo = props => {
  return (
    <div className="session-info-panel">
      <p className={`label ${props.currentTheme.name}-score`}>Score:</p>
      <p className={`score ${props.currentTheme.name}-score`}>{props.currentScore}</p>
      <p className={`level-label label ${props.currentTheme.name}-level`}>Level:</p>
      <p className={`score level ${props.currentTheme.name}-level`}>{props.currentLevel}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentTheme: state.currentTheme };
};

export default connect(mapStateToProps)(SessionInfo);
