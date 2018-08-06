import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Content } from 'native-base';
import ExpenseProgress from './ExpenseProgress';
class ExpensesOverview extends Component {
  render() {
    const { navigation, categories } = this.props;
    return (
      <Container>
        <Content
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: '#fff' }}>
          <FlatList
            data={categories}
            renderItem={({ ...props }) => <ExpenseProgress {...props} />}
            keyExtractor={expense => expense.id}
          />
        </Content>
      </Container>
    );
  }
}

export default ExpensesOverview;
