import React from 'react';
import HiScoresList from '../components/HiScoresList';
import Login from '../components/Login';
import SessionInfo from '../components/SessionInfo';
import Bottle from './Bottle';
import DrCat from '../components/DrCat';
import URLS from '../urls';

class GameContainer extends React.Component {
  state = {
    currentUser: '',
    active: false,
    currentTheme: {
      colorOne: 'classicColorOne',
      colorTwo: 'classicColorTwo',
      colorThree: 'classicColorThree',
      colorFour: 'classicColorFour',
      name: 'Classic',
      background: 'classicBackground'
    },
    loggedIn: false,
    currentScore: 0,
    hiScores: [],
    users: [],
    themes: [],
    levels: [],
    inputValue: ''
  };

  //write Theme selector that sets current theme!!!!
  componentDidMount() {
    this.getThemes();
    this.getLevels();
    this.getUsers();
  }

  updateHiScore = () => {
    console.log('update!');
    const currentUser = { ...this.state.currentUser };
    currentUser.hiScore = this.state.currentScore;
    console.log(currentUser);
    this.setState({ currentUser: currentUser });
    currentUser => {
      fetch(`http://localhost:3000/users/${currentUser.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentUser)
      });
    };
  };

  addPoints = () => this.setState({ currentScore: this.state.currentScore + 100 });

  getThemes = () => {
    fetch(URLS.themes)
      .then(res => res.json())
      .then(json => {
        this.setState({
          themes: json
        });
      });
  };

  setTheme = themeName => {
    const currentTheme = this.state.themes.find(theme => theme.name === themeName);
    this.setState({ currentTheme });
  };

  colorArray = () => {
    const colorArray = [];
    colorArray.push(this.state.currentTheme.colorOne);
    colorArray.push(this.state.currentTheme.colorTwo);
    colorArray.push(this.state.currentTheme.colorThree);
    colorArray.push(this.state.currentTheme.colorFour);
    return colorArray;
  };

  getLevels = () => {
    fetch(URLS.levels)
      .then(res => res.json())
      .then(json => this.setState({ levels: json }));
  };

  getUsers = () => {
    fetch(URLS.users)
      .then(res => res.json())
      .then(json => this.setState({ users: json }, () => this.setDefaultUser()));
  };

  setDefaultUser = () => {
    const defaultUser = this.state.users.find(user => {
      return user.id === 3;
    });
    this.setState({
      currentUser: defaultUser,
      loggedIn: false,
      inputValue: ''
    });
  };

  setCurrentUser = () => {
    let currentUser = this.state.users.find(user => {
      return user.name === this.state.inputValue;
    });
    this.setState({
      currentUser: currentUser
    });
    this.setLoggedIn();
  };

  setLoggedIn = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  };

  setInputValue = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  startGame = () => {
    this.setState({
      active: !this.state.active
    });
    console.log('STARRRRRTTT!!!!');
  };

  render() {
    return (
      <div className={`container ${this.state.currentTheme.background}`}>
        <HiScoresList users={this.state.users} />
        <Login
          loggedIn={this.state.loggedIn}
          inputValue={this.state.inputValue}
          setInputValue={this.setInputValue}
          setCurrentUser={this.setCurrentUser}
          setDefaultUser={this.setDefaultUser}
          setTheme={this.setTheme}
        />
        <DrCat />
        <SessionInfo currentUser={this.state.currentUser} currentScore={this.state.currentScore} />
        <div className="bottle-panel">
          <Bottle
            updateHiScore={this.updateHiScore}
            colorArray={this.colorArray()}
            addPoints={this.addPoints}
            active={this.state.active}
          />
          <button type="button" onClick={this.startGame}>
            START
          </button>
        </div>
      </div>
    );
  }
}

export default GameContainer;
