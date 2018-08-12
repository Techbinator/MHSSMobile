import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';

import { Text, View, List, ListItem, Button, Icon, Spinner } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import ExpenseItem from './ExpenseItem';
import { formatAmount } from '@utils/formatters';
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

  constructor() {
    super();
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  deleteRow(dataId, secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    this.props.handleDelete(dataId);
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
            expensesList.lenght === 0 && (
              <Text style={styles.emptyMsg}>No expenses loaded</Text>
            )}
        </View>
        <View>
          <List
            dataSource={this.ds.cloneWithRows(expensesList)}
            renderRow={(data, sectionId, index) => (
              <ExpenseItem
                item={data}
                color={categoryColors[index % categoryColors.length]}
                navigation={navigation}
              />
            )}
            renderRightHiddenRow={(data, secId, rowId, rowMap) => (
              <Button
                primary
                onPress={() => this.deleteRow(data.id, secId, rowId, rowMap)}
                style={styles.swipeBtn}>
                <Icon active name="trash" style={{ fontSize: 35 }} />
              </Button>
            )}
            rightOpenValue={-100}
          />
        </View>
      </View>
    );
  }
}

export default ExpensesList;
