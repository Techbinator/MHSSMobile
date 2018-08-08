import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import { Container, Tabs, Tab, Spinner } from 'native-base';
import { connect } from 'react-redux';
import moment from 'moment/moment';

import ExpensesCarousel from './ExpensesCarousel';
import AppHeader from '@components/AppHeader';
import * as actions from './behaviors';
import * as categoriesSelectors from './selectors';
import themeColors from '@theme/variables/commonColor';

import {
  getFormattedCurrentWeek,
  getFormattedCurrentMonth,
} from '@utils/formatters';

import styles from './styles';

class ExpensesCharts extends Component {
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
    categoriesLoading: PropTypes.bool.isRequired,
    categoriesError: PropTypes.bool.isRequired,
    categories: PropTypes.array,
  };

  static defaultProps = {
    categoriesLoading: false,
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
    const { navigation, categoriesLoading, categories } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('@assets/Background/header-bg.png')}
          style={styles.container}>
          <AppHeader
            hasTabs
            navigation={this.props.navigation}
            title="Analytics"
            titleSuffix={this.state.currentPeriod}
          />
          {categoriesLoading && (
            <Spinner
              style={{ paddingTop: 80 }}
              color={themeColors.brandPrimary}
            />
          )}
          {!categoriesLoading && (
            <Tabs
              tabContainerStyle={{
                elevation: 0,
              }}
              locked
              onChangeTab={({ i, ref, from }) =>
                this.switchPeriod(i, ref, from)
              }>
              <Tab heading="This Week">
                <ExpensesCarousel
                  categories={categories}
                  navigation={navigation}
                />
              </Tab>
              <Tab heading="This Month">
                <ExpensesCarousel
                  categories={categories}
                  navigation={navigation}
                />
              </Tab>
              <Tab heading="This Year">
                <ExpensesCarousel
                  categories={categories}
                  navigation={navigation}
                />
              </Tab>
            </Tabs>
          )}
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: categoriesSelectors.getCategories(state),
  categoriesLoading: categoriesSelectors.getCategoriesLoadingState(state),
  categoriesError: categoriesSelectors.getCategoriesErrorState(state),
});

export default connect(
  mapStateToProps,
  actions
)(ExpensesCharts);
