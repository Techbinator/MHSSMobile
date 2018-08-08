import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from 'victory-native';
import themeColors from '@theme/variables/commonColor';

const deviceWidth = Dimensions.get('window').width;

class CashFlowChart extends Component {
  render() {
    return (
      this.props.incomeData.length > 0 && (
        <VictoryChart
          theme={VictoryTheme.material}
          width={deviceWidth - 20}
          domainPadding={{ y: 10 }}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={d => `y: ${d.y}`}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={0}
                  flyoutStyle={{ fill: 'white' }}
                />
              }
            />
          }
          padding={{ top: 40, bottom: 40, left: 50, right: 10 }}>
          <VictoryLine
            style={{
              data: {
                stroke: themeColors.brandSuccess,
                strokeWidth: (d, active) => {
                  return active ? 4 : 2;
                },
              },
            }}
            data={this.props.incomeData}
          />
          <VictoryLine
            style={{
              data: {
                stroke: themeColors.brandDanger,
                strokeWidth: (d, active) => {
                  return active ? 4 : 2;
                },
              },
            }}
            data={this.props.expenseData}
          />
        </VictoryChart>
      )
    );
  }
}

export default CashFlowChart;
