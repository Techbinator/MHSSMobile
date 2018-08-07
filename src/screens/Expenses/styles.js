const React = require('react-native');
const { Platform } = React;

import themeColors from '@theme/variables/commonColor';

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  expenseOuter: {
    borderRadius: 0,
    elevation: 1,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: Platform.OS === 'android' ? 0 : 1,
    borderBottomColor: '#ddd',
    borderLeftWidth: 5,
  },
  expenseContent: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    flex: 1,
  },
  expenseIcon: {
    fontSize: 25,
    color: '#BBBBBE',
  },
  expenseTitle: {
    fontSize: 16,
    color: '#444',
  },
  expenseSubtitle: {
    fontSize: 10,
    color: '#777',
  },
  expenseAmount: {
    fontSize: 16,
    color: themeColors.brandPrimary,
    alignSelf: 'flex-end',
  },
  incomeAmount: {
    fontSize: 16,
    color: themeColors.brandSuccess,
    alignSelf: 'flex-end',
  },
  emptyMsg: {
    color: '#777',
    fontSize: 12,
  },
  swipeBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
};
