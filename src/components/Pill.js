import React from 'react';

class Pill extends React.Component {
  state = {
    color: '',
    position: 'a4'
  };

  componentDidMount() {
    this.setState({
      color: this.props.color,
      position: this.props.pillPosition
    });
    setInterval(this.moveDown, 1000);
  }

  moveDown = () => {
    const positionArray = this.state.position.split('');
    const nextRow = String.fromCharCode(positionArray[0].charCodeAt(0) + 1);
    positionArray.shift();
    positionArray.unshift(nextRow);
    const newPosition = positionArray.join('');
    this.setState(
      {
        position: newPosition
      },
      () => console.log(this.state.position)
    );
  };
  render() {
    return <div className={`${this.state.color} ${this.state.position}`} />;
  }
}

export default Pill;
