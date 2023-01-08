import { Dispatch } from 'redux';
import { LOG_IN } from './actionTypes';

export function logIn(username: string, password: string) {
  return async (dispatch: Dispatch) => {
    try {
      const user = { name: username, email: 'mateofay2099@gmail.com', password }; // API Call
      await dispatch({
        type: LOG_IN,
        user,
      });
    } catch (error) {
      console.error(error); // Handle error
    }
  };
}
