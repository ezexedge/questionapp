import uuid from 'react-native-uuid';

import { REALTIME_DATABASE_URL } from '../../constants/firebase';
import { questionTypes } from '../types';

const {
  CREATE_QUESTION,
  CREATE_COMMENTS,
  GET_QUESTION,
  QUESTION_ERROR,
  GET_QUESTION_SUCCESS,
  DELETE_QUESTION,
  GET_QUESTION_SINGLE,
  GET_QUESTION_SINGLE_FAILURE,
  GET_QUESTION_ARCHIVE,
  GET_QUESTION_ARCHIVE_SUCCESS,
  GET_QUESTION_SINGLE_SUCCESS,
  DELETE_ARCHIVE,
  CREATE_ARCHIVE_QUESTION,
  QUESTION_LIST_MY_REQUEST,
  QUESTION_LIST_MY_SUCCESS,
  QUESTION_LIST_MY_FAIL,
  QUESTION_SINGLE_MY_REQUEST,
  QUESTION_SINGLE_MY_SUCCESS,
  QUESTION_SINGLE_MY_FAIL,
} = questionTypes;

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
          comments: [],
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

export const createComments = (post, id, comment, firstname, lastname) => {
  return async (dispatch) => {
    try {
      const firstName = firstname;
      const lastName = lastname;

      console.log('ssss///////post', post);
      const commentPost = !post.comments ? (post.comments = []) : post.comments;
      const commentObj = {
        userId: post.userId,
        firstName,
        lastName,
        comment,
        date: new Date(),
        id: uuid.v4(),
      };
      commentPost.unshift(commentObj);
      console.log('comen', commentPost);
      const response = await fetch(`${REALTIME_DATABASE_URL}/question/${id}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: post.date,
          id: post.id,
          question: post.question,
          saved: post.saved,
          userId: post.userId,
          comments: commentPost,
        }),
      });

      const result = await response.json();
      console.log('eeeeee', result);
      dispatch({
        type: CREATE_COMMENTS,
      });
    } catch (error) {
      console.log('ss', error);
      dispatch({
        type: QUESTION_ERROR,
        error,
      });
    }
  };
};

export const archivedCuestion = (post, userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${REALTIME_DATABASE_URL}/archived.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: uuid.v4(),
          data: post.date,
          idPost: post.id,
          question: post.question,
          saved: true,
          userId,
          userIdPost: post.userId,
          comments: post.comments,
        }),
      });

      const result = await response.json();
      console.log('archivdado', result);
      dispatch({
        type: CREATE_ARCHIVE_QUESTION,
      });
    } catch (error) {
      console.log('ss', error);
      dispatch({
        type: QUESTION_ERROR,
        error,
      });
    }
  };
};

export const deleteArchive = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${REALTIME_DATABASE_URL}/archived/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      dispatch({
        type: DELETE_ARCHIVE,
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

      dispatch({
        type: QUESTION_LIST_MY_REQUEST,
      });

      const response = await fetch(`${REALTIME_DATABASE_URL}/question.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('//////1');

      const result = await response.json();

      const result1 = Object.keys(result).map((key) => ({
        ...result[key],
      }));

      const resultOrder = result1.reverse();

      dispatch({
        type: GET_QUESTION_SUCCESS,
        question: resultOrder,
      });

      dispatch({
        type: QUESTION_LIST_MY_SUCCESS,
        questionList: resultOrder,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_ERROR,
        error,
      });
      dispatch({
        type: QUESTION_LIST_MY_FAIL,
        error,
      });
    }
  };
};

export const getQuestionArchiveByUser = (userId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_QUESTION_ARCHIVE,
      });

      const responseQuestion = await fetch(`${REALTIME_DATABASE_URL}/question.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const resultQuestion = await responseQuestion.json();

      const resultQuestion1 = Object.keys(resultQuestion).map((key) => ({
        ...resultQuestion[key],
        idFirebase: key,
      }));
      console.log('resul question1', resultQuestion1);

      const response = await fetch(`${REALTIME_DATABASE_URL}/archived.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      const result1 = Object.keys(result).map((key) => ({
        ...result[key],
        idFirebase: key,
      }));

      const resultOrder = result1.reverse();
      console.log('DEeded****', resultOrder);

      const resultOrderFilter = resultOrder.filter(
        (val) => val.userId === userId && val.saved === true
      );
      resultOrderFilter.forEach((val) => {
        const findComments = resultQuestion1.find((val1) => val1.id === val.idPost);
        console.log('ssjjllj', findComments);

        if (findComments) {
          console.log('ssjjj', findComments);
          val['comments'] = findComments.comments;
        }
      });
      console.log('DEeded', resultOrderFilter);
      dispatch({
        type: GET_QUESTION_ARCHIVE_SUCCESS,
        questionArchive: resultOrderFilter,
      });
    } catch (error) {
      console.log('DEeded---', error);

      dispatch({
        type: QUESTION_ERROR,
        error,
      });
    }
  };
};

export const getQuestionSingle = (id, userId) => {
  console.log('id userI66666d', id, userId);
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_QUESTION_SINGLE,
      });

      dispatch({
        type: QUESTION_SINGLE_MY_REQUEST,
      });

      const archived = await fetch(`${REALTIME_DATABASE_URL}/archived.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let isArchived = false;

      const resultArchived = await archived.json();
      console.log('result', resultArchived);
      if (resultArchived) {
        const resultArchived1 = Object.keys(resultArchived).map((key) => ({
          ...resultArchived[key],
        }));

        isArchived = resultArchived1.find((val) => val.idPost === id && val.userId === userId);
      }

      const response = await fetch(`${REALTIME_DATABASE_URL}/question.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      const result1 = Object.keys(result).map((key) => ({
        ...result[key],
        idFirebase: key,
      }));

      const findQuestion = result1.find((val) => val.id === id);
      console.log('filter result', findQuestion);

      const filterQuestion = result1.find((val) => val.id === id);
      console.log('filter question', filterQuestion);
      const users = await fetch(`${REALTIME_DATABASE_URL}/users.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resultUsers = await users.json();
      const resultUsers1 = Object.keys(resultUsers).map((key) => ({
        ...resultUsers[key],
      }));

      const autor = filterQuestion?.userId;
      console.log('autor prev', autor);
      const autorUser = resultUsers1.find((user) => user.id === autor);
      console.log('autor userr', autorUser);
      filterQuestion['firstName'] = autorUser.firstName;
      filterQuestion['lastName'] = autorUser.lastName;
      filterQuestion['comments'] = filterQuestion.comments;
      filterQuestion['archived'] = !!isArchived;
      dispatch({
        type: QUESTION_SINGLE_MY_SUCCESS,
        questionSingle: filterQuestion,
      });
    } catch (error) {
      console.log('ss', error);
      dispatch({
        type: QUESTION_SINGLE_MY_FAIL,
        error,
      });
    }
  };
};
