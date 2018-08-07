const React = require('react-native');
const { Platform } = React;
import commonColor from '@theme/variables/commonColor';

export default {
  inputWrapper: {
    flexDirection: 'row',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0.8,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 0,
  },
  input: {
    paddingBottom: 0,
    marginBottom: 0,
    paddingTop: 0,
    marginTop: 0,
    paddingLeft: 15,
    color: '#fff',
    fontSize: 18,
  },
  icon: {
    color: '#E5E4E4',
    marginLeft: 10,
    fontSize: 30,
  },
  errorIcon: {
    color: '#fff',
    marginTop: 5,
    right: 10,
  },
  errorText1: {
    fontSize: Platform.OS === 'android' ? 12 : 15,
    color: commonColor.brandDanger,
    textAlign: 'right',
  },
  errorText2: {
    fontSize: Platform.OS === 'android' ? 12 : 15,
    color: 'transparent',
    textAlign: 'right',
  },
  separator: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    padding: 0,
    opacity: 0.3,
    height: 0.8,
  },
};
