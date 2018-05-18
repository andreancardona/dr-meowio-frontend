import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/actions';
import SessionInfo from '../components/SessionInfo';
import Bottle from './Bottle';
import DrCat from '../components/DrCat';
import Header from '../components/Header';
import ThemeSelector from '../components/ThemeSelector';

const GameContainer = props => {
  return (
    <div className={`container ${props.currentTheme.background}`}>
      <Header />
      <DrCat />
      <SessionInfo />
      <Bottle />
      <button
        className={`start-button button-${props.currentTheme.name}`}
        type="button"
        onClick={props.dispatchStartGame}
      >
        START
      </button>
      <ThemeSelector />
    </div>
  );
};

const mapStateToProps = state => {
  return { currentTheme: state.currentTheme, currentScore: state.currentScore };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchStartGame: () => dispatch(startGame())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
