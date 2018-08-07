import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { ImageBackground, Switch } from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Form,
  Picker,
  View,
  Toast,
} from 'native-base';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import AppHeader from '@components/AppHeader';
import FormInput from '@components/FormInput';
import { required, alphaNumeric, isNumeric } from '@utils/validation';

import * as actions from './behaviors';
import * as expenseSelectors from '@screens/NewExpense/selectors';

import styles from './styles';

import themeColors from '@theme/variables/commonColor';
var Color = require('color');
const light = Color(themeColors.brandPrimary).alpha(0.3);

const FORM_NAME = 'AddExpense';

class NewExpenseForm extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    valid: PropTypes.bool,
    formValues: PropTypes.object,
    submitting: PropTypes.bool,
    categories: PropTypes.array,
    expenses: PropTypes.array,
    getCategories: PropTypes.func,
    addExpense: PropTypes.func,
    navigation: PropTypes.any,
  };

  static defaultProps = {
    valid: false,
    submitting: false,
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
    this.props.getCategories();
  };

  handleSubmit = async values => {
    if (this.props.valid) {
      this.props.addExpense(
        values,
        () => {
          this.props.navigation.navigate('Expenses');
        },
        () => {
          Toast.show({
            text: 'Error adding new expense',
            duration: 2500,
            position: 'top',
            type: 'danger',
            textStyle: { textAlign: 'center', color: '#FFF' },
          });
        }
      );
    } else {
      Toast.show({
        text: 'Invalid Form, please check your input',
        duration: 2500,
        position: 'top',
        type: 'danger',
        textStyle: { textAlign: 'center', color: '#FFF' },
      });
    }
  };

  render() {
    const { navigation, submitting, categories, formValues } = this.props;

    return (
      <Container>
        <ImageBackground
          source={require('@assets/Background/header-bg.png')}
          style={styles.container}>
          <AppHeader
            hasTabs
            navigation={this.props.navigation}
            title="Add Entry"
          />

          <Content
            paddershowsVerticalScrollIndicator={false}
            style={styles.content}>
            <Form style={styles.form}>
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
                label="Expense"
                component={FormInput}
                type="text"
                validate={[required, alphaNumeric]}
              />
              <Field
                last
                name="category"
                component={({ input: { onChange, value } }) => {
                  return (
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
                        thumbTintColor={themeColors.brandPrimary}
                        tintColor={themeColors.brandPrimary}
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
                rounded
                primary
                block
                large
                style={styles.addBtn}
                disabled={submitting}
                onPress={() => this.handleSubmit(formValues)}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Add</Text>
              </Button>
              <Button
                rounded
                block
                light
                style={styles.cancelBtn}
                onPress={() => navigation.navigate('Expenses')}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Cancel</Text>
              </Button>
            </Form>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export const NewExpenseFormForm = reduxForm({
  form: FORM_NAME,
})(NewExpenseForm);

const mapStateToProps = state => ({
  categories: expenseSelectors.getCategories(state),
  categoriesLoading: expenseSelectors.getCategoriesLoadingState(state),
  categoriesError: expenseSelectors.getCategoriesErrorState(state),
  expenses: expenseSelectors.getExpenses(state),
  formValues: getFormValues(FORM_NAME)(state),
});

export default connect(
  mapStateToProps,
  actions
)(NewExpenseFormForm);
