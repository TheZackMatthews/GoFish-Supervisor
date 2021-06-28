import {
  GET_USER,
  LOG_IN,
  LOG_OUT,
  ERROR,
} from '../actions/actionTypes';

const userReducer = (state = '', { type, payload }) => {
  switch (type) {
    case GET_USER:
      return payload;
    case LOG_IN:
      return payload;
    case LOG_OUT:
      return null;
    case ERROR:
      return state;
    default:
      return state;
  }
};

export default userReducer;
