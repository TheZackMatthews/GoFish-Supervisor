import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { firebaseClient } from '../auth/firebaseClient';
import firebase from 'firebase/app';
import 'firebase/auth';
import TextField from '@material-ui/core/TextField';

const Login = () => {
  firebaseClient();
  const router = useRouter ();

  const [login, setLogin] = useState(initialState);
  const [errorM, setErrorM] = useState(null);

  const changeHandler = (e) => {
    const { target: { name, value }} = e;
    setLogin({ ...login, [name]: value })
  }

  const signInHandler = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
      router.push('/');
    } catch (error) {
      setErrorM(error.message)
    }
  }
  console.log(login)
  return (
    <div>
      {errorM && <p>{errorM}</p>}
      <h1>Log in:</h1>
      <form required onSubmit={signInHandler}>
        <TextField
          label="Email"
          name="email"
          onChange={changeHandler} />
        <TextField
          type="password"
          name="password"
          label="Password"
          onChange={changeHandler} />
          <button type="submit">
            Log in
          </button>
      </form>
      <div>No account? <Link href="/signup"><a>Sign up here.</a></Link></div>
    </div>
  )
}

const initialState = {
  email: '',
  password: '',
}

export default Login
