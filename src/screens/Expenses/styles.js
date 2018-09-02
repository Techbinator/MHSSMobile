import { Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;

import theme from '@theme/variables/mmoney';

export default {
  calendarContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  spinner: {
    paddingTop: deviceHeight / 2 - 10,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
  },

  emptyContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMsg: {
    color: '#777',
    fontSize: 18,
    alignSelf: 'center',
  },
  item: {
    container: {
      flex: 1,
      elevation: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 0,
      paddingLeft: 0,
      borderRightWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0.3,
      borderBottomColor: '#ddd',
      borderLeftWidth: 0,
    },
    content: {
      flex: 1,
      elevation: 0,
      flexDirection: 'column',
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 15,
      paddingLeft: 15,
      borderLeftWidth: 5,
      borderRightWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0,
      borderRadius: 0,
    },
    icon: {
      textAlign: 'center',
      color: '#BBBBBE',
      width: 30,
    },
    title: {
      fontSize: 16,
      color: '#444',
      marginLeft: 15,
    },
    subtitle: {
      fontSize: 10,
      color: '#777',
      marginLeft: 15,
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
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 3,
      marginRight: 10,
      marginLeft: 0,
      marginTop: 10,
    },
    knobText: {
      color: theme.brandInfo,
      fontSize: 13,
    },
    knobIcon: {
      color: theme.brandInfo,
      paddingLeft: 5,
      paddingTop: 2,
      fontSize: 20,
    },
  },
};
