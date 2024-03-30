import { questionTypes } from '../types';

const {
  GET_QUESTION,
  GET_QUESTION_ARCHIVE,
  GET_QUESTION_ARCHIVE_SUCCESS,
  GET_QUESTION_SUCCESS,
  CREATE_QUESTION,
  DELETE_QUESTION,
  DELETE_ARCHIVE,
  GET_QUESTION_FAILURE,
  GET_QUESTION_SINGLE,
  GET_QUESTION_SINGLE_FAILURE,
  GET_QUESTION_SINGLE_SUCCESS,
  CREATE_ARCHIVE_QUESTION,
  CREATE_COMMENTS,
  QUESTION_LIST_MY_REQUEST,
  QUESTION_LIST_MY_SUCCESS,
  QUESTION_LIST_MY_ERROR,
  QUESTION_SINGLE_MY_REQUEST,
  QUESTION_SINGLE_MY_SUCCESS,
  QUESTION_SINGLE_MY_FAIL,
} = questionTypes;

const initialState = {
  result: null,
  loading: false,
  question: null,
  questionSingle: null,
  questionArchive: null,
  error: null,
  questionList: null,
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_QUESTION:
      return {
        ...state,
        result: action.result,
      };
    case CREATE_COMMENTS:
      return {
        ...state,
      };
    case DELETE_ARCHIVE:
      return {
        ...state,
      };
    case CREATE_ARCHIVE_QUESTION:
      return {
        ...state,
      };
    case GET_QUESTION:
      return {
        ...state,
        loading: true,
      };
    case GET_QUESTION_ARCHIVE:
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
    case GET_QUESTION_ARCHIVE_SUCCESS:
      return {
        ...state,
        loading: false,
        questionArchive: action.questionArchive,
      };
    case GET_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        question: null,
        error: action.error,
      };
    case GET_QUESTION_SINGLE:
      return {
        ...state,
        loading: true,
      };
    case GET_QUESTION_SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        questionSingle: action.questionSingle,
      };
    case GET_QUESTION_SINGLE_FAILURE:
      return {
        ...state,
        loading: false,
        questionSingle: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export const questionListReducer = (state = { questionList: [] }, action) => {
  switch (action.type) {
    case QUESTION_LIST_MY_REQUEST:
      return { loading: action.loading !== undefined ? action.loading : true, questionList: [] };
    case QUESTION_LIST_MY_SUCCESS:
      return { loading: false, questionList: action.questionList };
    case QUESTION_LIST_MY_ERROR:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};

export const questionSingleReducer = (state = { questionSingle: null, loading: true }, action) => {
  switch (action.type) {
    case QUESTION_SINGLE_MY_REQUEST:
      return { loading: true, questionSingle: null };
    case QUESTION_SINGLE_MY_SUCCESS:
      return { loading: false, questionSingle: action.questionSingle };
    case QUESTION_SINGLE_MY_FAIL:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};
