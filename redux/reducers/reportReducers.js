/* eslint-disable import/prefer-default-export */
import { FETCH_ALL_SURVEYS } from '../actions/actionTypes';

// survey reducer

export const reportReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FETCH_ALL_SURVEYS:
      return {
        ...state,
        [payload.name]: payload.data,
      };
    default:
      return state;
  }
};
