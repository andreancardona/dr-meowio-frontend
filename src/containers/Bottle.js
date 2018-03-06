import React from 'react';
import Pill from '../components/Pill.js';
import StaticPill from '../components/StaticPill.js';

class Bottle extends React.Component {
  state = {
    activePillColor: '',
    activePillPosition: 'a4',
    gameOver: false,
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

  rowNames = (() => {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
  })();

  rowIndex = letter => this.rowNames.indexOf(letter);

  setColor = () => {
    const activePillColor = this.props.colorArray[
      Math.floor(Math.random() * this.props.colorArray.length)
    ];
    this.setState({ activePillColor: activePillColor });
  };

  makeActivePill = () => {
    if (this.state.gameBoard[0][3].status === 'filled') {
      console.log('GAME OVER');
    } else {
      return (
        <Pill
          setColor={this.setColor}
          toggleActive={this.toggleActive}
          stopPill={this.stopPill}
          gameOver={this.state.gameOver}
          color={this.state.activePillColor}
          gameBoard={this.state.gameBoard}
          updateActivePillPosition={this.updateActivePillPosition}
          activePillPosition={this.state.activePillPosition}
          findTileBelow={this.findTileBelow}
          findTileLeft={this.findTileLeft}
          findTileRight={this.findTileRight}
        />
      );
    }
  };

  match = positionArray => {
    const activeColor = this.state.activePillColor;
    const oneBelow = positionArray[0] === 'p' ? false : this.findTileBelow(1);
    const oneAbove = positionArray[0] === 'a' ? false : this.findTileAbove(1);
    const oneLeft = parseInt(positionArray[1], 10) <= 1 ? false : this.findTileLeft(1);
    const oneRight = parseInt(positionArray[1], 10) >= 7 ? false : this.findTileRight(1);
    const twoBelow =
      positionArray[0] === 'p' || positionArray[0] === 'o' ? false : this.findTileBelow(2);
    const twoAbove =
      positionArray[0] === 'a' || positionArray[0] === 'b' ? false : this.findTileAbove(2);
    const twoLeft = parseInt(positionArray[1], 10) <= 2 ? false : this.findTileLeft(2);
    const twoRight = parseInt(positionArray[1], 10) >= 6 ? false : this.findTileRight(2);
    // console.log(
    //   '1b:',
    //   oneBelow,
    //   '2b:',
    //   twoBelow,
    //   '1l:',
    //   oneLeft,
    //   '2l:',
    //   twoLeft,
    //   '1r:',
    //   oneRight,
    //   '2r:',
    //   twoRight,
    //   '1a:',
    //   oneAbove,
    //   '2a:',
    //   twoAbove
    // );
    if (positionArray[0] !== 'p') {
      if (oneBelow.color === activeColor && oneAbove.color === activeColor) {
        return true;
      } else if (oneBelow.color === activeColor && twoBelow.color === activeColor) {
        return true;
      } else if (oneAbove.color === activeColor && twoAbove.color === activeColor) {
        return true;
      } else if (oneLeft.color === activeColor && oneRight.color === activeColor) {
        return true;
      } else if (oneLeft.color === activeColor && twoLeft.color === activeColor) {
        return true;
      } else if (oneRight.color === activeColor && twoRight.color === activeColor) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  handleMatch = positionArray => {
    if (this.match(positionArray)) {
      this.props.addPoints();
      //handle gameboard update here
    }
  };

  findTileBelow = distance => {
    const positionArray = this.state.activePillPosition.split('');
    const nextRow =
      this.rowIndex(positionArray[0]) + distance <= 15
        ? this.rowIndex(positionArray[0]) + distance
        : 15;
    const col = positionArray[1];
    const nextPosition = [this.rowNames[nextRow], col.toString()].join('');
    const nextTile = this.state.gameBoard[nextRow].find(tile => tile.position === nextPosition);
    console.log('below:', nextTile);
    return nextTile;
  };

  findTileAbove = distance => {
    const positionArray = this.state.activePillPosition.split('');
    const lastRow =
      this.rowIndex(positionArray[0]) - distance <= 0
        ? 0
        : this.rowIndex(positionArray[0]) - distance;
    const col = positionArray[1];
    const nextPosition = [this.rowNames[lastRow], col.toString()].join('');
    const nextTile = this.state.gameBoard[lastRow].find(tile => tile.position === nextPosition);
    console.log('above:', nextTile);
    return nextTile;
  };

  findTileLeft = distance => {
    const positionArray = this.state.activePillPosition.split('');
    const row = this.rowIndex(positionArray[0]);
    const lastCol =
      parseInt(positionArray[1], 10) - distance <= 1
        ? 1
        : parseInt(positionArray[1], 10) - distance;
    const nextPosition = [this.rowNames[row], lastCol.toString()].join('');
    const nextTile = this.state.gameBoard[row].find(tile => tile.position === nextPosition);
    console.log('left:', nextTile);
    return nextTile;
  };

  findTileRight = distance => {
    const positionArray = this.state.activePillPosition.split('');
    const row = this.rowIndex(positionArray[0]);
    const nextCol =
      parseInt(positionArray[1], 10) + distance >= 8
        ? 8
        : parseInt(positionArray[1], 10) + distance;
    const nextPosition = [this.rowNames[row], nextCol.toString()].join('');
    const nextTile = this.state.gameBoard[row].find(tile => tile.position === nextPosition);
    console.log('right:', nextTile);
    return nextTile;
  };

  updateActivePillPosition = newPosition => {
    this.setState({ activePillPosition: newPosition });
  };

  stopPill = () => {
    const row = this.state.activePillPosition.split('')[0];
    const column = this.state.activePillPosition.split('')[1];
    const currentTile = this.state.gameBoard[this.rowIndex(row)].find(
      tile => tile.position === this.state.activePillPosition
    );
    currentTile.color = this.state.activePillColor;
    currentTile.status = 'filled';
    if (this.match([row, column])) {
      this.handleMatch([row, column]);
    }
    const newGameBoard = [...this.state.gameBoard];
    newGameBoard[this.rowIndex(row)][column - 1] = currentTile;
    //add end of game here later
    this.setState({ activePillPosition: 'a4', gameBoard: newGameBoard }, this.setColor());
  };

  // stopPill = () => {
  //   const positionArray = this.state.activePillPosition.split('');
  //   const row = this.rowIndex(positionArray[0]);
  //   const col = parseInt(positionArray[1], 10);
  //   // console.log('row:', row, 'col:', col);
  //   const currentTile = this.state.gameBoard[row].find(
  //     tile => tile.position === this.state.activePillPosition
  //   );
  //   currentTile.color = this.state.activePillColor;
  //   currentTile.status = 'filled';
  //   // console.log(currentTile);
  //   if (this.match(positionArray)) {
  //     this.handleMatch(positionArray);
  //   }
  //   const newGameBoard = [...this.state.gameBoard];
  //   newGameBoard[row][col] = { currentTile };
  //   // console.log(newGameBoard);
  //   const spawnTile = newGameBoard[0][3];
  //   console.log(!!spawnTile.status);
  //   if (spawnTile.status) {
  //     // console.log('GAME OVER');
  //     const endGameBoard = [...this.state.gameBoard];
  //     endGameBoard.forEach(row =>
  //       row.forEach(tile => {
  //         tile.color = this.state.activePillColor;
  //         tile.status = 'filled';
  //       })
  //     );
  //     this.setState({ gameBoard: endGameBoard, gameOver: true });
  //   } else {
  //     console.log('hitting else');
  //     this.setState({ activePillPosition: 'a4', gameBoard: newGameBoard });
  //     this.setColor();
  //   }
  // };

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
        {this.props.active ? this.makeActivePill() : null}
      </div>
    );
  }
}
export default Bottle;
