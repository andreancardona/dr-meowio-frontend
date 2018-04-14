import React from 'react';
import { connect } from 'react-redux';

const HighScoreContainer = props => {
  return (
    <div>
      <h1> High Scores</h1>
      <ol>
        {props.highScores.map((highscore, i) => {
          return (
            <li key={i}>
              <span>{highscore.initials}</span>
              <span>{highscore.score}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const mapStateToProps = state => {
  return { highScores: state.highScores };
};

export default connect(mapStateToProps)(HighScoreContainer);
