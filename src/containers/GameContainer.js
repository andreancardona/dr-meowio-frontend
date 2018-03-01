import React from 'react';
import HiScoresList from '../components/HiScoresList';
import Login from '../components/Login';
import SessionInfo from '../components/SessionInfo';
import BottleContainer from './BottleContainer';
import URLS from '../urls';

class GameContainer extends React.Component {
  state = {
    currentUser: {},
    loggedIn: false,
    currentScore: 0,
    hiScores: [],
    users: [],
    themes: [],
    levels: []
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
      .then(json => this.setState({ users: json }));
  };

  render() {
    return (
      <div>
        Game Container
        <HiScoresList users={this.state.users} />
        <Login />
        <SessionInfo />
        <BottleContainer />
      </div>
    );
  }
}

export default GameContainer;
