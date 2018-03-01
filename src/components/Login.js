import React from 'react';

const Login = props => {
  return (
    <div>
      <input onChange={props.setInputValue} type="text" name="login" value={props.inputValue} />
      <button onClick={props.setCurrentUser} type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
