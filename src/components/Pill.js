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
    setInterval(this.moveDown, 1000);
  }

  findTileBelow = () => {
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
    const positionArray = this.props.activePillPosition.split('');
    const nextRow = rows.indexOf(positionArray[0]) < 15 ? rows.indexOf(positionArray[0]) + 1 : 15;
    const col = positionArray[1];
    const nextPosition = [rows[nextRow], col].join('');
    const nextTile = this.props.gameBoard[nextRow].find(tile => tile.position === nextPosition);
    return nextTile;
  };

  findTileLeft = () => {
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
    const positionArray = this.props.activePillPosition.split('');
    const row = rows.indexOf(positionArray[0]);
    const lastCol = positionArray[1] === 1 ? 1 : parseInt(positionArray[1]) - 1;
    const nextPosition = [rows[row], lastCol.toString()].join('');
    const nextTile = this.props.gameBoard[row].find(tile => tile.position === nextPosition);
    return nextTile;
  };

  findTileRight = () => {
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
    const positionArray = this.props.activePillPosition.split('');
    const row = rows.indexOf(positionArray[0]);
    console.log(positionArray);
    const nextCol = positionArray[1] === 8 ? 8 : parseInt(positionArray[1]) + 1;
    const nextPosition = [rows[row], nextCol.toString()].join('');
    const nextTile = this.props.gameBoard[row].find(tile => tile.position === nextPosition);
    return nextTile;
  };

  moveLeft = () => {
    const nextTile = this.findTileLeft();
    const positionArray = this.props.activePillPosition.split('');
    if (positionArray[1] !== '1' && positionArray[0] !== 'p' && nextTile.status !== 'filled') {
      const prevCol = String.fromCharCode(positionArray[1].charCodeAt(0) - 1);
      positionArray.pop();
      positionArray.push(prevCol);
      const newPosition = positionArray.join('');
      console.log(newPosition);
      this.props.updateActivePillPosition(newPosition);
    }
  };

  moveRight = () => {
    const nextTile = this.findTileRight();
    const positionArray = this.props.activePillPosition.split('');
    if (positionArray[1] !== '8' && positionArray[0] !== 'p' && nextTile.status !== 'filled') {
      const nextCol = String.fromCharCode(positionArray[1].charCodeAt(0) + 1);
      positionArray.pop();
      positionArray.push(nextCol);
      const newPosition = positionArray.join('');
      console.log(newPosition);
      this.props.updateActivePillPosition(newPosition);
    }
  };

  moveDown = () => {
    //find next tile
    const nextTile = this.findTileBelow();
    console.log(nextTile);
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
