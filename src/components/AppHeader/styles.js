const React = require('react-native');

const { StyleSheet, Platform } = React;

module.exports = StyleSheet.create({
  drawerIcon: {
    fontSize: 32,
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  titleContainer: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Roboto_light',
    fontSize: 28,
    color: '#FFF',
  },
  titleSuffix: {
    fontFamily: 'Roboto_light',
    fontSize: 26,
    opacity: 0.8,
    fontWeight: '100',
    color: '#FFF',
  },
  subTitle: {
    fontFamily: 'Roboto_light',
    paddingTop: 10,
    fontSize: 24,
    opacity: Platform.OS === 'android' ? 0.7 : 0.9,
    fontWeight: '100',
    color: '#FFF',
  },
});
