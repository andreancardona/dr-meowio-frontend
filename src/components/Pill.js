import React from 'react';

class Pill extends React.Component {
  state = {
    color: '',
    position: 'a4',
    status: 'active'
  };

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
    this.setState({
      color: this.props.color
    });
    this.pill.focus();
    setInterval(this.moveDown, 1000);
    // this.props.toggleActive();
  }

  moveLeft = () => {
    const positionArray = this.state.position.split('');
    if (positionArray[1] !== '1' && positionArray[0] !== 'p') {
      const prevCol = String.fromCharCode(positionArray[1].charCodeAt(0) - 1);
      positionArray.pop();
      positionArray.push(prevCol);
      const newPosition = positionArray.join('');
      this.setState({
        position: newPosition
      });
    }
  };

  moveRight = () => {
    const positionArray = this.state.position.split('');
    if (positionArray[1] !== '8' && positionArray[0] !== 'p') {
      const nextCol = String.fromCharCode(positionArray[1].charCodeAt(0) + 1);
      positionArray.pop();
      positionArray.push(nextCol);
      const newPosition = positionArray.join('');
      this.setState({
        position: newPosition
      });
    }
  };

  moveDown = () => {
    const positionArray = this.state.position.split('');
    if (positionArray[0] !== 'p') {
      const nextRow = String.fromCharCode(positionArray[0].charCodeAt(0) + 1);
      positionArray.shift();
      positionArray.unshift(nextRow);
      const newPosition = positionArray.join('');
      this.setState({
        position: newPosition
      });
    } else if (positionArray[0] === 'p') {
      this.props.toggleActive();
      this.props.addPilltoBoard(this.state.color, this.state.position);
    }
  };

  render() {
    return (
      <div
        ref={div => {
          this.pill = div;
        }}
        onKeyDown={event => this.handleKeyPress(event.key)}
        className={`${this.state.color} ${this.state.position}`}
        tabIndex="0"
      />
    );
  }
}

export default Pill;
