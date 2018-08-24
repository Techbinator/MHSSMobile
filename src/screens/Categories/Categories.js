import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, ImageBackground } from 'react-native';
import {
  Container,
  Content,
  Fab,
  Icon,
  Text,
  View,
  Spinner,
} from 'native-base';
import { connect } from 'react-redux';

import AppHeader from '@components/AppHeader';
import Category from './Category';

import * as actions from './behaviors';
import * as categoriesSelectors from './selectors';

import styles from './styles';
import theme from '@theme/variables/mmoney';

class Categories extends Component {
  static propTypes = {
    navigation: PropTypes.any,
    getCategories: PropTypes.func.isRequired,
    categoriesLoading: PropTypes.bool.isRequired,
    categoriesError: PropTypes.bool.isRequired,
    categories: PropTypes.array,
  };

  static defaultProps = {
    categoriesLoading: false,
    categoriesError: false,
    categories: [],
  };

  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    this.props.getCategories();
  };

  render() {
    const { navigation, categories, categoriesLoading } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('@assets/images/header-bg.png')}
          style={styles.background}>
          <AppHeader
            hasTabs
            navigation={navigation}
            title="Categories"
            subTitle="Manage expense categories"
          />
          <Content showsVerticalScrollIndicator={false} style={styles.content}>
            <View>
              {categoriesLoading && <Spinner color={theme.brandPrimary} />}
              {!categoriesLoading &&
                categories.lenght === 0 && (
                  <Text style={styles.emptyMsg}>No categories found</Text>
                )}
            </View>
            <FlatList
              horizontal={false}
              numColumns={2}
              data={categories}
              renderItem={({ ...props }) => (
                <Category navigation={navigation} {...props} />
              )}
              keyExtractor={category => category.id}
            />
          </Content>
          <Fab
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: theme.brandPrimary }}
            position="bottomRight"
            onPress={() => navigation.navigate('NewCategory')}>
            <Icon type="Feather" name="plus" />
          </Fab>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: categoriesSelectors.getCategories(state),
  categoriesLoading: categoriesSelectors.getCategoriesLoadingState(state),
  categoriesError: categoriesSelectors.getCategoriesErrorState(state),
});

export default connect(
  mapStateToProps,
  actions
)(Categories);
