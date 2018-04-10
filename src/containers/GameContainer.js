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
  state = {
    hiScores: [],
    users: []
  };

  componentDidMount() {
    this.getUsers();
  }

  updateHiScore = () => {
    const currentUser = { ...this.state.currentUser };
    this.props.currentScore > currentUser.hiScore
      ? (currentUser.hiScore = this.props.currentScore)
      : currentUser.hiScore;
    console.log(currentUser);
    this.setState({ currentUser: currentUser });
    fetch(`${URLS.users}/${currentUser.id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(currentUser)
    }).then(response => this.refreshUsers());
  };

  refreshUsers = () => {
    fetch(URLS.users)
      .then(res => res.json())
      .then(json => this.setState({ users: json }));
  };

  getUsers = () => {
    fetch(URLS.users)
      .then(res => res.json())
      .then(json => this.setState({ users: json }));
  };

  render() {
    return (
      <div className={`container ${this.props.currentTheme.background}`}>
        <Header />
        <HiScoresList users={this.state.users} />
        <DrCat />
        <SessionInfo />
        <Bottle updateHiScore={this.updateHiScore} />
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
