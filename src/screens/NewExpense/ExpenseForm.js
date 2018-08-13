import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { ImageBackground, Switch, KeyboardAvoidingView } from 'react-native';
import {
  Container,
  Text,
  Button,
  Icon,
  Form,
  Item,
  Picker,
  View,
  Spinner,
  Footer,
} from 'native-base';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import AppHeader from '@components/AppHeader';
import FormInput from '@components/FormInput';
import Notification from '@components/Notification';
import { required, alphaNumeric, isNumeric } from '@utils/validation';

import * as actions from './behaviors';
import * as expenseSelectors from '@screens/NewExpense/selectors';

import styles from './styles';

import theme from '@theme/variables/mmoney';
var Color = require('color');

const light = Color(theme.brandPrimary).alpha(0.3);

const FORM_NAME = 'AddExpense';

class ExpenseForm extends React.Component {
  static propTypes = {
    loadCategories: PropTypes.func,
    categories: PropTypes.array,
    addExpenseStarted: PropTypes.bool,
    addExpenseSuccess: PropTypes.bool,
    addExpenseError: PropTypes.bool,
    doAddExpense: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }),
    handleSubmit: PropTypes.func.isRequired,
    formValues: PropTypes.object,
  };

  static defaultProps = {
    addCategoryStarted: false,
    addCategorySuccess: false,
    addCategoryError: false,
    formValues: {
      amount: 0,
      title: '',
      category: '',
      date: moment().format('YYYY-MM-DD'),
      permanent: false,
    },
  };

  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    this.props.loadCategories();
  };

  _handleSubmit = values => {
    this.props.doAddExpense(values, () => {
      this.props.navigation.navigate('Expenses');
    });
  };

  render() {
    const {
      navigation,
      handleSubmit,
      categories,
      formValues,
      addExpenseStarted,
      addExpenseError,
    } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('@assets/images/header-bg.png')}
          style={styles.background}>
          <AppHeader
            style={{ flex: 0.5 }}
            hasTabs
            navigation={navigation}
            title="Add Expense"
          />
          <KeyboardAvoidingView
            style={styles.form.container}
            behavior="padding"
            enabled>
            {addExpenseError && (
              <Notification
                message="Error adding a new expense!"
                buttonText="Retry"
                duration={5000}
                position="top"
                type="danger"
              />
            )}
            <Form style={styles.form.content}>
              <Field
                name="amount"
                label="Amount"
                component={FormInput}
                type="text"
                validate={[required, isNumeric]}
                autoCapitalize="none"
                keyboardType="numeric"
              />
              <Field
                name="title"
                label="Expense title"
                component={FormInput}
                type="text"
                validate={[required, alphaNumeric]}
              />
              <Field
                last
                name="category"
                component={({ input: { onChange, value } }) => {
                  return (
                    <Item style={styles.picker.container}>
                      <Picker
                        style={styles.picker.input}
                        mode="dropdown"
                        iosHeader="Select Category"
                        placeholder="Category"
                        placeholderStyle={styles.picker.placeholderText}
                        placeholderIconColor="#95959A"
                        itemStyle={styles.picker.itemStyle}
                        itemTextStyle={styles.picker.itemTextStyle}
                        iosIcon={<Icon name="arrow-down" />}
                        selectedValue={value}
                        onValueChange={value => {
                          onChange(value);
                        }}>
                        {categories.map(item => {
                          return (
                            <Picker.Item
                              key={item.id}
                              label={item.name}
                              value={item.id}
                            />
                          );
                        })}
                      </Picker>
                    </Item>
                  );
                }}
                validate={[required]}
              />
              <Field
                name="date"
                component={({ input: { onChange } }) => {
                  return (
                    <DatePicker
                      style={{ width: '100%' }}
                      mode="date"
                      placeholder="Date"
                      confirmBtnText="Select"
                      cancelBtnText="Cancel"
                      customStyles={styles.datePicker}
                      iconComponent={
                        <Icon
                          name="md-calendar"
                          style={[styles.datePicker.dateIcon]}
                        />
                      }
                      date={formValues.date}
                      onDateChange={value => {
                        onChange(value);
                      }}
                    />
                  );
                }}
                validate={[required]}
              />

              <Field
                name="permanent"
                label="Every month"
                component={({ input: { onChange } }) => {
                  return (
                    <View style={styles.switchContainer}>
                      <Text style={styles.switchText}>Every month</Text>
                      <Switch
                        onTintColor={light}
                        thumbTintColor={theme.brandPrimary}
                        tintColor={theme.brandPrimary}
                        value={formValues.permanent}
                        onValueChange={value => {
                          onChange(value);
                        }}
                      />
                    </View>
                  );
                }}
              />
              <Button
                large
                primary
                block
                style={styles.form.submitBtn}
                onPress={handleSubmit(this._handleSubmit)}>
                {addExpenseStarted ? (
                  <Spinner color="#fff" />
                ) : (
                  <Text> Add </Text>
                )}
              </Button>
            </Form>
          </KeyboardAvoidingView>
          <Footer>
            <View>
              <Button
                transparent
                onPress={() => navigation.navigate('Expenses')}>
                <Text>Cancel</Text>
              </Button>
            </View>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

export const NewExpenseForm = reduxForm({
  form: FORM_NAME,
})(ExpenseForm);

const mapStateToProps = state => ({
  categories: expenseSelectors.getCategories(state),
  addExpenseStarted: expenseSelectors.isAddExpenseStarted(state),
  addExpenseSuccess: expenseSelectors.isAddExpenseSuccess(state),
  addExpenseError: expenseSelectors.isAddExpenseError(state),
  formValues: getFormValues(FORM_NAME)(state),
});

export default connect(
  mapStateToProps,
  actions
)(NewExpenseForm);
