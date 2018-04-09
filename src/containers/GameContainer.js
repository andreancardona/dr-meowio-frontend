import React from 'react';
import { connect } from 'react-redux';
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
    active: false,
    currentTheme: {
      colorOne: 'powColorOne',
      colorTwo: 'powColorTwo',
      colorThree: 'powColorThree',
      colorFour: 'powColorFour',
      name: 'Pow',
      background: 'powBackground'
    },
    currentScore: 0,
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
    this.state.currentScore > currentUser.hiScore
      ? (currentUser.hiScore = this.state.currentScore)
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

  refreshUsers = () => {
    fetch(URLS.users)
      .then(res => res.json())
      .then(json => this.setState({ users: json }));
  };

  // setTheme = themeName => {
  //   const currentTheme = this.state.themes.find(theme => theme.name === themeName);
  //   this.setState({ currentTheme });
  // };

  setLevel = () => {
    if (this.state.currentScore >= 500 && this.state.currentScore < 1000) {
      this.setState({ currentLevel: 2 });
    } else if (this.state.currentScore >= 1000 && this.state.currentScore < 1500) {
      this.setState({ currentLevel: 3 });
    } else if (this.state.currentScore >= 1500 && this.state.currentScore < 2000) {
      this.setState({ currentLevel: 4 });
    } else if (this.state.currentScore >= 2000 && this.state.currentScore < 2500) {
      this.setState({ currentLevel: 5 });
    } else if (this.state.currentScore >= 2500 && this.state.currentScore < 3000) {
      this.setState({ currentLevel: 6 });
    } else if (this.state.currentScore >= 3000 && this.state.currentScore < 3500) {
      this.setState({ currentLevel: 7 });
    } else if (this.state.currentScore >= 3500 && this.state.currentScore < 4000) {
      this.setState({ currentLevel: 8 });
    } else if (this.state.currentScore >= 4000 && this.state.currentScore < 4500) {
      this.setState({ currentLevel: 9 });
    } else if (this.state.currentScore >= 4500 && this.state.currentScore < 5000) {
      this.setState({ currentLevel: 10 });
    } else if (this.state.currentScore >= 5000) {
      this.setState({ currentLevel: 11 });
    } else {
      this.setState({ currentLevel: 1 });
    }
  };

  colorArray = () => {
    const colorArray = [];
    colorArray.push(this.state.currentTheme.colorOne);
    colorArray.push(this.state.currentTheme.colorTwo);
    colorArray.push(this.state.currentTheme.colorThree);
    colorArray.push(this.state.currentTheme.colorFour);
    return colorArray;
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

  startGame = () => {
    this.setState({
      active: !this.state.active
    });
    console.log('STARRRRRTTT!!!!');
  };

  render() {
    return (
      <div className={`container ${this.state.currentTheme.background}`}>
        <Header />
        <HiScoresList users={this.state.users} />
        <DrCat />
        <SessionInfo
          currentLevel={this.state.currentLevel}
          currentScore={this.state.currentScore}
        />
        <Bottle
          currentScore={this.state.currentScore}
          updateHiScore={this.updateHiScore}
          colorArray={this.colorArray()}
          addPoints={this.addPoints}
          active={this.state.active}
          setLevel={this.setLevel}
          currentLevel={this.state.currentLevel}
        />
        <button
          className={`start-button button-${this.props.currentTheme.name}`}
          type="button"
          onClick={this.startGame}
        >
          START
        </button>
        <ThemeSelector />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentTheme: state.currentTheme };
};

export default connect(mapStateToProps)(GameContainer);
