import uuid from 'react-native-uuid';

import {
  URL_AUTH_SIGN_IN,
  URL_AUTH_SIGN_UP,
  REALTIME_DATABASE_URL,
} from '../../constants/firebase';
import { authTypes } from '../types';

const { SIGN_UP, SIGN_IN } = authTypes;

export const signUp = (email, password, firstName, lastName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const user = await fetch(`${REALTIME_DATABASE_URL}/users.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: uuid.v4(),
          email,
          firstName,
          lastName,
        }),
      });

      if (!user.ok) {
        throw new Error('Something went wrong!');
      }

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      if (data) {
        const email = data?.email;
        console.log('eeeeedata', data);

        const response1 = await fetch(`${REALTIME_DATABASE_URL}/users.json`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response1.json();

        const orders = Object.keys(result).map((key) => ({
          ...result[key],
        }));
        const findUser = orders.filter((val) => val?.email === email);
        console.log('acaaa order', findUser);

        dispatch({
          type: SIGN_IN,
          token: data.idToken,
          userId: data.localId,
          id: findUser[0].id,
          firstName: findUser[0].firstName,
          lastName: findUser[0].lastName,
        });
      }
    } catch (error) {
      throw error;
    }
  };
};
