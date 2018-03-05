import React from 'react';

const ThemeSelector = props => {
  // const handleSelect

  return (
    <select onChange={event => props.setTheme(event.target.value)}>
      <option value="Classic">Classic</option>
      <option value="Cat">Cat</option>
      <option value="Sunset">Sunset</option>
      <option value="Neon">Neon</option>
    </select>
  );
};

export default ThemeSelector;
