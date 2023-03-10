import { authTypes } from '../types';

const { SIGN_UP, SIGN_IN } = authTypes;

const initialState = {
  token: null,
  userId: null,
  id: null,
  firstName: null,
  lastName: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
      };
    case SIGN_IN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
      };

    default:
      return state;
  }
};

export default authReducer;
