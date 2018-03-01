import React from 'react';
import HiScoresList from '../components/HiScoresList';
import Login from '../components/Login';
import SessionInfo from '../components/SessionInfo';
import BottleContainer from './BottleContainer';
import URLS from '../urls';

class GameContainer extends React.Component {
  state = {
    currentUser: '',
    loggedIn: false,
    currentScore: 0,
    hiScores: [],
    users: [],
    themes: [],
    levels: [],
    inputValue: ''
  };

  componentDidMount() {
    this.getThemes();
    this.getLevels();
    this.getUsers();
  }

  getThemes = () => {
    fetch(URLS.themes)
      .then(res => res.json())
      .then(json => {
        this.setState({
          themes: json
        });
      });
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
    console.log('defaultUser', defaultUser);
    this.setState({
      currentUser: defaultUser,
      loggedIn: false,
      inputValue: ''
    });
  };

  setCurrentUser = () => {
    const currentUser = this.state.users.find(user => {
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
    //console.log('testing', event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    return (
      <div>
        Game Container
        <HiScoresList users={this.state.users} />
        <Login
          loggedIn={this.state.loggedIn}
          inputValue={this.state.inputValue}
          setInputValue={this.setInputValue}
          setCurrentUser={this.setCurrentUser}
          setDefaultUser={this.setDefaultUser}
        />
        <SessionInfo currentUser={this.state.currentUser} currentScore={this.state.currentScore} />
        <BottleContainer />
      </div>
    );
  }
}

export default GameContainer;
