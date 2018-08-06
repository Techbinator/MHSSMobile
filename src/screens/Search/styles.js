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

  sectionHeader: {
    container: {
      backgroundColor: '#999999',
      paddingLeft: 0,
    },
    text: {
      textAlign: 'left',
      color: '#FFF',
      fontSize: 20,
    },
    caret: {
      position: 'absolute',
      left: 20,
      bottom: -20,
      color: '#999999',
    },
  },
  expense: {
    container: {
      elevation: 0,
      marginBottom: 0,
      marginTop: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
    odd: {
      backgroundColor: '#E4E4E4',
    },
    title: {},
    amount: {
      marginRight: 10,
    },
    label: {},
    actions: {
      container: {},
    },
    detailText: {},
  },
  searchHeader: {
    container: {
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0,
      borderRightWidth: 0,
      height: 60,
      backgroundColor: '#FFF',
    },
    exportBtn: {
      alignSelf: 'flex-end',
      marginTop: 10,
      marginBottom: 5,
      marginRight: 5,
      height: 30,
    },
  },
};
