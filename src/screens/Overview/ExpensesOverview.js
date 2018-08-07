import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Content } from 'native-base';
import ExpenseProgress from './ExpenseProgress';
class ExpensesOverview extends Component {
  render() {
    const { categories } = this.props;
    return (
      <Content
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#fff' }}>
        <FlatList
          data={categories}
          renderItem={({ ...props }) => <ExpenseProgress {...props} />}
          keyExtractor={expense => expense.id}
        />
      </Content>
    );
  }
}

export default ExpensesOverview;
