import api from '@utils/api';

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const initialState = {
  loginStarted: false,
  loggedSuccess: true,
  loginError: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_STARTED: {
      return {
        ...state,
        loginStarted: true,
        loggedSuccess: false,
        loginError: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        profile: action.response,
        loginStarted: false,
        loggedSuccess: true,
        loginError: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loginStarted: false,
        loggedSuccess: false,
        loginError: true,
      };
    }
    default:
      return state;
  }
}

/**
 * Action creators
 */
export function doLogin(username, password, onLoginSuccess, onLoginError) {
  return dispatch => {
    dispatch({ type: LOGIN_STARTED });
    return api
      .get('/auth', { username: username, password: password })
      .then(response => {
        onLoginSuccess();
        dispatch({ type: LOGIN_SUCCESS, response: response.data });
      })
      .catch(err => {
        console.log(err);
        onLoginError();
        dispatch({ type: LOGIN_ERROR });
      });
  };
}
