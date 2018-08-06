import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';

import { Text, View, List, ListItem, Button, Icon, Spinner } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import { formatAmount } from '../../utils/formatters';
import categoryColors from '../../theme/categoryColors';
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
        {expensesLoading && (
          <Spinner style={{ paddingTop: 40 }} color="#FF3366" />
        )}
        {this.ds.cloneWithRows(expensesList).getRowCount() === 0 ? (
          <View>
            <ListItem style={{ justifyContent: 'center' }}>
              <Text style={styles.emptyMsg}>No expenses loaded</Text>
            </ListItem>
          </View>
        ) : (
          !expensesLoading && (
            <View>
              <List
                dataSource={this.ds.cloneWithRows(expensesList)}
                renderRow={(data, sectionId, index, higlightRow) => (
                  <ListItem
                    swipeList
                    style={styles.expenseOuter}
                    borderColor={categoryColors[index % categoryColors.length]}
                    onPress={() => navigation.navigate('expenseDetail')}>
                    <View style={styles.expenseContent}>
                      <Grid>
                        <Col size={1}>
                          <Icon
                            name={data.categoryIcon}
                            style={styles.expenseIcon}
                          />
                        </Col>
                        <Col size={7}>
                          <Text numberOfLines={2} style={styles.expenseTitle}>
                            {data.title}
                          </Text>
                          <Text
                            numberOfLines={2}
                            style={styles.expenseSubtitle}>
                            {data.type}
                          </Text>
                        </Col>
                        <Col size={3}>
                          <Text
                            numberOfLines={2}
                            style={
                              data.amount < 0
                                ? styles.expenseAmount
                                : styles.incomeAmount
                            }>
                            {formatAmount(data.amount)}
                          </Text>
                        </Col>
                      </Grid>
                    </View>
                  </ListItem>
                )}
                renderRightHiddenRow={(data, secId, rowId, rowMap) => (
                  <Button
                    full
                    danger
                    onPress={_ => this.deleteRow(data.id, secId, rowId, rowMap)}
                    style={styles.swipeBtn}>
                    <Icon active name="trash" style={{ fontSize: 35 }} />
                  </Button>
                )}
                rightOpenValue={-100}
              />
            </View>
          )
        )}
      </View>
    );
  }
}

export default ExpensesList;
