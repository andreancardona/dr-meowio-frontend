import React from 'react';
import { connect } from 'react-redux';

const ScoreList = props => {
  return (
    <ol className="highscore-list">
      {props.highScores.map((highscore, i) => {
        return (
          <li key={i}>
            <span className="place-span">{i + 1}.</span>
            <span className="init-span">{highscore.initials}</span>
            <span className="points-span">{highscore.score}</span>
          </li>
        );
      })}
    </ol>
  );
};

const mapStateToProps = state => {
  return { highScores: state.highScores };
};

export default connect(mapStateToProps)(ScoreList);
