import { Platform, Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;

import theme from '@theme/variables/mmoney';

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  emptyMsg: {
    color: '#777',
    fontSize: 12,
  },

  item: {
    container: {
      borderRadius: 0,
      elevation: 1,
      borderRightWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: Platform.OS === 'android' ? 0 : 1,
      borderBottomColor: '#ddd',
      borderLeftWidth: 5,
    },
    content: {
      flex: 1,
      flexDirection: 'column',
      padding: 10,
    },
    icon: {
      fontSize: 25,
      color: '#BBBBBE',
    },
    title: {
      fontSize: 16,
      color: '#444',
    },
    subtitle: {
      fontSize: 10,
      color: '#777',
    },
    expenseAmount: {
      fontSize: 14,
      color: theme.brandPrimary,
      alignSelf: 'flex-end',
    },
    incomeAmount: {
      fontSize: 14,
      color: theme.brandSuccess,
      alignSelf: 'flex-end',
    },
    swipeBtn: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  agenda: {
    container: {
      height: deviceHeight,
    },
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 3,
      padding: 7,
      marginRight: 10,
      marginLeft: 0,
      marginTop: 12,
    },
    emptyDate: {
      height: 15,
      flex: 1,
      paddingTop: 30,
    },
  },
};
