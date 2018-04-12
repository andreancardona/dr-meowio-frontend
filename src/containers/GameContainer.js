import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/actions';
import HiScoresList from '../components/HiScoresList';
import Login from '../components/Login';
import SessionInfo from '../components/SessionInfo';
import Bottle from './Bottle';
import DrCat from '../components/DrCat';
import Header from '../components/Header';
import ThemeSelector from '../components/ThemeSelector';
import URLS from '../urls';

class GameContainer extends React.Component {
  render() {
    return (
      <div className={`container ${this.props.currentTheme.background}`}>
        <Header />
        <HiScoresList />
        <DrCat />
        <SessionInfo />
        <Bottle />
        <button
          className={`start-button button-${this.props.currentTheme.name}`}
          type="button"
          onClick={this.props.dispatchStartGame}
        >
          START
        </button>
        <ThemeSelector />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentTheme: state.currentTheme, currentScore: state.currentScore };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchStartGame: () => dispatch(startGame())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
