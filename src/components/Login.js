import React from 'react';

const Login = props => {
  return (
    <div>
      {props.loggedIn ? (
        <div>
          <button onClick={props.setDefaultUser} type="button">
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <input onChange={props.setInputValue} type="text" name="login" value={props.inputValue} />
          <button onClick={props.setCurrentUser} type="button">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
