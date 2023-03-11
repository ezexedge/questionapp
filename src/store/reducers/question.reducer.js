import { questionTypes } from '../types';

const {
  GET_QUESTION,
  GET_QUESTION_SUCCESS,
  CREATE_QUESTION,
  DELETE_QUESTION,
  GET_QUESTION_FAILURE,
} = questionTypes;

const initialState = {
  result: null,
  loading: false,
  question: null,
  error: null,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_QUESTION:
      return {
        ...state,
        result: action.result,
      };
    case GET_QUESTION:
      return {
        ...state,
        loading: true,
      };
    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        question: action.question,
      };
    case GET_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        question: null,
        error: action.error,
      };
    default:
      return state;
  }
};
export default questionReducer;
