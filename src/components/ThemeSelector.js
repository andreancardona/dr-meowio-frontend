import React from 'react';

const ThemeSelector = props => {
  // const handleSelect

  return (
    <div className="theme-panel">
      <h2 className="theme-label">CHOOSE THEME</h2>
      <select className="theme-input" onChange={event => props.setTheme(event.target.value)}>
        <option value="Pow">Pow</option>
        <option value="Baby">Baby</option>
        <option value="Glam">Glam</option>
        <option value="Mod">Mod</option>
        <option value="Pickle">Pickle</option>
        <option value="Grape">Grape</option>
        <option value="VitaminC">Vitamin C</option>
        <option value="Berry">Berry</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
