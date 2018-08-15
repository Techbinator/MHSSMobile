import React from 'react';
import renderer from 'react-test-renderer';
import { Button, ListItem } from 'native-base';
import mockStore from 'redux-mock-store';
import getElementWithContext from 'react-test-context-provider';

import Sidebar from '../index';

it('renders correctly', () => {
  const tree = renderer.create(<Sidebar />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('navigates to the sub routes', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
  };
  const testRenderer = renderer.create(<Sidebar {...props} />);
  const instance = testRenderer.root;
  const listItems = instance.findAllByType(ListItem);

  listItems.forEach(item => item.props.onPress());

  expect(props.navigation.navigate.mock.calls).toEqual([
    ['Expenses'],
    ['Categories'],
    ['ExpensesCharts'],
    ['ExpenseAgenda'],
    ['Search'],
    ['Profile'],
    ['Settings'],
    ['SignIn'],
  ]);
});
