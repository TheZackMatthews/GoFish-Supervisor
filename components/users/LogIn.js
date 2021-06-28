import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core/';
import { logIn } from '../../redux/actions/userActions';

const initialState = {
  email: '',
  password: '',
};

const LogIn = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(initialState);
  const [errorM, setErrorM] = useState(null);

  const changeHandler = (e) => {
    const { target: { name, value } } = e;
    setLogin({ ...login, [name]: value });
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    try {
      const result = await dispatch(logIn(email, password));
      if (result.type === 'ERROR') {
        throw new Error(result.payload);
      }
    } catch (error) {
      setErrorM(error.message);
    }
  };

  return (
    <div
      className="userFormContainer"
      style={{
        textAlign: 'center',
      }}
    >
      {errorM && <p>{errorM}</p>}
      <h1>Log in</h1>
      <form required onSubmit={signInHandler}>
        <TextField
          className="userForm"
          label="Email"
          name="email"
          onChange={changeHandler}
        />
        <TextField
          className="userForm"
          type="password"
          name="password"
          label="Password"
          onChange={changeHandler}
        />
        <div style={{
          display: 'flex',
          margin: '10px',
          justifyContent: 'center',
        }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={signInHandler}
          >
            Log In
          </Button>
        </div>
      </form>
      <div>
        {'No account? '}
        <Link href="/signup">Sign up here.</Link>
      </div>
    </div>
  );
};

export default LogIn;
