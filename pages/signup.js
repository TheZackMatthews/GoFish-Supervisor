import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { firebaseClient } from '../auth/firebaseClient';
import firebase from 'firebase/app';
import 'firebase/auth';
import TextField from '@material-ui/core/TextField'
import Login from './login';

const Signup = () => {
  firebaseClient();
  const router = useRouter();
  const [signup, setSignup] = useState(initialState);
  const [errorM, setErrorM] = useState(null);

  const changeHandler = (e) => {
    const { target: { name, value }} = e;
    setSignup({ ...signup, [name]: value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (signup.password !== signup.confirmPassword) return;
    const { email, password, name } = signup;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(data => {
        // SEND TO DATABASE
        router.push('/')
      })
      .catch(error => {
        setErrorM(error.message);
      })
  }
  console.log(signup)

  return (
    <div>
      {errorM && <p>{errorM}</p>}
      <form required onSubmit={submitHandler}>
        <TextField
          label="Full Name"
          name="name"
          autoComplete="false"
          onChange={changeHandler} />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="false"
          onChange={changeHandler} />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          onChange={changeHandler} />
        <TextField
          autoComplete="new-password"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={changeHandler} />
        <button type="submit">
          Create an account
        </button>
      </form>
    </div>
  )
}

const initialState = {
  email: '',
  password: '',
  name: '',
  confirmPassword: '',
};

export default Signup
