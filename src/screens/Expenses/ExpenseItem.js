import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, View, Grid, Col, Text, Icon } from 'native-base';

import { formatAmount } from '@utils/formatters';
import styles from './styles';

const ExpenseItem = ({ item, style, navigation, color }) => {
  return (
    <ListItem
      swipeList
      style={[styles.item.container, style]}
      borderColor={color ? color : item.color}
      onPress={() => navigation.navigate('expenseDetail')}>
      <View style={styles.item.content}>
        <Grid>
          <Col size={1}>
            <Icon name={item.categoryIcon} style={styles.item.icon} />
          </Col>
          <Col size={7}>
            <Text numberOfLines={2} style={styles.item.itle}>
              {item.title}
            </Text>
            <Text numberOfLines={2} style={styles.item.subtitle}>
              {item.type}
            </Text>
          </Col>
          <Col size={3}>
            <Text
              numberOfLines={2}
              style={
                item.amount < 0
                  ? styles.item.expenseAmount
                  : styles.item.incomeAmount
              }>
              {formatAmount(item.amount)}
            </Text>
          </Col>
        </Grid>
      </View>
    </ListItem>
  );
};

ExpenseItem.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
  item: PropTypes.object.isRequired,
  style: PropTypes.object,
};

export default ExpenseItem;
