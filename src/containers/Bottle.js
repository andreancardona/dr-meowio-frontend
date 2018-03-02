import React from 'react';
import Pill from '../components/Pill.js';

class Bottle extends React.Component {
  makePill = () => {
    const color = this.props.colorArray[Math.floor(Math.random() * this.props.colorArray.length)];
    const classInfo = `a4 ${color}`;
    return <Pill classInfo={classInfo} />;
  };

  render() {
    return <div className="bottle pillgrid">{this.makePill()}</div>;
  }
}

export default Bottle;
