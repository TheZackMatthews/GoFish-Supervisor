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
  
  return (
    <div className="userFormContainer">
      {errorM && <p>{errorM}</p>}
      <h1>Log in</h1>
      <form required onSubmit={signInHandler}>
        <TextField
          className="userForm"
          label="Email"
          name="email"
          onChange={changeHandler} />
        <TextField
          className="userForm"
          type="password"
          name="password"
          label="Password"
          onChange={changeHandler} />
        <a class="btn btn-1" onClick={signInHandler}>
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
          </svg>
            Log in
        </a>
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
