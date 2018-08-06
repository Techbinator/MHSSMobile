import React, { Component } from 'react';
import PureChart from 'react-native-pure-chart';
import { View } from 'native-base';
import styles from './styles';
class PieChart extends Component {
  render() {
    return (
      this.props.data.length > 0 && (
        <View style={styles.chartContainer}>
          <PureChart data={this.props.data} type="pie" />
        </View>
      )
    );
  }
}

export default PieChart;
