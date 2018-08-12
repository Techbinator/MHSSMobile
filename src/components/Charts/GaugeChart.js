import React, { Component } from 'react';
import { VictoryPie, VictoryLabel, VictoryGroup } from 'victory-native';
import { View } from 'native-base';
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width;

import theme from '@theme/variables/mmoney';
class GaugeChart extends Component {
  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  render() {
    return (
      this.props.percent && (
        <View>
          <VictoryGroup>
            <VictoryPie
              standalone={false}
              innerRadius={110}
              cornerRadius={25}
              labels={() => null}
              data={this.getData(this.props.percent)}
              style={{
                data: {
                  fill: d => {
                    const color =
                      d.y > 30 ? theme.brandSuccess : theme.brandWarning;
                    return d.x === 1 ? color : 'rgba(1,1,1,0.05)';
                  },
                },
              }}
            />
            <VictoryLabel
              textAnchor="middle"
              verticalAnchor="middle"
              x={deviceWidth / 2}
              y={deviceWidth / 2 - 40}
              text={`${Math.round(this.props.percent)}%`}
              style={{ color: '#000', fontSize: 32 }}
            />
          </VictoryGroup>
        </View>
      )
    );
  }
}

export default GaugeChart;
