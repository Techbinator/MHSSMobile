import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, ImageBackground } from 'react-native';
import {
  Container,
  Text,
  Button,
  Form,
  Footer,
  Icon,
  Spinner,
  View,
} from 'native-base';
import { reduxForm, Field } from 'redux-form';
import { doResetPassword } from './behaviors';
import * as resetPasswordSelectors from './selectors';

import LoginInput from '@components/LoginInput';
import Notification from '@components/Notification';
import { required, email } from '@utils/validation';

import styles from './styles';

const FORM_NAME = 'resetPassword';

class ResetPassword extends Component {
  static propTypes = {
    resetPasswordStarted: PropTypes.bool,
    resetPasswordSuccess: PropTypes.bool.isRequired,
    resetPasswordError: PropTypes.bool,
    doResetPassword: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }),
    handleSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    resetPasswordStarted: false,
    resetPasswordSuccess: false,
    resetPasswordError: false,
  };

  _handleSubmit = values => {
    this.props.doResetPassword(values.email, () => {
      this.props.navigation.goBack();
    });
  };

  render() {
    const {
      navigation,
      handleSubmit,
      resetPasswordStarted,
      resetPasswordError,
    } = this.props;
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
              <Text style={styles.header.title}>Forgot Password</Text>
            </View>
          </View>
          <KeyboardAvoidingView
            style={styles.form.container}
            behavior="padding"
            enabled>
            {resetPasswordError && (
              <Notification
                message="Error resetting your password!"
                buttonText="Retry"
                duration={5000}
                position="top"
                type="danger"
              />
            )}
            <Form style={styles.form.content}>
              <Field
                name="email"
                placeholder="Email"
                icon="ios-mail-outline"
                component={LoginInput}
                type="email"
                validate={[email, required]}
              />
              <Button
                large
                primary
                block
                style={styles.form.submitBtn}
                onPress={handleSubmit(this._handleSubmit)}>
                {resetPasswordStarted ? (
                  <Spinner color="#fff" />
                ) : (
                  <Text> Reset Password </Text>
                )}
              </Button>
            </Form>
          </KeyboardAvoidingView>
          <Footer>
            <View>
              <Button transparent onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.footer.linkText}>
                  Got my password, go to
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

const ResetPasswordForm = reduxForm({
  form: FORM_NAME,
})(ResetPassword);

const mapStateToProps = state => ({
  resetPasswordStarted: resetPasswordSelectors.isResetPasswordStarted(state),
  resetPasswordSuccess: resetPasswordSelectors.isResetPasswordSuccess(state),
  resetPasswordError: resetPasswordSelectors.isResetPasswordError(state),
});

export default connect(
  mapStateToProps,
  { doResetPassword }
)(ResetPasswordForm);
