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
    currentLevel: 1,
    hiScores: [],
    users: [],
    themes: [],
    levels: [],
    inputValue: ''
  };

  componentDidMount() {
    this.getThemes();
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

  // addPoints = () => this.setState({ currentScore: this.props.currentScore + 100 });

  getThemes = () => {
    fetch(URLS.themes)
      .then(res => res.json())
      .then(json => {
        this.setState({
          themes: json
        });
      });
  };

  refreshUsers = () => {
    fetch(URLS.users)
      .then(res => res.json())
      .then(json => this.setState({ users: json }));
  };

  setLevel = () => {
    if (this.props.currentScore >= 500 && this.props.currentScore < 1000) {
      this.setState({ currentLevel: 2 });
    } else if (this.props.currentScore >= 1000 && this.props.currentScore < 1500) {
      this.setState({ currentLevel: 3 });
    } else if (this.props.currentScore >= 1500 && this.props.currentScore < 2000) {
      this.setState({ currentLevel: 4 });
    } else if (this.props.currentScore >= 2000 && this.props.currentScore < 2500) {
      this.setState({ currentLevel: 5 });
    } else if (this.props.currentScore >= 2500 && this.props.currentScore < 3000) {
      this.setState({ currentLevel: 6 });
    } else if (this.props.currentScore >= 3000 && this.props.currentScore < 3500) {
      this.setState({ currentLevel: 7 });
    } else if (this.props.currentScore >= 3500 && this.props.currentScore < 4000) {
      this.setState({ currentLevel: 8 });
    } else if (this.props.currentScore >= 4000 && this.props.currentScore < 4500) {
      this.setState({ currentLevel: 9 });
    } else if (this.props.currentScore >= 4500 && this.props.currentScore < 5000) {
      this.setState({ currentLevel: 10 });
    } else if (this.props.currentScore >= 5000) {
      this.setState({ currentLevel: 11 });
    } else {
      this.setState({ currentLevel: 1 });
    }
  };

  getUsers = () => {
    fetch(URLS.users)
      .then(res => res.json())
      .then(json => this.setState({ users: json }));
  };

  setInputValue = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    return (
      <div className={`container ${this.props.currentTheme.background}`}>
        <Header />
        <HiScoresList users={this.state.users} />
        <DrCat />
        <SessionInfo currentLevel={this.state.currentLevel} />
        <Bottle
          updateHiScore={this.updateHiScore}
          setLevel={this.setLevel}
          currentLevel={this.state.currentLevel}
        />
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
