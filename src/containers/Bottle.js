import React from 'react';
import Pill from '../components/Pill.js';
import StaticPill from '../components/StaticPill.js';

class Bottle extends React.Component {
  state = {
    activePillColor: '',
    activePillPosition: 'a4',
    gameBoard: [
      [
        // a
        { position: 'a1', color: null, status: null },
        { position: 'a2', color: null, status: null },
        { position: 'a3', color: null, status: null },
        { position: 'a4', color: null, status: null },
        { position: 'a5', color: null, status: null },
        { position: 'a6', color: null, status: null },
        { position: 'a7', color: null, status: null },
        { position: 'a8', color: null, status: null }
      ],
      [
        //b
        { position: 'b1', color: null, status: null },
        { position: 'b2', color: null, status: null },
        { position: 'b3', color: null, status: null },
        { position: 'b4', color: null, status: null },
        { position: 'b5', color: null, status: null },
        { position: 'b6', color: null, status: null },
        { position: 'b7', color: null, status: null },
        { position: 'b8', color: null, status: null }
      ],
      [
        //c
        { position: 'c1', color: null, status: null },
        { position: 'c2', color: null, status: null },
        { position: 'c3', color: null, status: null },
        { position: 'c4', color: null, status: null },
        { position: 'c5', color: null, status: null },
        { position: 'c6', color: null, status: null },
        { position: 'c7', color: null, status: null },
        { position: 'c8', color: null, status: null }
      ],
      [
        //d
        { position: 'd1', color: null, status: null },
        { position: 'd2', color: null, status: null },
        { position: 'd3', color: null, status: null },
        { position: 'd4', color: null, status: null },
        { position: 'd5', color: null, status: null },
        { position: 'd6', color: null, status: null },
        { position: 'd7', color: null, status: null },
        { position: 'd8', color: null, status: null }
      ],
      [
        //e
        { position: 'e1', color: null, status: null },
        { position: 'e2', color: null, status: null },
        { position: 'e3', color: null, status: null },
        { position: 'e4', color: null, status: null },
        { position: 'e5', color: null, status: null },
        { position: 'e6', color: null, status: null },
        { position: 'e7', color: null, status: null },
        { position: 'e8', color: null, status: null }
      ],
      [
        //f
        { position: 'f1', color: null, status: null },
        { position: 'f2', color: null, status: null },
        { position: 'f3', color: null, status: null },
        { position: 'f4', color: null, status: null },
        { position: 'f5', color: null, status: null },
        { position: 'f6', color: null, status: null },
        { position: 'f7', color: null, status: null },
        { position: 'f8', color: null, status: null }
      ],
      [
        //g
        { position: 'g1', color: null, status: null },
        { position: 'g2', color: null, status: null },
        { position: 'g3', color: null, status: null },
        { position: 'g4', color: null, status: null },
        { position: 'g5', color: null, status: null },
        { position: 'g6', color: null, status: null },
        { position: 'g7', color: null, status: null },
        { position: 'g8', color: null, status: null }
      ],
      [
        //h
        { position: 'h1', color: null, status: null },
        { position: 'h2', color: null, status: null },
        { position: 'h3', color: null, status: null },
        { position: 'h4', color: null, status: null },
        { position: 'h5', color: null, status: null },
        { position: 'h6', color: null, status: null },
        { position: 'h7', color: null, status: null },
        { position: 'h8', color: null, status: null }
      ],
      [
        //i
        { position: 'i1', color: null, status: null },
        { position: 'i2', color: null, status: null },
        { position: 'i3', color: null, status: null },
        { position: 'i4', color: null, status: null },
        { position: 'i5', color: null, status: null },
        { position: 'i6', color: null, status: null },
        { position: 'i7', color: null, status: null },
        { position: 'i8', color: null, status: null }
      ],
      [
        //j
        { position: 'j1', color: null, status: null },
        { position: 'j2', color: null, status: null },
        { position: 'j3', color: null, status: null },
        { position: 'j4', color: null, status: null },
        { position: 'j5', color: null, status: null },
        { position: 'j6', color: null, status: null },
        { position: 'j7', color: null, status: null },
        { position: 'j8', color: null, status: null }
      ],
      [
        //k
        { position: 'k1', color: null, status: null },
        { position: 'k2', color: null, status: null },
        { position: 'k3', color: null, status: null },
        { position: 'k4', color: null, status: null },
        { position: 'k5', color: null, status: null },
        { position: 'k6', color: null, status: null },
        { position: 'k7', color: null, status: null },
        { position: 'k8', color: null, status: null }
      ],
      [
        //l
        { position: 'l1', color: null, status: null },
        { position: 'l2', color: null, status: null },
        { position: 'l3', color: null, status: null },
        { position: 'l4', color: null, status: null },
        { position: 'l5', color: null, status: null },
        { position: 'l6', color: null, status: null },
        { position: 'l7', color: null, status: null },
        { position: 'l8', color: null, status: null }
      ],
      [
        //m
        { position: 'm1', color: null, status: null },
        { position: 'm2', color: null, status: null },
        { position: 'm3', color: null, status: null },
        { position: 'm4', color: null, status: null },
        { position: 'm5', color: null, status: null },
        { position: 'm6', color: null, status: null },
        { position: 'm7', color: null, status: null },
        { position: 'm8', color: null, status: null }
      ],
      [
        //n
        { position: 'n1', color: null, status: null },
        { position: 'n2', color: null, status: null },
        { position: 'n3', color: null, status: null },
        { position: 'n4', color: null, status: null },
        { position: 'n5', color: null, status: null },
        { position: 'n6', color: null, status: null },
        { position: 'n7', color: null, status: null },
        { position: 'n8', color: null, status: null }
      ],
      [
        //o
        { position: 'o1', color: null, status: null },
        { position: 'o2', color: null, status: null },
        { position: 'o3', color: null, status: null },
        { position: 'o4', color: null, status: null },
        { position: 'o5', color: null, status: null },
        { position: 'o6', color: null, status: null },
        { position: 'o7', color: null, status: null },
        { position: 'o8', color: null, status: null }
      ],
      [
        //p
        { position: 'p1', color: null, status: null },
        { position: 'p2', color: null, status: null },
        { position: 'p3', color: null, status: null },
        { position: 'p4', color: null, status: null },
        { position: 'p5', color: null, status: null },
        { position: 'p6', color: null, status: null },
        { position: 'p7', color: null, status: null },
        { position: 'p8', color: null, status: null }
      ]
    ]
  };

  setColor = () => {
    const activePillColor = this.props.colorArray[
      Math.floor(Math.random() * this.props.colorArray.length)
    ];
    this.setState({ activePillColor: activePillColor });
  };

  makeActivePill = () => {
    return (
      <Pill
        setColor={this.setColor}
        toggleActive={this.toggleActive}
        stopPill={this.stopPill}
        color={this.state.activePillColor}
        gameBoard={this.state.gameBoard}
        updateActivePillPosition={this.updateActivePillPosition}
        activePillPosition={this.state.activePillPosition}
        findTileBelow={this.findTileBelow}
        findTileLeft={this.findTileLeft}
        findTileRight={this.findTileRight}
      />
    );
  };

  match = () => {
    const activePosition = this.state.activePillPosition;
    const activeColor = this.state.activePillColor;
    const oneBelow = activePosition.split('')[0] === 'p' ? false : this.findTileBelow(1);
    const oneAbove = activePosition.split('')[0] === 'a' ? false : this.findTileAbove(1);
    const oneLeft = activePosition.split('')[1] <= 1 ? false : this.findTileLeft(1);
    const oneRight = activePosition.split('')[1] >= 8 ? false : this.findTileRight(1);
    const twoBelow =
      activePosition.split('')[0] === 'p' || activePosition.split('')[0] === 'o'
        ? false
        : this.findTileBelow(2);
    const twoAbove =
      activePosition.split('')[0] === 'a' || activePosition.split('')[0] === 'b'
        ? false
        : this.findTileAbove(2);
    const twoLeft = activePosition.split('')[1] <= 2 ? false : this.findTileLeft(2);
    const twoRight = activePosition.split('')[1] >= 7 ? false : this.findTileRight(2);

    if (
      activePosition.split('')[0] !== 'p' &&
      ((oneBelow.color === this.state.activePillColor &&
        oneAbove.color === this.state.activePillColor) ||
        (oneBelow.color === this.state.activePillColor &&
          twoBelow.color === this.state.activePillColor) ||
        (oneAbove.color === this.state.activePillColor &&
          twoAbove.color === this.state.activePillColor) ||
        (oneLeft.color === this.state.activePillColor &&
          oneRight.color === this.state.activePillColor) ||
        (oneLeft.color === this.state.activePillColor &&
          twoLeft.color === this.state.activePillColor) ||
        (oneRight.color === this.state.activePillColor &&
          twoRight.color === this.state.activePillColor))
    ) {
      return true;
    } else {
      return false;
    }
  };

  handleMatch = () => {
    if (this.match()) {
      //vertical match
      console.log('vertical!');
      this.props.addPoints();
    }
  };

  findTileBelow = distance => {
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
    const positionArray = this.state.activePillPosition.split('');
    const nextRow =
      rows.indexOf(positionArray[0]) + distance <= 15
        ? rows.indexOf(positionArray[0]) + distance
        : 15;
    const col = positionArray[1];
    const nextPosition = [rows[nextRow], col].join('');
    const nextTile = this.state.gameBoard[nextRow].find(tile => tile.position === nextPosition);
    return nextTile;
  };

  findTileAbove = distance => {
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
    const positionArray = this.state.activePillPosition.split('');
    const lastRow =
      rows.indexOf(positionArray[0]) - distance > 0 ? rows.indexOf(positionArray[0]) - distance : 0;
    const col = positionArray[1];
    const nextPosition = [rows[lastRow], col].join('');
    const nextTile = this.state.gameBoard[lastRow].find(tile => tile.position === nextPosition);
    return nextTile;
  };

  findTileLeft = distance => {
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
    const positionArray = this.state.activePillPosition.split('');
    const row = rows.indexOf(positionArray[0]);
    const lastCol =
      parseInt(positionArray[1], 10) - distance <= 1
        ? 1
        : parseInt(positionArray[1], 10) - distance;
    const nextPosition = [rows[row], lastCol.toString()].join('');
    const nextTile = this.state.gameBoard[row].find(tile => tile.position === nextPosition);
    return nextTile;
  };

  findTileRight = distance => {
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
    const positionArray = this.state.activePillPosition.split('');
    const row = rows.indexOf(positionArray[0]);
    const nextCol =
      parseInt(positionArray[1], 10) + distance >= 8
        ? 8
        : parseInt(positionArray[1], 10) + distance;
    const nextPosition = [rows[row], nextCol.toString()].join('');
    const nextTile = this.state.gameBoard[row].find(tile => tile.position === nextPosition);
    return nextTile;
  };

  updateActivePillPosition = newPosition => {
    this.setState({ activePillPosition: newPosition });
  };

  toggleActive = () => {
    this.setState({ activePill: !this.state.activePill });
  };

  stopPill = () => {
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
    const positionArray = this.state.activePillPosition.split('');
    const row = rows.indexOf(positionArray[0]);
    const col = positionArray[1] - 1;
    const currentTile = this.state.gameBoard[row].find(
      tile => tile.position === this.state.activePillPosition
    );
    currentTile.color = this.state.activePillColor;
    currentTile.status = 'filled';
    if (this.match()) {
      this.handleMatch();
    }
    const newGameBoard = [...this.state.gameBoard];
    newGameBoard[col][row] = { currentTile };
    this.setState({ activePillPosition: 'a4', gameBoard: newGameBoard });
    this.setColor();
  };

  render() {
    return (
      <div className="bottle pillgrid">
        {this.state.gameBoard.map(row =>
          row.map(cellObj => {
            return cellObj.status ? (
              <StaticPill
                key={cellObj.position}
                color={cellObj.color}
                position={cellObj.position}
              />
            ) : null;
          })
        )}
        {this.makeActivePill()}
      </div>
    );
  }
}
export default Bottle;
