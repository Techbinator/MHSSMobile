import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { ImageBackground, KeyboardAvoidingView } from 'react-native';
import {
  Container,
  Icon,
  Text,
  Button,
  View,
  Form,
  Footer,
  Spinner,
} from 'native-base';

import LoginInput from '@components/LoginInput';
import Notification from '@components/Notification';

import {
  required,
  email,
  alphaNumeric,
  minLength7,
  maxLength15,
} from '@utils/validation';

import { doSignUp } from './behaviors';
import * as signupSelectors from './selectors';
import styles from './styles';

const FORM_NAME = 'signin';

class SignUp extends Component {
  static propTypes = {
    signupStarted: PropTypes.bool,
    signupSuccess: PropTypes.bool.isRequired,
    signupError: PropTypes.bool,
    doSignUp: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }),
    handleSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    signupStarted: false,
    signupSuccess: false,
    signupError: false,
  };

  _handleSubmit = values => {
    this.props.doSignUp(values, () => {
      this.props.navigation.goBack();
    });
  };

  render() {
    const { navigation, handleSubmit, signupStarted, signupError } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('@assets/images/background2.png')}
          style={styles.background}>
          <View style={styles.header.container}>
            <View style={{ flex: 1 }}>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}>
                <Icon style={styles.header.navigation} name="md-arrow-back" />
              </Button>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.header.title}>Sign Up</Text>
            </View>
          </View>
          <KeyboardAvoidingView
            style={styles.form.container}
            behavior="padding"
            enabled>
            {signupError && (
              <Notification
                message="Error creating your account!"
                buttonText="Retry"
                duration={5000}
                position="top"
                type="danger"
              />
            )}
            <Form style={styles.form.content}>
              <Field
                name="username"
                placeholder="Username"
                icon="ios-person-outline"
                component={LoginInput}
                type="text"
                validate={[required, alphaNumeric, maxLength15]}
              />
              <Field
                name="email"
                placeholder="Email"
                icon="ios-mail-outline"
                component={LoginInput}
                type="email"
                validate={[email, required]}
              />
              <Field
                name="password"
                placeholder="Password"
                icon="ios-lock-outline"
                component={LoginInput}
                type="password"
                secureTextEntry={true}
                validate={[required, alphaNumeric, minLength7, maxLength15]}
              />
              <Field
                name="confirmPassword"
                placeholder="Confirm Password"
                icon="ios-lock-outline"
                component={LoginInput}
                type="password"
                secureTextEntry={true}
                validate={[required, alphaNumeric, minLength7, maxLength15]}
              />
              <Button
                large
                primary
                block
                style={styles.form.submitBtn}
                onPress={handleSubmit(this._handleSubmit)}>
                {signupStarted ? (
                  <Spinner color="#fff" />
                ) : (
                  <Text> Sign Up </Text>
                )}
              </Button>
            </Form>
          </KeyboardAvoidingView>
          <Footer>
            <View>
              <Button transparent onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.footer.linkText}>
                  Already have an account?
                </Text>
                <Text style={styles.footer.linkBtn}>Sign In</Text>
              </Button>
            </View>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

export const SignUpForm = reduxForm({
  form: FORM_NAME,
})(SignUp);

const mapStateToProps = state => ({
  signupStarted: signupSelectors.isSignUpStarted(state),
  signupSuccess: signupSelectors.isSignUpSuccess(state),
  signupError: signupSelectors.isSignUpError(state),
});

export default connect(
  mapStateToProps,
  { doSignUp }
)(SignUpForm);
