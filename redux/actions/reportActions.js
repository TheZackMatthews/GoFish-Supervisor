/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_ALL_SURVEYS } from './actionTypes';

// const urlFetchAll = 'https://gofish-api.herokuapp.com/getAllSurveys';
const urlFetchAll = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
export const fetchAllSurveys = () => (dispatch) => {
  console.log('fetching all surveys');
  return axios
    .get(urlFetchAll)
    .then((res) => {
      console.log(res.data);
      return dispatch({
        type: FETCH_ALL_SURVEYS,
        payload: { name: 'allSurveys', data: res.data },
      });
    })
    .catch((err) => {
      if (err.response) {
        console.log('client received error', err);
      } else if (err.request) {
        console.log('client did not receive response or request never left', err);
      } else {
        console.log(err);
      }
    });
};
