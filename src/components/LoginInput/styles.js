const React = require('react-native');
const { Platform } = React;
import commonColor from '../../theme/variables/commonColor';

export default {
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 8,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  input: {
    paddingLeft: 10,
    color: '#fff',
    borderRadius: 0,
  },
  icon: {
    color: '#E5E4E4',
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
    top: -10,
  },
  errorText2: {
    fontSize: Platform.OS === 'android' ? 12 : 15,
    color: 'transparent',
    textAlign: 'right',
    top: -10,
  },
};
