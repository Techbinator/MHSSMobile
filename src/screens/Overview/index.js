import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import { Container, Text, Tabs, Tab, TabHeading } from 'native-base';
import { connect } from 'react-redux';
import moment from 'moment/moment';

import PieChart from '../../components/PieChart';
import AppHeader from '../../components/AppHeader';
import SwitchButton from '../../components/SwitchButton';
import ExpensesOverview from './ExpensesOverview';
import * as actions from './behaviors';
import * as categoriesSelectors from './selectors';
import {
  getFormattedCurrentWeek,
  getFormattedCurrentMonth,
} from '../../utils/formatters';

import styles from './styles';

class Overview extends Component {
  constructor() {
    super();
    this.state = {
      currentPeriod: getFormattedCurrentWeek(),
      showPieChart: false,
    };
  }
  static propTypes = {
    navigation: PropTypes.any,
    getCategories: PropTypes.func.isRequired,
    loadingCategories: PropTypes.bool.isRequired,
    categoriesError: PropTypes.bool.isRequired,
    categories: PropTypes.array,
    categoriesData: PropTypes.array,
  };

  static defaultProps = {
    loadingCategories: false,
    categoriesError: false,
    categories: [],
  };

  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    this.props.getCategories();
  };

  switchPeriod(i) {
    let period = '';
    switch (i) {
      case 0:
        period = getFormattedCurrentWeek();
        break;
      case 1:
        period = getFormattedCurrentMonth();
        break;
      case 2:
        period = moment().format('YYYY');
        break;
    }

    this.setState({ currentPeriod: period });
  }

  render() {
    const { navigation, categories, categoriesData } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('../../../assets/Background/header-bg.png')}
          style={styles.container}>
          <AppHeader
            hasTabs
            navigation={this.props.navigation}
            title="Overview"
            titleSuffix={this.state.currentPeriod}
          />
          <Tabs
            locked
            onChangeTab={({ i, ref, from }) => this.switchPeriod(i, ref, from)}>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: 'transparent' }}>
                  <Text>This Week</Text>
                </TabHeading>
              }>
              <SwitchButton
                label="Display as Pie Chart"
                onValueChange={value => this.setState({ showPieChart: value })}
                value={this.state.showPieChart}
              />
              {this.state.showPieChart ? (
                <PieChart data={categoriesData} />
              ) : (
                <ExpensesOverview
                  categories={categories}
                  navigation={navigation}
                />
              )}
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: 'transparent' }}>
                  <Text>This Month</Text>
                </TabHeading>
              }>
              <ExpensesOverview
                categories={categories}
                navigation={navigation}
              />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: 'transparent' }}>
                  <Text>This Year</Text>
                </TabHeading>
              }>
              <ExpensesOverview
                categories={categories}
                navigation={navigation}
              />
            </Tab>
          </Tabs>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: categoriesSelectors.getCategories(state),
  categoriesLoading: categoriesSelectors.getCategoriesLoadingState(state),
  categoriesError: categoriesSelectors.getCategoriesErrorState(state),
  categoriesData: categoriesSelectors.getCategoriesData(state),
});

export default connect(
  mapStateToProps,
  actions
)(Overview);
