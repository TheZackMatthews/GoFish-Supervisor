import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';
import { logOut } from '../redux/actions/userActions';

const Logout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [errorM, setErrorM] = useState(null);
  const user = useSelector((state) => state.user);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(logOut());
      console.log(result);
      if (result.type === 'ERROR') throw new Error('Could not log out');
      router.push('/');
    } catch (error) {
      setErrorM(error.message);
    }
  };

  return (
    <div className="userFormContainer">
      {errorM && <p>{errorM}</p>}
      <h1 style={{ textAlign: 'center', marginBottom: '15px' }}>Log out</h1>
      {user && (
      <p className="center">
        You are currently logged in as
        {` ${user.email}.`}
      </p>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '15px',
          alignContent: 'center',
        }}
      >
        <Button
          onClick={submitHandler}
          variant="contained"
          color="primary"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Logout;
