/* eslint-disable import/no-extraneous-dependencies */
import firebase from 'firebase/app';
import FB_CONFIG from './secret';

export function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FB_CONFIG);
  }
}

export default firebase;
