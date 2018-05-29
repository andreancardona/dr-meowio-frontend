import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateHighScores, getHighScores } from '../actions/actions';
import ScoreList from '../components/ScoreList';
import InitialsForm from '../components/InitialsForm';

class HighScoreContainer extends Component {
  state = {
    input: '',
    submited: false
  };

  componentDidMount() {
    this.props.dispatchGetHighScores();
  }

  handleInput = input => {
    this.setState({ input: input.toUpperCase() });
  };

  refreshPage = () => {
    window.location.reload();
  };

  submitHighScore = () => {
    this.setState({ submited: true });
    this.props.dispatchUpdateHighScores(this.props.currentScore, this.state.input);
  };

  render() {
    return (
      <div className={`gameover-${this.props.currentTheme.name}`}>
        <h1 className="highscore-title">High Scores</h1>
        <ScoreList />
        <InitialsForm
          handleInput={this.handleInput}
          input={this.state.input}
          submited={this.state.submited}
          reset={this.refreshPage}
          submitHighScore={this.submitHighScore}
        />
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
    currentScore: state.currentScore
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HighScoreContainer);
