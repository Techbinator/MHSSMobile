import React, { Component } from 'react';
import { VictoryLine } from 'victory-native';

class LineChart extends Component {
  render() {
    return (
      this.props.data.length > 0 && (
        <VictoryLine
          style={{
            data: {
              stroke: this.props.color,
            },
          }}
          data={this.props.data}
        />
      )
    );
  }
}

export default LineChart;
