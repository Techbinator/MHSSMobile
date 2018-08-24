import React from 'react';
import PropTypes from 'prop-types';

import { TouchableHighlight } from 'react-native';
import {
  Body,
  Text,
  Icon,
  Right,
  View,
  Card,
  CardItem,
  Grid,
  Col,
} from 'native-base';
import { formatAmount } from '@utils/formatters';

import style from './styles';

class ExpenseLine extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      amount: PropTypes.number,
      label: PropTypes.string,
      date: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
  };

  state = {
    opened: false,
  };

  toggleOpenStatus = () => {
    this.setState(state => ({
      opened: !state.opened,
    }));
  };

  render() {
    const {
      item: { ...expense },
      index,
    } = this.props;

    const toggleIconName = this.state.opened
      ? 'ios-arrow-up'
      : 'ios-arrow-down';
    const innerStyle = index % 2 === 0 ? {} : style.expense.odd;

    return (
      <Card transparent style={style.expense.container}>
        <CardItem style={innerStyle}>
          <Body>
            <Text style={style.expense.title}>{expense.title}</Text>
          </Body>
          <Right>
            <View style={{ flexDirection: 'row' }}>
              <Text style={style.expense.amount}>
                {formatAmount(expense.amount)}
              </Text>
              <TouchableHighlight
                onPress={this.toggleOpenStatus}
                underlayColor="transparent">
                <Icon name={toggleIconName} style={{ fontSize: 20 }} />
              </TouchableHighlight>
            </View>
          </Right>
        </CardItem>
        {this.state.opened && (
          <CardItem style={innerStyle}>
            <Body>
              <Grid>
                <Col>
                  <Text style={style.expense.detailText}>Date</Text>
                </Col>
                <Col>
                  <Text style={style.expense.detailText}>{expense.date}</Text>
                </Col>
              </Grid>
              <Grid>
                <Col>
                  <Text style={style.expense.detailText}>Type</Text>
                </Col>
                <Col>
                  <Text style={style.expense.detailText}>{expense.type}</Text>
                </Col>
              </Grid>
              <Grid>
                <Col>
                  <Text style={style.expense.detailText}>Amount</Text>
                </Col>
                <Col>
                  <Text style={style.expense.detailText}>
                    {expense.amount}$
                  </Text>
                </Col>
              </Grid>
            </Body>
          </CardItem>
        )}
      </Card>
    );
  }
}

export default ExpenseLine;
