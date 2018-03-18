import React from 'react';

const Header = props => {
  return (
    <img
      src={require(`../assets/${props.currentTheme.name}-Logo.png`)}
      className="title-panel"
      alt="Dr. Meowio"
    />
  );
};

export default Header;
