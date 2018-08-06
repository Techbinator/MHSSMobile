import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { View, Text, Left, Right, Thumbnail, Body, Header } from 'native-base';

import HeaderDrawerButton from '@components/HeaderDrawerButton';
import styles from './styles';

const logo = require('../../../assets/header-logo.png');
const avatar = require('../../../assets/Avatars/john.png');

const AppHeader = ({ ...props }) => {
  return (
    <View style={props.style}>
      <Header hasTabs style={{ backgroundColor: 'transparent' }}>
        <Left style={{ flex: 1 }}>
          <HeaderDrawerButton navigation={props.navigation} />
        </Left>
        <Body style={{ flex: 1 }}>
          {props.displayLogo && (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Expenses');
              }}>
              <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
          )}
        </Body>
        <Right style={{ flex: 1 }}>
          {props.displayAvatar && (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Profile');
              }}>
              <Thumbnail source={avatar} style={styles.avatar} />
            </TouchableOpacity>
          )}
        </Right>
      </Header>
      {props.title && (
        <View style={styles.titleContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{props.title}</Text>
            {props.titleSuffix && (
              <Text note style={styles.titleSuffix}>
                {' ' + props.titleSuffix}
              </Text>
            )}
          </View>
          {props.subTitle && (
            <Text note style={styles.subTitle}>
              {props.subTitle}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

AppHeader.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }),
  title: PropTypes.string,
  titleSuffix: PropTypes.string,
  subTitle: PropTypes.string,
  style: PropTypes.object,
  displayAvatar: PropTypes.bool,
  displayLogo: PropTypes.bool,
};

AppHeader.defaultProps = {
  displayAvatar: true,
  displayLogo: true,
  titleSuffix: ' ',
};

export default AppHeader;
