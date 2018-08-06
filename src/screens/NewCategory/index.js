import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { ImageBackground, Platform } from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Form,
  Picker,
  Toast,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../../components/AppHeader';
import FormInput from '../../components/FormInput';
import { required, alphaNumeric } from '../../utils/validation';
import * as actions from './behaviors';
import * as categorySelectors from '@screens/NewCategory/selectors';
import styles from './styles';
import loadash from 'lodash';

const FORM_NAME = 'AddCategory';

const ICON_SETS = loadash
  .map(
    {
      Ionicons,
    },
    (component, name) => ({ name, component })
  )
  .map(iconSet => {
    const glyphMap = iconSet.component.glyphMap;
    iconSet.glyphs = loadash.values(
      loadash.groupBy(Object.keys(glyphMap), name => glyphMap[name])
    );
    return iconSet;
  });

const iconSet = ICON_SETS[0];

class NewCategoryForm extends React.Component {
  static propTypes = {
    navigation: PropTypes.any,
    dispatch: PropTypes.func.isRequired,
    formValues: PropTypes.object,
    valid: PropTypes.bool,
    submitting: PropTypes.bool,
    addCategory: PropTypes.func,
  };

  static defaultProps = {
    valid: false,
    submitting: false,
  };

  handleSubmit = async values => {
    if (this.props.valid) {
      this.props.addCategory(values);
      this.props.navigation.navigate('Categories');
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
    const { navigation, submitting, formValues } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('../../../assets/Background/header-bg.png')}
          style={styles.container}>
          <AppHeader hasTabs navigation={navigation} title="Add Category" />
          <Content
            paddershowsVerticalScrollIndicator={false}
            style={styles.content}>
            <Form style={styles.form}>
              <Field
                name="name"
                label="Name"
                component={FormInput}
                itemStyle={styles.formInput}
                inputStyle={styles.formInput}
                type="text"
                validate={[required, alphaNumeric]}
                autoCapitalize="none"
              />
              <Field
                last
                name="iconName"
                component={({ input: { onChange, value } }) => {
                  return (
                    <Picker
                      style={styles.picker.input}
                      mode="dropdown"
                      iosHeader="Select Icon"
                      placeholder="Select Icon"
                      placeholderStyle={styles.picker.placeholderText}
                      itemStyle={styles.picker.itemStyle}
                      placeholderIconColor="#95959A"
                      iosIcon={<Icon name="arrow-down" />}
                      selectedValue={value}
                      onValueChange={value => {
                        onChange(value);
                      }}>
                      {iconSet.glyphs.map(item => {
                        return (
                          <Picker.Item
                            key={item[0]}
                            label={
                              <Icon
                                style={styles.picker.itemIconStyle}
                                name={item[0]}
                              />
                            }
                            value={item[0]}
                          />
                        );
                      })}
                    </Picker>
                  );
                }}
                validate={[required]}
              />
              <Button
                rounded
                primary
                block
                large
                style={styles.addBtn}
                disabled={submitting}
                onPress={() => this.handleSubmit(formValues)}>
                <Text
                  style={
                    Platform.OS === 'android'
                      ? { fontSize: 16, textAlign: 'center' }
                      : { fontSize: 16, fontWeight: '900' }
                  }>
                  Add
                </Text>
              </Button>
              <Button
                rounded
                block
                light
                large
                style={styles.cancelBtn}
                onPress={() => navigation.navigate('Categories')}>
                <Text
                  style={
                    Platform.OS === 'android'
                      ? { fontSize: 16, textAlign: 'center' }
                      : { fontSize: 16, fontWeight: '900' }
                  }>
                  Cancel
                </Text>
              </Button>
            </Form>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export const NewCategoryFormForm = reduxForm({
  form: FORM_NAME,
  destroyOnUnmount: false,
})(NewCategoryForm);

const mapStateToProps = state => ({
  categoryAdding: categorySelectors.getCategoryAddingState(state),
  categoryAdded: categorySelectors.getCategoryAddedState(state),
  categoryError: categorySelectors.getCategoryErrorState(state),
  formValues: getFormValues(FORM_NAME)(state),
});

export default connect(
  mapStateToProps,
  actions
)(NewCategoryFormForm);
