const React = require('react-native');
const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  background: {
    flex: 1,
    width: null,
  },
  title: {
    alignSelf: 'center',
    fontSize: 22,
    padding: 10,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop:
      Platform.OS === 'android' ? deviceHeight / 6 : deviceHeight / 6 + 10,
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: deviceHeight / 8 - 10,
  },
  submitBtn: {
    wrapper: {
      marginTop: 10,
      height: 50,
    },
    text: {
      fontWeight: '600',
    },
  },
  linkBtn: {
    opacity: 0.9,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
};
