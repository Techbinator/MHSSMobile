import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { VictoryBar } from 'victory-native';

import theme from '@theme/variables/mmoney';
const deviceWidth = Dimensions.get('window').width;

class BarChart extends Component {
  render() {
    return (
      this.props.data.length > 0 && (
        <VictoryBar
          horizontal
          width={deviceWidth - 20}
          padding={{ top: 40, bottom: 40, left: 10, right: 60 }}
          style={{
            data: { fill: theme.brandInfo },
            labels: { fontSize: '10' },
          }}
          data={this.props.data}
        />
      )
    );
  }
}

export default BarChart;
