import api from '@utils/api';

export const CATEGORY_ADD_STARTED = 'CATEGORY_ADD_STARTED';
export const CATEGORY_ADD_SUCCESS = 'CATEGORY_ADD_SUCCESS';
export const CATEGORY_ADD_ERROR = 'CATEGORY_ADD_ERROR';

const initialState = {
  categoryAdding: true,
  categoryAdded: false,
  categoryError: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_ADD_STARTED: {
      return {
        ...state,
        categoryAdding: true,
        categoryAdded: false,
        categoryError: false,
      };
    }
    case CATEGORY_ADD_SUCCESS: {
      return {
        ...state,
        categoryAdding: false,
        categoryAdded: true,
        categoryError: false,
      };
    }
    case CATEGORY_ADD_ERROR: {
      return {
        ...state,
        categoryAdding: false,
        categoryAdded: false,
        categoryError: true,
      };
    }
    default:
      return state;
  }
}

/**
 * Action creators
 */
export function addCategory(values) {
  const data = {
    name: values.name,
    iconName: values.iconName,
    percent: 0,
    amount: 0,
  };
  return dispatch => {
    dispatch({ type: CATEGORY_ADD_STARTED });
    return api
      .post('/categories', data)
      .then(response => {
        dispatch({ type: CATEGORY_ADD_SUCCESS, response: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: CATEGORY_ADD_ERROR });
      });
  };
}
