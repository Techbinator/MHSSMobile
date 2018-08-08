import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from '../screens/Login/behaviors';
import resetPassword from '../screens/ResetPassword/behaviors';
import signup from '../screens/SignUp/behaviors';
import categories from '../screens/Categories/behaviors';
import expenses from '../screens/Expenses/behaviors';
import newExpense from '../screens/NewExpense/behaviors';
import newCategory from '../screens/NewCategory/behaviors';
import charts from '../screens/ExpensesCharts/behaviors';
import search from '@screens/Search/behaviors';

export default combineReducers({
  form: formReducer,
  login,
  resetPassword,
  signup,
  categories,
  newCategory,
  expenses,
  newExpense,
  charts,
  search,
});
