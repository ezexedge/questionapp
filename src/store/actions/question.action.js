import uuid from 'react-native-uuid';

import { REALTIME_DATABASE_URL } from '../../constants/firebase';
import { questionTypes } from '../types';

const { CREATE_QUESTION, GET_QUESTION, QUESTION_ERROR, GET_QUESTION_SUCCESS, DELETE_QUESTION } =
  questionTypes;

export const createQuestion = (userId, question) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${REALTIME_DATABASE_URL}/question.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          id: uuid.v4(),
          userId,
          question,
          saved: false,
        }),
      });

      const result = await response.json();
      console.log('eeeeee', result);
      dispatch({
        type: CREATE_QUESTION,
        result,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_ERROR,
        error,
      });
    }
  };
};

export const deleteQuestion = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${REALTIME_DATABASE_URL}/question/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      dispatch({
        type: DELETE_QUESTION,
        id,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_ERROR,
        error,
      });
    }
  };
};

export const getQuestionByUser = (userId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_QUESTION,
      });
      const response = await fetch(`${REALTIME_DATABASE_URL}/question.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      const result1 = Object.keys(result).map((key) => ({
        ...result[key],
      }));
      const question = result1.filter((val) => val.userId === userId);

      dispatch({
        type: GET_QUESTION_SUCCESS,
        question,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_ERROR,
        error,
      });
    }
  };
};

export const getQuestion = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_QUESTION,
      });
      const response = await fetch(`${REALTIME_DATABASE_URL}/question.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      const result1 = Object.keys(result).map((key) => ({
        ...result[key],
      }));

      console.log('DEeded', result1);
      dispatch({
        type: GET_QUESTION_SUCCESS,
        question: result1.reverse(),
      });
    } catch (error) {
      dispatch({
        type: QUESTION_ERROR,
        error,
      });
    }
  };
};
