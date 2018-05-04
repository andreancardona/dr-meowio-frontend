import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import GameContainer from './containers/GameContainer';
import HighScoreContainer from './containers/HighScoreContainer';

class App extends Component {
  render() {
    return this.props.gameOver ? <HighScoreContainer /> : <GameContainer />;
  }
}

const mapStateToProps = state => {
  return { gameOver: state.gameOver };
};

export default connect(mapStateToProps)(App);
