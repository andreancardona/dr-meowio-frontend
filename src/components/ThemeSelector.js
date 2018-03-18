import React from 'react';

const ThemeSelector = props => {
  // const handleSelect

  return (
    <div className="theme-panel">
      <h2 className="theme-label">CHOOSE THEME</h2>
      <select className="theme-input" onChange={event => props.setTheme(event.target.value)}>
        <option value="Classic">Classic</option>
        <option value="Cat">Cat</option>
        <option value="Sunset">Sunset</option>
        <option value="Neon">Neon</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
