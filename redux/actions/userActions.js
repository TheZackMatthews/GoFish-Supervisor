import firebase from 'firebase/app';
import { firebaseClient } from '../../auth/firebaseClient';
import 'firebase/auth';
import {
  GET_USER,
  LOG_IN,
  LOG_OUT,
  ERROR,
} from './actionTypes';

export const getUser = () => (dispatch) => {
  firebaseClient();
  const { currentUser } = firebase.auth();
  return dispatch({
    type: GET_USER,
    payload: currentUser,
  });
};

export const logOut = () => async (dispatch) => {
  firebaseClient();
  try {
    await firebase.auth().signOut();
    return dispatch({
      type: LOG_OUT,
      payload: null,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const logIn = (email, password) => async (dispatch) => {
  firebaseClient();
  try {
    const result = await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
      .catch((error) => error);
    return dispatch({
      type: LOG_IN,
      payload: {
        email: result.user.email,
        uid: result.user.uid,
        displayName: result.user.displayName,
      },
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
