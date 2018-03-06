import React from 'react';

class Pill extends React.Component {
  handleKeyPress = key => {
    if (key === 'ArrowRight') {
      this.moveRight();
    } else if (key === 'ArrowLeft') {
      this.moveLeft();
    } else if (key === 'ArrowDown') {
      this.moveDown();
    }
  };

  componentDidMount() {
    this.props.setColor();
    this.pill.focus();
    this.interval = setInterval(this.moveDown, 2000);
  }

  componentWillReceiveProps() {
    console.log('willrecieve', this.props.gameOver);
    if (this.props.gameOver === true) {
      clearInterval(this.interval);
      console.log('interval clear');
    }
  }

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
    return (
      <div
        ref={div => {
          this.pill = div;
        }}
        onKeyDown={event => this.handleKeyPress(event.key)}
        className={`${this.props.color} ${this.props.activePillPosition}`}
        tabIndex="0"
      />
    );
  }
}

export default Pill;
