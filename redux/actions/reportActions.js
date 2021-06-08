/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_ALL_SURVEYS, GET_DAILY_REPORTS } from './actionTypes';

const urlFetchAll = 'https://gofish-api.herokuapp.com/getAllSurveys';
// const urlUser = 'http://localhost:3001/user';
// const urlFetchAll = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
const getDaily = 'https://gofish-api.herokuapp.com/getAllVolunteers';

export const fetchAllSurveys = () => (dispatch) => axios
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

export const getAllDaily = () => (dispatch) => axios.get(getDaily)
  .then((res) => dispatch({
    type: GET_DAILY_REPORTS,
    payload: {
      name: 'dailyReports',
      data: res.data,
    },
  }))
  .catch((err) => dispatch(err.message));
