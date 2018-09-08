import { Platform } from 'react-native';
import theme from '@theme/variables/myexpense';

export default {
  formItem: {
    paddingLeft: 0,
    borderColor: '#F6F6F6',
  },
  formInput: {
    paddingLeft: 15,
    height: 70,
  },
  formError: {
    color: theme.brandDanger,
    fontSize: Platform.OS === 'android' ? 12 : 15,
    paddingRight: 5,
    textAlign: 'right',
  },
};
