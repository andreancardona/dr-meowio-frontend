import React from 'react';

import Bottle from './Bottle.js';

class BottleContainer extends React.Component {
  render() {
    return (
      <div className="bottle-panel">
        <Bottle />
        <button type="button" onClick={this.props.startGame}>
          START
        </button>
      </div>
    );
  }
}

export default BottleContainer;
