import { combineReducers } from 'redux';
import { reportReducer } from './reportReducers';
import { questionnaireReducer } from './questionnaireReducers';

// COMBINED REDUCERS
const reducers = {
  reports: reportReducer,
  quesionnaire: questionnaireReducer,
};

export default combineReducers(reducers);
