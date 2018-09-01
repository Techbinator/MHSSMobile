import { Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
import theme from '@theme/variables/mmoney';

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  spinner: {
    paddingTop: deviceHeight / 2 - 10,
  },
  sectionHeader: {
    container: {
      paddingLeft: 0,
    },
    text: {
      textAlign: 'left',
    },
    caret: {
      position: 'absolute',
      left: 20,
      bottom: -20,
      color: '#F4F4F4',
    },
  },
  expense: {
    container: {
      elevation: 0,
      marginBottom: 0,
      marginTop: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0.7,
      borderColor: '#ddd',
    },
    content: {
      paddingTop: 14,
      paddingBottom: 14,
    },
    title: {
      fontSize: 14,
      color: '#777',
    },
    expenseAmount: {
      marginRight: 10,
      fontSize: 14,
      color: theme.brandPrimary,
    },
    incomeAmount: {
      marginRight: 10,
      fontSize: 14,
      color: theme.brandSuccess,
    },
    detailText: {
      fontSize: 12,
      color: '#777',
    },
  },
};
