import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { Image, ImageBackground, StatusBar } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import {
  Container,
  Content,
  Text,
  Button,
  View,
  Form,
  Left,
  Right,
  Footer,
  Toast,
} from 'native-base';

import LoginInput from '../../components/LoginInput';
import {
  required,
  alphaNumeric,
  minLength,
  maxLength,
} from '../../utils/validation';
import { doLogin } from './behaviors';
import * as loginSelectors from './selectors';
import styles from './styles';

const bg = require('../../../assets/Background/bg.png');
const logo = require('../../../assets/logo.png');

const minLength8 = minLength(8);
const maxLength15 = maxLength(15);

const FORM_NAME = 'login';

class LoginForm extends Component {
  static propTypes = {
    valid: PropTypes.bool,
    submitting: PropTypes.bool,
    loginSuccess: PropTypes.bool.isRequired,
    doLogin: PropTypes.func.isRequired,
    navigation: PropTypes.shape({ dispatch: PropTypes.func.isRequired }),
    formValues: PropTypes.object,
  };

  static defaultProps = {
    valid: false,
    submitting: false,
  };

  login = values => {
    if (this.props.valid) {
      this.props.doLogin(
        values.username,
        values.password,
        () => {
          this.props.navigation.dispatch(
            StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Walkthrough' }),
              ],
            })
          );
        },
        () => {
          Toast.show({
            text: 'Invalid username or password',
            duration: 2500,
            position: 'top',
            type: 'danger',
            textStyle: { textAlign: 'center', color: '#FFF' },
          });
        }
      );
    } else {
      Toast.show({
        text: 'Please enter a valid username & password!',
        duration: 2500,
        position: 'top',
        type: 'danger',
        textStyle: { textAlign: 'center', color: '#FFF' },
      });
    }
  };

  render() {
    const { navigation, formValues } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={bg} style={styles.background}>
          <Content contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.container}>
              <Form style={styles.form}>
                <Field
                  name="username"
                  component={LoginInput}
                  type="username"
                  validate={[alphaNumeric, maxLength15, required]}
                />
                <Field
                  name="password"
                  component={LoginInput}
                  type="password"
                  validate={[alphaNumeric, minLength8, maxLength15, required]}
                />
                <Button
                  rounded
                  primary
                  block
                  style={styles.loginBtn.wrapper}
                  onPress={() => this.login(formValues)}>
                  <Text style={styles.loginBtn.text}> Sign In </Text>
                </Button>
              </Form>
            </View>
          </Content>
          <Footer>
            <Left style={{ flex: 2 }}>
              <Button
                small
                transparent
                style={{ alignSelf: 'flex-start' }}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.linkBtn}>Sign Up</Text>
              </Button>
            </Left>
            <Right style={{ flex: 2 }}>
              <Button
                small
                transparent
                style={{ alignSelf: 'flex-end' }}
                onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={styles.linkBtn}>Forgot Password</Text>
              </Button>
            </Right>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

export const LoginFormForm = reduxForm({
  form: FORM_NAME,
})(LoginForm);

const mapStateToProps = state => ({
  loginSuccess: loginSelectors.isLoggedIn(state),
  formValues: getFormValues(FORM_NAME)(state),
});

export default connect(
  mapStateToProps,
  { doLogin }
)(LoginFormForm);
