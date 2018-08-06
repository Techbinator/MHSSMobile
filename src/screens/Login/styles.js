const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;

export default {
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    height: deviceHeight / 5,
    alignSelf: 'center',
  },
  form: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginBtn: {
    wrapper: {
      marginTop: 7,
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
