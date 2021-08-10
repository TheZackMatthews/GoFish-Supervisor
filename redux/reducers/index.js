import { combineReducers } from 'redux';
import { reportReducer } from './reportReducers';
import { questionnaireReducer } from './questionnaireReducers';
import { photoReducer } from './photoReducers';
import userReducer from './userReducers';

// COMBINED REDUCERS
const reducers = {
  reports: reportReducer,
  quesionnaire: questionnaireReducer,
  photos: photoReducer,
  user: userReducer,
};

export default combineReducers(reducers);
