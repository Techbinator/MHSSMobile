import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity } from 'react-native';
import { Text, View, Grid, Col, Icon } from 'native-base';
import { toUpper } from 'lodash';
import ProgressBar from '../../components/ProgressBar';

import styles from './styles';
import { formatAmount } from '../../utils/formatters';

import categoryColors from '../../theme/categoryColors';

export class ExpenseProgress extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string,
      percent: PropTypes.number,
      amount: PropTypes.number,
    }).isRequired,
    index: PropTypes.number.isRequired,
  };

  render() {
    const {
      item: { ...catagory },
      index,
    } = this.props;

    return (
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.overviewTopicsBox}>
          <Grid style={{ paddingBottom: 0, paddingTop: 15 }}>
            <Col size={0.7}>
              <Icon style={styles.categoryIcon} name={catagory.iconName} />
            </Col>
            <Col size={4}>
              <Text style={styles.overviewInfoHeader}>
                {toUpper(catagory.name)}
              </Text>
            </Col>
            <Col size={5}>
              <Text style={styles.overviewInfoPerc}>
                {' '}
                {formatAmount(catagory.amount)}
              </Text>
            </Col>
          </Grid>
          <ProgressBar
            style={styles.progress}
            progress={catagory.percent}
            color={categoryColors[index % categoryColors.length]}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default ExpenseProgress;
