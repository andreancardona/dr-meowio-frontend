import React from 'react';
import { connect } from 'react-redux';

class Pill extends React.Component {
  handleKeyPress = event => {
    event.preventDefault();
    if (!this.props.gameOver) {
      if (event.key === 'ArrowRight') {
        this.moveRight();
      } else if (event.key === 'ArrowLeft') {
        this.moveLeft();
      } else if (event.key === 'ArrowDown') {
        this.moveDown();
      }
    }
  };

  componentDidMount() {
    this.props.setColor();
    this.pill.focus();
    this.timer();
  }

  componentWillUnmount() {
    clearTimeout(this.tick);
  }
  //TODO: This interval is still not finishing correctly.
  timer = () => {
    this.moveDown();
    clearTimeout(this.tick);
    this.tick = setTimeout(this.timer, this.setPillSpeed());
  };

  setPillSpeed = () => {
    switch (this.props.currentLevel) {
      case 1:
        return 500;
      case 2:
        return 400;
      case 3:
        return 300;
      case 4:
        return 200;
      case 5:
        return 100;
      case 6:
        return 80;
      case 7:
        return 70;
      case 8:
        return 60;
      case 9:
        return 50;
      case 10:
        return 40;
      case 11:
        return 30;
      default:
        return 1000;
    }
  };

  moveLeft = () => {
    const nextTile = this.props.findTileLeft(1);

    if (nextTile && nextTile.status !== 'filled') {
      this.props.updateActivePillPosition(nextTile.position);
    }
  };

  moveRight = () => {
    const nextTile = this.props.findTileRight(1);
    if (nextTile && nextTile.status !== 'filled') {
      this.props.updateActivePillPosition(nextTile.position);
    }
  };

  moveDown = () => {
    const nextTile = this.props.findTileBelow(1);
    const currentRow = this.props.activePillPosition.split('')[0];
    if (currentRow === 'p' || nextTile.status === 'filled') {
      this.props.stopPill();
    } else {
      this.props.updateActivePillPosition(nextTile.position);
    }
  };

  render() {
    return this.props.gameOver ? null : (
      <div
        ref={div => {
          this.pill = div;
        }}
        onKeyDown={event => this.handleKeyPress(event)}
        className={`${this.props.color} ${this.props.activePillPosition}`}
        tabIndex="0"
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    gameOver: state.gameOver,
    currentLevel: state.currentLevel,
    currentScore: state.currentScore
  };
};

export default connect(mapStateToProps)(Pill);
