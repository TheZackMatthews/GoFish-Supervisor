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
    setErrorM('');
    const { target: { name, value }} = e;
    setSignup({ ...signup, [name]: value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (signup.password !== signup.confirmPassword) {
      setErrorM('Passwords do not match.')
      return;
    }
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

  return (
    <div className="userFormContainer">
      {errorM && <p>{errorM}</p>}
      <h1>Create account</h1>
      <form required onSubmit={submitHandler}>
        <TextField
          className="userForm"
          label="Full Name"
          name="name"
          autoComplete="false"
          onChange={changeHandler} />
        <TextField
          className="userForm"
          label="Email"
          name="email"
          type="email"
          autoComplete="false"
          onChange={changeHandler} />
        <TextField
          className="userForm"
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          onChange={changeHandler} />
        <TextField
          className="userForm"
          autoComplete="new-password"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={changeHandler} />
        <button type="submit" class="btn btn-1" onClick={submitHandler}>
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
          </svg>
          Create Account
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
