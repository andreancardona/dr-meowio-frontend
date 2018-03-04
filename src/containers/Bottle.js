import React from 'react';
import Pill from '../components/Pill.js';
import StaticPill from '../components/StaticPill.js';

class Bottle extends React.Component {
  state = {
    activePill: false,
    gameBoard: [
      [
        //a
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //b
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //c
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //d
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //e
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //f
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //g
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //h
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //i
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //j
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //k
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //l
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //m
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //n
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //o
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ],
      [
        //p
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null },
        { position: null, color: null, status: null }
      ]
    ]
  };

  makePill = () => {
    const color = this.props.colorArray[Math.floor(Math.random() * this.props.colorArray.length)];
    return (
      <Pill toggleActive={this.toggleActive} addPilltoBoard={this.addPilltoBoard} color={color} />
    );
  };

  toggleActive = () => {
    this.setState({ activePill: !this.state.activePill });
  };

  addPilltoBoard = (color, position) => {
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
    const positionArray = position.split('');
    const row = rows.indexOf(positionArray[0]);
    const col = positionArray[1] - 1;
    const newGameBoard = [...this.state.gameBoard];
    console.log(newGameBoard);
    newGameBoard[col][row] = { position: position, color: color };
    this.setState({ gameBoard: newGameBoard });
  };

  render() {
    return (
      <div className="bottle pillgrid">
        {this.state.gameBoard.map(row => {
          return row.map((cellObj, index) => {
            return cellObj.color ? (
              <StaticPill key={row + index} color={cellObj.color} position={cellObj.position} />
            ) : null;
          });
        })}
        {this.state.activePill ? null : this.makePill()}
      </div>
    );
  }
}
//I think the active pill needs to function through the gameBoard state for this to work.
export default Bottle;
