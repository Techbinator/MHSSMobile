import { Platform, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width;

import theme from '@theme/variables/mmoney';

export default {
  background: {
    flex: 1,
    width: null,
    height: null,
  },
  content: {
    backgroundColor: '#FFF',
  },
  form: {
    container: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#FFF',
    },
    content: {
      flex: 1,
      width: '100%',
    },
    formBtn: {
      width: '100%',
      borderRadius: 0,
    },
  },

  iconExplorer: {
    container: {
      justifyContent: 'center',
      height: 70,
      width: deviceWidth / 6,
      backgroundColor: '#FFF',
      borderBottomWidth: 1,
      borderRightWidth: 1,
      borderColor: '#ddd',
    },
    icon: {
      fontSize: 35,
      alignSelf: 'center',
      color: theme.dropdownLinkColor,
    },
  },

  footer: {
    flexDirection: 'column',
    height: 120,
  },

  formError: {
    color: theme.brandDanger,
    fontSize: Platform.OS === 'android' ? 12 : 15,
    paddingRight: 5,
    textAlign: 'right',
  },

  iconSelect: {
    container: {
      paddingLeft: 15,
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
    },
    categoryIcon: {
      fontSize: 50,
      color: theme.dropdownLinkColor,
      alignSelf: 'flex-start',
    },
    text: {
      alignSelf: 'flex-end',
      color: theme.inputColorPlaceholder,
    },
    icon: {
      alignSelf: 'flex-end',
      marginRight: 5,
      color: theme.inputColorPlaceholder,
    },
  },
};
