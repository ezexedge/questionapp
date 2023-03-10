import { questionTypes } from '../types';

const { GET_QUESTION, GET_QUESTION_SUCCESS, CREATE_QUESTION, DELETE_QUESTION } = questionTypes;

const initialState = {
  result: null,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_QUESTION:
      return {
        ...state,
        result: action.result,
      };

    default:
      return state;
  }
};
export default questionReducer;
