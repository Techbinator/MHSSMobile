import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ImageBackground, StatusBar } from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Form,
  Toast,
  Footer,
} from 'native-base';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { resetPassword } from './behaviors';
import * as resetPasswordSelectors from './selectors';

import LoginInput from '../../components/LoginInput';
import { required, email } from '../../utils/validation';
import styles from './styles';

const FORM_NAME = 'resetPassword';
class ResetPasswordForm extends Component {
  static propTypes = {
    valid: PropTypes.bool,
    submitting: PropTypes.bool,
    resetPasswordSuccess: PropTypes.bool,
    resetPassword: PropTypes.func.isRequired,
    navigation: PropTypes.shape({ goBack: PropTypes.func.isRequired }),
    formValues: PropTypes.object,
  };

  static defaultProps = {
    valid: false,
    submitting: false,
    resetPasswordSuccess: false,
  };

  handleSubmit = async values => {
    if (this.props.valid) {
      this.props.resetPassword(
        values.email,
        () => {
          Toast.show({
            text: 'Please check your mail to complete password reset process',
            duration: 2500,
            position: 'top',
            textStyle: { textAlign: 'center', color: '#FFF' },
          });
          this.props.navigation.goBack();
        },
        () => {
          Toast.show({
            text: 'Error reseting password',
            duration: 2500,
            position: 'top',
            type: 'danger',
            textStyle: { textAlign: 'center', color: '#FFF' },
          });
        }
      );
    } else {
      Toast.show({
        text: 'Please enter a valid Email address',
        duration: 2500,
        position: 'top',
        type: 'danger',
        textStyle: { textAlign: 'center', color: '#FFF' },
      });
    }
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require('../../../assets/Background/bg2.png')}
          style={styles.background}>
          <Content>
            <Content padder scrollEnabled={false}>
              <Text style={styles.title}>Reset Password</Text>
              <Form style={styles.form}>
                <Field
                  name="email"
                  component={LoginInput}
                  type="email"
                  validate={[email, required]}
                />
                <Button
                  rounded
                  primary
                  block
                  onPress={() => this.handleSubmit(this.props.formValues)}
                  style={styles.submitBtn.wrapper}>
                  <Text style={styles.submitBtn.text}>Send Email</Text>
                </Button>
              </Form>
            </Content>
          </Content>
          <Footer
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.linkBtn}>Back To Login</Text>
            </Button>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

const ResetPassword = reduxForm({
  form: FORM_NAME,
})(ResetPasswordForm);

const mapStateToProps = state => ({
  resetPasswordSuccess: resetPasswordSelectors.getResetPasswordSuccessState(
    state
  ),
  formValues: getFormValues(FORM_NAME)(state),
});

export default connect(
  mapStateToProps,
  { resetPassword }
)(ResetPassword);
