import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInitials, updateHighScores, getHighScores } from '../actions/actions';

class HighScoreContainer extends Component {
  state = {
    input: ''
  };

  componentDidMount() {
    this.props.dispatchGetHighScores();
  }

  handleInput = input => {
    this.setState({ input: input.toUpperCase() });
  };

  render() {
    return (
      <div className={`gameover-${this.props.currentTheme.name}`}>
        <h1 className="highscore-title">High Scores</h1>
        <ol className="highscore-list">
          {this.props.highScores.map((highscore, i) => {
            return (
              <li key={i}>
                <span className="place-span">{i + 1}.</span>
                <span className="init-span">{highscore.initials}</span>
                <span className="points-span">{highscore.score}</span>
              </li>
            );
          })}
        </ol>
        <div>
          <input
            className="login-input highscore-input"
            placeholder="Enter Your Initials"
            onChange={event => this.handleInput(event.target.value)}
            type="text"
            name="login"
            value={this.state.input}
            autoComplete="off"
            maxLength="3"
          />
          <button
            className={`highscore-button start-button button-${this.props.currentTheme.name}`}
            onClick={() => {
              this.props.dispatchUpdateHighScores(this.props.currentScore, this.state.input);
            }}
            type="button"
          >
            DONE!
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetHighScores: () => dispatch(getHighScores()),
    dispatchUpdateHighScores: (currentScore, initials) =>
      dispatch(updateHighScores(currentScore, initials))
  };
};

const mapStateToProps = state => {
  return {
    currentTheme: state.currentTheme,
    highScores: state.highScores,
    currentScore: state.currentScore
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HighScoreContainer);
