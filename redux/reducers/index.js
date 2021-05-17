import { combineReducers } from 'redux';
import { timerReducer, counterReducer } from './counterReducers';
import { reportReducer } from './reportReducers';

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
  reports: reportReducer,
};

export default combineReducers(reducers);
