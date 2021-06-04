/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_PHOTOS } from './actionTypes';

const urlGetPhotos = 'https://gofish-api.herokuapp.com/allPhotos';

export const getPhotos = () => (dispatch) => axios
  .get(urlGetPhotos)
  .then((res) => dispatch({
    type: GET_PHOTOS,
    payload: res.data,
  }))
  .catch((err) => {
    if (err.response) {
      console.log('client received error', err);
    } else if (err.request) {
      console.log('client did not receive response or request never left', err);
    } else {
      console.log(err);
    }
  });

// export const getUsers = () => dispatch => {
//   return axios.get(urlUser)
//     .then((res) => {
//       console.log(res);
//     })

// }
