const React = require('react-native');
const { Dimensions } = React;

const deviceWidth = Dimensions.get('window').width;
import themeColors from '../../theme/variables/commonColor';

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  expenseOuter: {
    borderRadius: 0,
    elevation: 1,
    borderBottomWidth: 1,
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
  expenseIconWrapper: {
    width: deviceWidth / 5,
  },
  expenseTitleWrapper: {
    width: (deviceWidth / 5) * 4,
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
  textNote: {
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
