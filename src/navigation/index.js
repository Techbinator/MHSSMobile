import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import SignUp from '@screens/SignUp/';
import Login from '@screens/Login/';
import ResetPassword from '@screens/ResetPassword';
import Walkthrough from '@screens/Walkthrough/';
import Sidebar from '@screens/Sidebar';
import Expenses from '@screens/Expenses/';
import NewExpense from '@screens/NewExpense/';
import Categories from '@screens/Categories/';
import NewCategory from '@screens/NewCategory/';
import ExpensesCharts from '@screens/ExpensesCharts';
import Calendar from '@screens/Expenses/ExpenseCalendar';
import Settings from '@screens/Settings';
import Search from '@screens/Search';
import Profile from '@screens/Profile';

const Drawer = createDrawerNavigator(
  {
    Expenses: { screen: Expenses },
    Categories: { screen: Categories },
    ExpensesCharts: { screen: ExpensesCharts },
    Calendar: { screen: Calendar },
    Search: { screen: Search },
    Settings: { screen: Settings },
    Profile: { screen: Profile },
  },
  {
    initialRouteName: 'Expenses',
    contentComponent: props => <Sidebar {...props} />,
  }
);

const RootNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    ResetPassword: { screen: ResetPassword },
    Walkthrough: { screen: Walkthrough },
    Expenses: { screen: Expenses },
    NewExpense: { screen: NewExpense },
    Categories: { screen: Categories },
    NewCategory: { screen: NewCategory },
    ExpensesCharts: { screen: ExpensesCharts },

    Search: { screen: Search },
    Settings: { screen: Settings },
    Profile: { screen: Profile },
    Drawer: { screen: Drawer },
  },
  {
    index: 0,
    initialRouteName: 'ExpensesCharts',
    headerMode: 'none',
  }
);

export default RootNavigation;
