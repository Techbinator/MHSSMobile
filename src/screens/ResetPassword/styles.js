const React = require('react-native');
const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  background: {
    flex: 1,
    width: null,
    height: null,
  },
  header: {
    container: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    navigation: {
      opacity: 0.8,
      fontSize: 38,
      color: '#FFF',
    },
    title: {
      fontFamily: 'Roboto_light',
      fontSize: 32,
      marginLeft: 20,
      marginTop: 30,
      color: '#FFF',
    },
  },
  form: {
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: deviceHeight / 6,
  },
  submitBtn: {
    marginTop: 80,
    marginLeft: 20,
    marginRight: 20,
  },
  linkBtn: {
    opacity: 0.9,
    fontSize: 14,
    color: '#FFF',
    textAlign: 'left',
    marginLeft: 5,
    paddingLeft: 0,
  },
  signInText: {
    opacity: 0.7,
    fontSize: 14,
    color: '#FFF',
    textAlign: 'right',
    marginRight: 0,
    paddingRight: 0,
  },
};
