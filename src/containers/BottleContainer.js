import React from 'react';

import Bottle from './Bottle.js';

class BottleContainer extends React.Component {
  render() {
    return (
      <div className="bottle-panel">
        <Bottle colorArray={this.props.colorArray} />
        <button type="button" onClick={this.props.startGame}>
          START
        </button>
      </div>
    );
  }
}

export default BottleContainer;
