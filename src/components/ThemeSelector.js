import React from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../actions/actions';

const ThemeSelector = props => {
  return (
    <div className="theme-panel">
      <h2 className="theme-label">CHOOSE THEME</h2>
      <select
        className="theme-input"
        onChange={event => props.dispatchSetTheme(event.target.value)}
      >
        <option value="1">Pow</option>
        <option value="2">Baby</option>
        <option value="8">Glam</option>
        <option value="7">Mod</option>
        <option value="6">Pickle</option>
        <option value="5">Grape</option>
        <option value="3">Vitamin C</option>
        <option value="4">Berry</option>
      </select>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchSetTheme: themeId => dispatch(setTheme(themeId))
  };
};

export default connect(null, mapDispatchToProps)(ThemeSelector);
