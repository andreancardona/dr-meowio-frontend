import React from 'react';
import Pill from '../components/Pill.js';

class Bottle extends React.Component {
  state = {
    activePill: false
  };
  makePill = () => {
    const color = this.props.colorArray[Math.floor(Math.random() * this.props.colorArray.length)];
    return <Pill toggleActive={this.toggleActive} color={color} />;
  };

  toggleActive = () => {
    this.setState({ activePill: !this.state.activePill });
  };

  render() {
    return <div className="bottle pillgrid">{this.state.activePill ? null : this.makePill()}</div>;
  }
}

export default Bottle;
