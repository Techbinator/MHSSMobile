import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import SignUp from '@screens/SignUp/';
import SignIn from '@screens/SignIn/';
import ResetPassword from '@screens/ResetPassword';
import Walkthrough from '@screens/Walkthrough/';
import SideBar from '@components/SideBar';
import Expenses from '@screens/Expenses/';
import NewExpense from '@screens/NewExpense/ExpenseForm';
import Categories from '@screens/Categories/';
import NewCategory from '@screens/NewCategory/CategoryForm';
import ExpensesCharts from '@screens/ExpensesCharts';
import ExpenseAgenda from '@screens/Expenses/ExpenseAgenda';
import Settings from '@screens/Settings';
import Search from '@screens/Search';
import Profile from '@screens/Profile';

const Drawer = createDrawerNavigator(
  {
    Expenses: { screen: Expenses },
    Categories: { screen: Categories },
    ExpensesCharts: { screen: ExpensesCharts },
    ExpenseAgenda: { screen: ExpenseAgenda },
    Search: { screen: Search },
    Settings: { screen: Settings },
    Profile: { screen: Profile },
    SignIn: { screen: SignIn },
  },
  {
    initialRouteName: 'Expenses',
    contentComponent: props => <SideBar {...props} />,
  }
);

const AppNavigation = createStackNavigator(
  {
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
    ResetPassword: { screen: ResetPassword },
    Walkthrough: { screen: Walkthrough },
    NewExpense: { screen: NewExpense },
    NewCategory: { screen: NewCategory },
    Drawer: { screen: Drawer },
  },
  {
    index: 0,
    initialRouteName: 'SignIn',
    headerMode: 'none',
  }
);

export default AppNavigation;
