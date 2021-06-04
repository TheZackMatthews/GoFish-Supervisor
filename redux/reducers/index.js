import { combineReducers } from 'redux';
import { reportReducer } from './reportReducers';
import { questionnaireReducer } from './questionnaireReducers';
import { photoReducer } from './photoReducers';

// COMBINED REDUCERS
const reducers = {
  reports: reportReducer,
  quesionnaire: questionnaireReducer,
  photos: photoReducer,
};

export default combineReducers(reducers);
