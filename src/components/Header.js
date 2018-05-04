import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <img
      src={require(`../assets/${props.currentTheme.name}-Logo.png`)}
      className="title-panel"
      alt="Dr. Meowio"
    />
  );
};

const mapStateToProps = state => {
  return { currentTheme: state.currentTheme };
};

export default connect(mapStateToProps)(Header);
