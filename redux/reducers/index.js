import { combineReducers } from 'redux';
import { reportReducer } from './reportReducers';

// COMBINED REDUCERS
const reducers = {
  reports: reportReducer,
};

export default combineReducers(reducers);
