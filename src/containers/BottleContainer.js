import React from 'react';

class BottleContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="bottle" />
        <button type="button" onClick={this.props.startGame}>
          START
        </button>
      </div>
    );
  }
}

export default BottleContainer;
