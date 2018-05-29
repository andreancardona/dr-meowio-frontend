import React from 'react';
import { connect } from 'react-redux';

const InitialsForm = props => {
  return (
    <div>
      <input
        className="login-input highscore-input"
        placeholder="Enter Your Initials"
        onChange={event => props.handleInput(event.target.value)}
        type="text"
        name="login"
        value={props.input}
        autoComplete="off"
        maxLength="3"
      />
      {props.submited ? (
        <button
          className={`highscore-button start-button button-${props.currentTheme.name}`}
          onClick={() => window.location.reload()}
          type="button"
        >
          RESET
        </button>
      ) : (
        <button
          className={`highscore-button start-button button-${props.currentTheme.name}`}
          onClick={props.submitHighScore}
          type="button"
        >
          SUBMIT
        </button>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { currentTheme: state.currentTheme };
};

export default connect(mapStateToProps)(InitialsForm);
