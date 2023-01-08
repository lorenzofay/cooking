import { AnyAction } from 'redux';
import { LOG_IN } from '@actions/actionTypes';
import { SessionState } from '@store/types';

const updateState = (state: SessionState, props: Partial<SessionState>): SessionState => ({ ...state, ...props });

const initialState: SessionState = {
  isLoggedIn: false,
  user: null,
};

const sessionReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOG_IN:
      return updateState(state, {
        isLoggedIn: true,
        user: action.user,
      });
    default:
      return state;
  }
};
export default sessionReducer;
