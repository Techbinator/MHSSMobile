import React from 'react';
import PropTypes from 'prop-types';
import { Platform, Dimensions, View } from 'react-native';
import Carousel from 'react-native-carousel-view';
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart';
import ExpensesOverview from './ExpensesOverview';

import styles from './styles';

import themeColors from '../../theme/variables/commonColor';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export class ExpensesCharts extends React.Component {
  static propTypes = {
    data: PropTypes.array,
    categories: PropTypes.array,
    navigation: PropTypes.any,
  };

  render() {
    return (
      <View>
        <Carousel
          width={deviceWidth}
          height={deviceHeight}
          loop={false}
          indicatorAtBottom={false}
          indicatorSize={Platform.OS === 'android' ? 15 : 10}
          indicatorColor={themeColors.brandPrimary}
          animate={false}>
          <View style={styles.slides}>
            <ExpensesOverview
              categories={this.props.categories}
              navigation={this.props.navigation}
            />
          </View>
          <View style={styles.slides}>
            <PieChart data={this.props.data} />
          </View>
          <View style={styles.slides}>
            <BarChart data={this.props.data} />
          </View>
        </Carousel>
      </View>
    );
  }
}

export default ExpensesCharts;
