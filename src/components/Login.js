import React from 'react';

const Login = props => {
  return (
    <div className="login-panel">
      <h2 className="login-label">LOG IN</h2>
      {props.loggedIn ? (
        <div>
          <button onClick={props.setDefaultUser} type="button">
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <input
            className="login-input"
            onChange={props.setInputValue}
            type="text"
            name="login"
            value={props.inputValue}
            autoComplete="off"
          />
          <button onClick={props.setCurrentUser} type="button">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
