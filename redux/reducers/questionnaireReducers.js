/* eslint-disable import/prefer-default-export */
import { CREATE_QUESTIONNAIRE } from '../actions/actionTypes';

// questionnaire reducer
export const questionnaireReducer = (state = '', { type, payload }) => {
  switch (type) {
    case CREATE_QUESTIONNAIRE:
      return payload;
    default:
      return state;
  }
};
