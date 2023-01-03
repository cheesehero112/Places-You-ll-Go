import React from 'react';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.value);
  };
  return (
    <form
      className='login-form'
      onSubmit={handleSubmit}
    >
      <label>Username: </label>
      <input
        type='text'
        placeholder='username'
      ></input>
      <label>Password: </label>
      <input
        type='text'
        placeholder='password'
      ></input>
    </form>
  );
};

export default Login;
