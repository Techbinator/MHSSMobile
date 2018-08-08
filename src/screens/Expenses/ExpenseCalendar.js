import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import { Container, Content, View } from 'native-base';
import { connect } from 'react-redux';
import { Calendar as MonthCalendar } from 'react-native-calendars';
import AppHeader from '@components/AppHeader';

import ExpensesList from './ExpensesList';

import * as actions from './behaviors';
import * as expensesSelectors from './selectors';

import styles from './styles';
import themeColors from '@theme/variables/commonColor';

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
  };

  static defaultProps = {
    expensesLoading: false,
    expensesError: false,
  };

  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    this.props.getExpenses();
  };

  onDateChange(date) {
    this.setState({ date });
  }
  onDaySelect(day) {
    this.setState({
      selected: day.dateString,
    });
    this.props.getExpenses();
  }

  render() {
    const { navigation, expenses, deleteExpense, expensesLoading } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('@assets/Background/header-bg-big.png')}
          style={styles.container}>
          <AppHeader hasTabs navigation={navigation} />
          <View style={styles.calendarContainer}>
            <MonthCalendar
              onDayPress={e => this.onDaySelect(e)}
              disableMonthChange={true}
              markedDates={{ [this.state.selected]: { selected: true } }}
              theme={{
                calendarBackground: '#FFF',
                textSectionTitleColor: themeColors.brandPrimary,
                selectedDayBackgroundColor: themeColors.brandPrimary,
                selectedDayTextColor: '#FFF',
                todayTextColor: themeColors.brandPrimary,
                textDisabledColor: '#DDD',
                dotColor: themeColors.brandSecondary,
                selectedDotColor: '#FFF',
                arrowColor: themeColors.brandPrimary,
                monthTextColor: '#000',
              }}
            />
          </View>
          <Content
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#fff' }}>
            <ExpensesList
              expensesList={expenses}
              navigation={navigation}
              handleDelete={deleteExpense}
              expensesLoading={expensesLoading}
            />
          </Content>
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
