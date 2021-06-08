/* eslint-disable import/prefer-default-export */
import { GET_PHOTOS } from '../actions/actionTypes';

// questionnaire reducer
export const photoReducer = (state = '', { type, payload }) => {
  switch (type) {
    case GET_PHOTOS:
      return (
        payload.map((photo) => ({
          ...photo,
          src: photo.image_url,
          height: +photo.height,
          width: +photo.width,
        }
        ))
      );
    default:
      return state;
  }
};
