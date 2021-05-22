/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import { firebaseClient } from '../auth/firebaseClient';
import { useAuth } from '../auth';
import 'firebase/auth';

const Logout = () => {
  firebaseClient();
  const router = useRouter();
  const [errorM, setErrorM] = useState(null);
  const { user } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signOut();
      router.push('/');
    } catch (error) {
      setErrorM(error.message);
    }
  };

  return (
    <div className="userFormContainer">
      {errorM && <p>{errorM}</p>}
      <h1>Log out</h1>
      {user && (
      <p className="center">
        You are currently logged in as
        {user.email}
        .
      </p>
      )}
      <a className="btn btn-1" onClick={submitHandler}>
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        Sign out
      </a>
    </div>
  );
};

export default Logout;
