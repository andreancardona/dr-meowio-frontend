import React from 'react';
import { connect } from 'react-redux';
import { getHighScores } from '../actions/actions';

class HiScoresList extends React.Component {
  componentDidMount() {
    this.props.dispatchGetHighScores();
  }

  render() {
    return (
      <div className="hiscores-panel">
        <p>High Scores</p>
        <ol>
          {this.props.highScores.map(highScore => {
            return (
              <li key={highScore.id} className="hiscore-text">
                {highScore.initials} {highScore.score}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { highScores: state.highScores };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetHighScores: () => dispatch(getHighScores())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HiScoresList);
