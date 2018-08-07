import React, { Component } from 'react';
import { Platform } from 'react-native';
import { VictoryPie } from 'victory-native';
import { View } from 'native-base';
import styles from './styles';

import categoryColors from '@theme/categoryColors';

const theme = {
  pie: {
    colorScale: categoryColors,
    padding: 60,
  },
};

class PieChart extends Component {
  render() {
    return (
      this.props.data.length > 0 && (
        <View style={styles.chartContainer}>
          <VictoryPie
            innerRadius={70}
            labelRadius={Platform.OS === 'android' ? 150 : 138}
            theme={theme}
            data={this.props.data}
          />
        </View>
      )
    );
  }
}

export default PieChart;
