import React, { Component } from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';

class App extends Component {
  render() {
    return <GameContainer userName="container" />;
  }
}

export default App;
