import api from '@utils/api';

export const RESET_PASSWORD_STARTED = 'RESET_PASSWORD_STARTED';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

const initialState = {
  resetPasswordStarted: false,
  resetPasswordSuccess: true,
  resetPasswordError: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD_STARTED: {
      return {
        ...state,
        resetPasswordStarted: true,
        resetPasswordSuccess: false,
        resetPasswordError: false,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordStarted: false,
        resetPasswordSuccess: true,
        resetPasswordError: false,
      };
    }
    case RESET_PASSWORD_ERROR: {
      return {
        ...state,
        resetPasswordStarted: false,
        resetPasswordSuccess: false,
        resetPasswordError: true,
      };
    }
    default:
      return state;
  }
}

/**
 * Action creators
 */
export function resetPassword(email, onSuccess, onError) {
  return dispatch => {
    dispatch({ type: RESET_PASSWORD_STARTED });
    return api
      .get('/password', { email: email })
      .then(response => {
        onSuccess();
        dispatch({ type: RESET_PASSWORD_SUCCESS, response: response.data });
      })
      .catch(() => {
        onError();
        dispatch({ type: RESET_PASSWORD_ERROR });
      });
  };
}
