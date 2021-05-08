import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { firebaseClient } from '../auth/firebaseClient';
import firebase from 'firebase/app';
import 'firebase/auth';
import TextField from '@material-ui/core/TextField'

const Logout = () => {
  firebaseClient();
  const router = useRouter();
  const [errorM, setErrorM] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signOut();
      router.push('/')
    } catch (error) {
      setErrorM(error.message);
    }
  }

  return (
    <div>
      {errorM && <p>{errorM}</p>}
      <button type="button" onClick={submitHandler}>
        Sign out
      </button>
    </div>
  )
}

export default Logout;

