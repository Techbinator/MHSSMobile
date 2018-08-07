import React, { Component } from 'react';
import { VictoryBar } from 'victory-native';
import { View } from 'native-base';
import styles from './styles';

import themeColors from '@theme/variables/commonColor';

class BarChart extends Component {
  render() {
    return (
      this.props.data.length > 0 && (
        <View style={styles.chartContainer}>
          <VictoryBar
            style={{
              data: { fill: themeColors.brandSuccess },
              labels: { fontSize: '10' },
            }}
            data={this.props.data}
          />
        </View>
      )
    );
  }
}

export default BarChart;
