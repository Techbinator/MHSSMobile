import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { KeyboardAvoidingView, ImageBackground, Platform } from 'react-native';
import {
  Container,
  Text,
  Button,
  Icon,
  Form,
  Picker,
  Footer,
  Spinner,
  View,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import loadash from 'lodash';
import AppHeader from '@components/AppHeader';
import FormInput from '@components/FormInput';
import Notification from '@components/Notification';
import { required, alphaNumeric } from '@utils/validation';
import * as actions from './behaviors';
import * as categorySelectors from '@screens/NewCategory/selectors';
import styles from './styles';

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

class CategoryForm extends React.Component {
  static propTypes = {
    addCategoryStarted: PropTypes.bool,
    addCategorySuccess: PropTypes.bool.isRequired,
    addCategoryError: PropTypes.bool,
    doAddCategory: PropTypes.func.isRequired,
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
      iconName: 'ios-shirt-outline',
    },
  };

  _handleSubmit = values => {
    this.props.doAddCategory(values, () => {
      this.props.navigation.navigate('Categories');
    });
  };

  render() {
    const {
      navigation,
      handleSubmit,
      addCategoryStarted,
      addCategoryError,
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
            title="Add Category"
          />
          <KeyboardAvoidingView
            style={styles.form.container}
            behavior="padding"
            enabled>
            {addCategoryError && (
              <Notification
                message="Error creating a new category!"
                buttonText="Retry"
                duration={5000}
                position="top"
                type="danger"
              />
            )}
            <Form style={styles.form.content}>
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
                            value={item[0]}
                            label={
                              Platform.OS === 'android' ? (
                                item[0]
                              ) : (
                                <Icon
                                  style={styles.picker.itemIconStyle}
                                  name={item[0]}
                                />
                              )
                            }
                          />
                        );
                      })}
                    </Picker>
                  );
                }}
                validate={[required]}
              />
              {Platform.OS === 'android' && (
                <Icon
                  style={styles.picker.categoryIcon}
                  name={formValues && formValues.iconName}
                />
              )}
              <Button
                large
                primary
                block
                style={styles.form.submitBtn}
                onPress={handleSubmit(this._handleSubmit)}>
                {addCategoryStarted ? (
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
                onPress={() => navigation.navigate('Categories')}>
                <Text>Cancel</Text>
              </Button>
            </View>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

export const NewCategoryForm = reduxForm({
  form: FORM_NAME,
})(CategoryForm);

const mapStateToProps = state => ({
  addCategoryStarted: categorySelectors.isAddCategoryStarted(state),
  addCategorySuccess: categorySelectors.isAddCategorySuccess(state),
  addCategoryError: categorySelectors.isAddCategoryError(state),
  formValues: getFormValues(FORM_NAME)(state),
});

export default connect(
  mapStateToProps,
  actions
)(NewCategoryForm);
