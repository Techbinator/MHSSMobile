import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { Text, View, Button, Icon, Spinner, SwipeRow } from 'native-base';

import ExpenseItem from './ExpenseItem';
import categoryColors from '@theme/categoryColors';
import theme from '@theme/variables/mmoney';

import styles from './styles';

class ExpensesList extends Component {
  static propTypes = {
    navigation: PropTypes.any,
    expensesList: PropTypes.array,
    handleDelete: PropTypes.func,
    expensesLoading: PropTypes.bool,
  };

  static defaultProps = {
    expensesList: [],
    expensesLoading: true,
  };

  deleteItem(itemId) {
    this.props.handleDelete(itemId);
  }

  render() {
    const { navigation, expensesList, expensesLoading } = this.props;

    return (
      <View
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#F4F4F4' }}>
        <View>
          {expensesLoading && <Spinner color={theme.brandPrimary} />}
          {!expensesLoading &&
            expensesList.length === 0 && (
              <Text style={styles.emptyMsg}>No expenses loaded</Text>
            )}
        </View>
        <View>
          <FlatList
            horizontal={false}
            data={expensesList}
            initialNumToRender={5}
            renderItem={({ item, index }) => (
              <SwipeRow
                rightOpenValue={-85}
                disableRightSwipe={true}
                style={styles.item.container}
                body={
                  <ExpenseItem
                    item={item}
                    color={categoryColors[index % categoryColors.length]}
                    navigation={navigation}
                  />
                }
                right={
                  <Button
                    primary
                    style={styles.swipeBtn}
                    onPress={() => this.deleteItem(item.id)}>
                    <Icon active name="trash" style={{ fontSize: 35 }} />
                  </Button>
                }
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

export default ExpensesList;
