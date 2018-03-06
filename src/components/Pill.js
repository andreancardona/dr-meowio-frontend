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
    setInterval(this.moveDown, 100);
  }

  moveLeft = () => {
    const nextTile = this.props.findTileLeft(1);
    const positionArray = this.props.activePillPosition.split('');
    if (positionArray[1] !== '1' && positionArray[0] !== 'p' && nextTile.status !== 'filled') {
      const prevCol = String.fromCharCode(positionArray[1].charCodeAt(0) - 1);
      positionArray.pop();
      positionArray.push(prevCol);
      const newPosition = positionArray.join('');
      this.props.updateActivePillPosition(newPosition);
    }
  };

  moveRight = () => {
    const nextTile = this.props.findTileRight(1);
    const positionArray = this.props.activePillPosition.split('');
    if (positionArray[1] !== '8' && positionArray[0] !== 'p' && nextTile.status !== 'filled') {
      const nextCol = String.fromCharCode(positionArray[1].charCodeAt(0) + 1);
      positionArray.pop();
      positionArray.push(nextCol);
      const newPosition = positionArray.join('');
      this.props.updateActivePillPosition(newPosition);
    }
  };

  moveDown = () => {
    const nextTile = this.props.findTileBelow(1);
    const positionArray = this.props.activePillPosition.split('');
    if (positionArray[0] !== 'p' && nextTile.status !== 'filled') {
      const nextRow = String.fromCharCode(positionArray[0].charCodeAt(0) + 1);
      positionArray.shift();
      positionArray.unshift(nextRow);
      const newPosition = positionArray.join('');
      this.props.updateActivePillPosition(newPosition);
    } else if (positionArray[0] === 'p' || nextTile.status === 'filled') {
      this.props.stopPill();
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
