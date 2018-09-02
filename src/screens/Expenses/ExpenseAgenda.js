import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import { groupBy } from 'lodash';
import { Container, View, Text, Spinner, Icon } from 'native-base';
import { connect } from 'react-redux';
import { Agenda } from 'react-native-calendars';
import AppHeader from '@components/AppHeader';

import ExpenseItem from './ExpenseItem';

import * as actions from './behaviors';
import * as expensesSelectors from './selectors';
import categoryColors from '@theme/categoryColors';
import styles from './styles';
import theme from '@theme/variables/mmoney';

class ExpenseCalendar extends Component {
  static propTypes = {
    navigation: PropTypes.any,
    selected: PropTypes.string,
    date: PropTypes.object,
    getExpenses: PropTypes.func.isRequired,
    expensesLoading: PropTypes.bool.isRequired,
    expensesError: PropTypes.bool.isRequired,
    expenses: PropTypes.array,
    deleteExpense: PropTypes.func,
  };

  state = {
    date: new Date(),
    selected: '',
    items: {},
  };

  static defaultProps = {
    expensesLoading: false,
    expensesError: false,
  };

  static getDerivedStateFromProps(props) {
    if (!props.expensesLoading && !props.expensesError) {
      const expensesWithColor = props.expenses.map((obj, index) => {
        return {
          ...obj,
          color: categoryColors[index % categoryColors.length],
        };
      });
      const expensesGroupedByDate = groupBy(expensesWithColor, 'date');
      return {
        expenses: expensesGroupedByDate,
      };
    }
    return null;
  }
  renderItem(item) {
    return (
      <ExpenseItem
        item={item}
        style={styles.agenda.item}
        navigation={this.props.navigation}
      />
    );
  }
  renderEmptyData() {
    return (
      <View style={styles.emptyContainer}>
        {this.props.expensesLoading ? (
          <Spinner color={theme.brandPrimary} />
        ) : (
          <Text style={styles.emptyMsg}>No expenses found for this date</Text>
        )}
      </View>
    );
  }
  rowHasChanged(r1, r2) {
    return r1.id !== r2.id;
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('@assets/images/header-bg.png')}
          style={styles.container}>
          <AppHeader hasTabs navigation={navigation} />
          <Agenda
            style={styles.agenda.container}
            items={this.state.expenses}
            loadItemsForMonth={day => {
              this.props.getExpenses(day);
            }}
            renderItem={this.renderItem.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            selected={'2018-08-11'}
            pastScrollRange={2}
            futureScrollRange={2}
            renderEmptyData={this.renderEmptyData.bind(this)}
            renderKnob={() => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.agenda.knobText}>More dates</Text>
                  <Icon
                    style={styles.agenda.knobIcon}
                    name="ios-arrow-down-outline"
                  />
                </View>
              );
            }}
            theme={{
              calendarBackground: '#FFF',
              textSectionTitleColor: theme.brandPrimary,
              selectedDayBackgroundColor: theme.brandPrimary,
              selectedDayTextColor: '#FFF',
              todayTextColor: theme.brandPrimary,
              textDisabledColor: '#DDD',
              dotColor: theme.brandSecondary,
              selectedDotColor: '#FFF',
              arrowColor: theme.brandPrimary,
              monthTextColor: '#000',
              agendaKnobColor: 'blue',
            }}
          />
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  expenses: expensesSelectors.getExpenses(state),
  expensesLoading: expensesSelectors.getExpensesLoadingState(state),
  expensesError: expensesSelectors.getExpensesErrorState(state),
});

export default connect(
  mapStateToProps,
  actions
)(ExpenseCalendar);
