import React from 'react';
import ThemeSelector from './ThemeSelector';

const Login = props => {
  return (
    <div className="login-panel">
      {props.loggedIn ? (
        <div>
          <h2>Log In</h2>
          <button onClick={props.setDefaultUser} type="button">
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <h2>Log In</h2>
          <input onChange={props.setInputValue} type="text" name="login" value={props.inputValue} />
          <button onClick={props.setCurrentUser} type="button">
            Login
          </button>
          <ThemeSelector setTheme={props.setTheme} />
        </div>
      )}
    </div>
  );
};

export default Login;
